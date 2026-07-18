"use client";

import { useState } from "react";
import Link from "next/link";
import Reveal from "@/app/components/ui/Reveal";
import Sparkline from "@/app/components/ui/Sparkline";
import Attachment from "@/app/insights/Attachment";
import { TYPE_META, type Post, type PostType } from "@/lib/post-types";

const FILTERS: { key: PostType | "all"; label: string }[] = [
  { key: "all", label: "All" },
  { key: "note", label: "Notes" },
  { key: "article", label: "Articles" },
  { key: "chart", label: "Charts" },
  { key: "win", label: "Wins" },
  { key: "toolbox", label: "Toolbox" },
];

const HUE_CLASS: Record<string, string> = {
  blue: "text-chart-blue border-chart-blue/40",
  green: "text-chart-green border-chart-green/40",
  orange: "text-chart-orange border-chart-orange/40",
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

function PostCard({ post }: { post: Post }) {
  const meta = TYPE_META[post.type];
  const head = (
    <div className="flex items-center justify-between gap-4 mb-2.5">
      <p className="flex flex-wrap items-center gap-x-2.5 gap-y-1 font-mono text-[10px] tracking-[0.08em] uppercase text-ink-faint">
        <span className={`border rounded-full px-2 py-0.5 ${HUE_CLASS[meta.color]}`}>
          {meta.label}
        </span>
        <span>{formatDate(post.date)}</span>
        <span>·</span>
        <span>{post.readingMinutes} min</span>
      </p>
      <span className="hidden min-[420px]:block">
        <Sparkline seed={post.slug} hue={meta.color as "blue" | "green" | "orange"} width={72} height={24} />
      </span>
    </div>
  );

  const tags = post.tags.length > 0 && (
    <p className="flex flex-wrap gap-1.5 mt-3.5">
      {post.tags.map((t) => (
        <span key={t} className="font-mono text-[10px] text-ink-faint bg-grid rounded-full px-2.5 py-0.5">
          #{t}
        </span>
      ))}
    </p>
  );

  if (!post.hasPage) {
    // Notes, charts and wins render fully in the feed — zero clicks.
    return (
      <article className="bg-surface border border-line rounded-2xl p-5 sm:p-6">
        {head}
        <h2 className="font-display font-bold text-[17px] text-ink leading-snug mb-2">
          {post.title}
        </h2>
        <div
          className="prose-post text-sm"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
        {post.attachment && <Attachment attachment={post.attachment} />}
        {tags}
      </article>
    );
  }

  return (
    <article className="bg-surface border border-line rounded-2xl p-5 sm:p-6 hover:border-chart-blue transition-colors">
      {head}
      <Link href={`/insights/${post.slug}`} className="group">
        <h2 className="font-display font-bold text-[17px] text-ink leading-snug mb-1.5 group-hover:text-chart-blue transition-colors">
          {post.title} <span aria-hidden="true">→</span>
        </h2>
        <p className="text-sm text-ink-soft leading-relaxed">{post.excerpt}</p>
      </Link>
      {post.attachment && <Attachment attachment={post.attachment} />}
      {tags}
    </article>
  );
}

export default function FeedList({ posts }: { posts: Post[] }) {
  const [filter, setFilter] = useState<PostType | "all">("all");
  const shown = filter === "all" ? posts : posts.filter((p) => p.type === filter);

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-7" role="group" aria-label="Filter posts by type">
        {FILTERS.map(({ key, label }) => (
          <button
            key={key}
            onClick={() => setFilter(key)}
            aria-pressed={filter === key}
            className={`px-3.5 py-1.5 rounded-full text-[12px] font-semibold border transition-colors ${
              filter === key
                ? "bg-ink text-bg border-ink"
                : "border-line text-ink-soft hover:text-ink hover:border-ink-faint"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {shown.length === 0 ? (
        <p className="text-ink-faint text-sm py-10 text-center border border-dashed border-line rounded-2xl">
          Nothing here yet — the next post is loading… 📈
        </p>
      ) : (
        <div className="space-y-4">
          {shown.map((post, i) => (
            <Reveal key={post.slug} delay={Math.min(i * 0.05, 0.25)}>
              <PostCard post={post} />
            </Reveal>
          ))}
        </div>
      )}
    </div>
  );
}
