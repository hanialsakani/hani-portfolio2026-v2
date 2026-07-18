"use client";

import { useState } from "react";

export default function ShareRow({ url, title }: { url: string; title: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {}
  };

  const linkedin = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
  const x = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`;

  return (
    <div className="flex flex-wrap items-center gap-2" aria-label="Share this post">
      <span className="font-mono text-[10px] tracking-[0.14em] uppercase text-ink-faint mr-1">
        Share
      </span>
      <a
        href={linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="px-3.5 py-1.5 rounded-full text-[12px] font-semibold border border-line text-ink-soft hover:text-chart-blue hover:border-chart-blue/50 transition-colors"
      >
        LinkedIn ↗
      </a>
      <a
        href={x}
        target="_blank"
        rel="noopener noreferrer"
        className="px-3.5 py-1.5 rounded-full text-[12px] font-semibold border border-line text-ink-soft hover:text-chart-blue hover:border-chart-blue/50 transition-colors"
      >
        X ↗
      </a>
      <button
        onClick={copy}
        className="px-3.5 py-1.5 rounded-full text-[12px] font-semibold border border-line text-ink-soft hover:text-chart-green hover:border-chart-green/50 transition-colors"
      >
        {copied ? "Copied ✓" : "Copy link"}
      </button>
    </div>
  );
}
