/** Client-safe post metadata shared by feed UI and server loaders. */

export type PostType = "note" | "article" | "chart" | "win" | "toolbox";

/** Post types that render fully inside the feed (no detail page). */
export const INLINE_TYPES: PostType[] = ["note", "chart", "win"];

export const TYPE_META: Record<PostType, { label: string; color: string }> = {
  note: { label: "Note", color: "green" },
  article: { label: "Article", color: "blue" },
  chart: { label: "Chart of the Week", color: "orange" },
  win: { label: "Win", color: "green" },
  toolbox: { label: "Toolbox", color: "blue" },
};

export interface PostAttachment {
  url: string;
  label: string;
  /** Images render as an inline preview; files as a download chip */
  kind: "image" | "file";
}

export interface Post {
  slug: string;
  title: string;
  type: PostType;
  tags: string[];
  date: string; // ISO yyyy-mm-dd
  readingMinutes: number;
  /** Rendered HTML of the full body */
  html: string;
  /** Plain-text excerpt (first paragraph) */
  excerpt: string;
  /** True when the post gets its own /insights/[slug] page */
  hasPage: boolean;
  /** Optional attachment declared in frontmatter */
  attachment?: PostAttachment;
}
