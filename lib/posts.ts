import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import {
  INLINE_TYPES,
  type Post,
  type PostAttachment,
  type PostType,
} from "@/lib/post-types";

export { TYPE_META, INLINE_TYPES, type Post, type PostType } from "@/lib/post-types";

const IMAGE_EXT = /\.(png|jpe?g|webp|gif|svg|avif)$/i;

/** Frontmatter: `attachment: /files/report.pdf` (+ optional `attachmentLabel`). */
function parseAttachment(data: Record<string, unknown>): PostAttachment | undefined {
  if (typeof data.attachment !== "string" || data.attachment.length === 0) return undefined;
  const url = data.attachment;
  const fallback = url.split("/").pop() ?? url;
  return {
    url,
    label:
      typeof data.attachmentLabel === "string" && data.attachmentLabel.length > 0
        ? data.attachmentLabel
        : fallback,
    kind: IMAGE_EXT.test(url) ? "image" : "file",
  };
}

const POSTS_DIR = path.join(process.cwd(), "content", "posts");

function toPlainText(md: string): string {
  return md
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/`([^`]*)`/g, "$1")
    .replace(/!\[[^\]]*\]\([^)]*\)/g, " ")
    .replace(/\[([^\]]*)\]\([^)]*\)/g, "$1")
    .replace(/[#>*_~-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export function getAllPosts(): Post[] {
  if (!fs.existsSync(POSTS_DIR)) return [];

  const posts = fs
    .readdirSync(POSTS_DIR)
    .filter((f) => f.endsWith(".md"))
    .map((file) => {
      const raw = fs.readFileSync(path.join(POSTS_DIR, file), "utf8");
      const { data, content } = matter(raw);

      const slug = file.replace(/\.md$/, "");
      const type: PostType = (data.type as PostType) ?? "note";
      const plain = toPlainText(content);
      const words = plain.split(" ").filter(Boolean).length;
      const firstParagraph =
        content
          .split(/\n\s*\n/)
          .map((p) => toPlainText(p))
          .find((p) => p.length > 0) ?? "";

      // YAML parses unquoted dates as Date objects — normalise to ISO
      const date =
        data.date instanceof Date
          ? data.date.toISOString().slice(0, 10)
          : String(data.date ?? "1970-01-01");

      return {
        slug,
        title: String(data.title ?? slug),
        type,
        tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
        date,
        readingMinutes: Math.max(1, Math.round(words / 200)),
        html: marked.parse(content, { async: false }),
        excerpt:
          firstParagraph.length > 220
            ? firstParagraph.slice(0, 217).trimEnd() + "…"
            : firstParagraph,
        hasPage: !INLINE_TYPES.includes(type),
        attachment: parseAttachment(data),
      } satisfies Post;
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));

  return posts;
}

export function getPost(slug: string): Post | undefined {
  return getAllPosts().find((p) => p.slug === slug);
}

export function getLatestPost(): Post | undefined {
  return getAllPosts()[0];
}
