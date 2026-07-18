/* eslint-disable @next/next/no-img-element */
import type { PostAttachment } from "@/lib/post-types";

function PaperclipIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 shrink-0" aria-hidden="true">
      <path d="M21.44 11.05 12.25 20.24a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48" />
    </svg>
  );
}

/**
 * Eye-catching attachment treatment for feed cards and article pages.
 * Images render as a framed preview; files as a bright download chip.
 */
export default function Attachment({
  attachment,
  large = false,
}: {
  attachment: PostAttachment;
  large?: boolean;
}) {
  if (attachment.kind === "image") {
    return (
      <figure className={`relative mt-4 ${large ? "" : "max-w-md"}`}>
        <a href={attachment.url} target="_blank" rel="noopener noreferrer" className="block group/att">
          <img
            src={attachment.url}
            alt={attachment.label}
            loading="lazy"
            className="w-full h-auto max-h-72 object-contain rounded-xl border border-line bg-surface group-hover/att:border-chart-orange transition-colors"
          />
          <span className="absolute top-2.5 right-2.5 inline-flex items-center gap-1.5 bg-chart-orange text-white font-mono text-[9px] tracking-[0.12em] uppercase rounded-full px-2.5 py-1 shadow-sm">
            <PaperclipIcon />
            Attachment
          </span>
        </a>
        <figcaption className="mt-1.5 font-mono text-[10px] text-ink-faint">
          {attachment.label}
        </figcaption>
      </figure>
    );
  }

  return (
    <a
      href={attachment.url}
      target="_blank"
      rel="noopener noreferrer"
      download
      className="group/att relative inline-flex items-center gap-2.5 mt-4 pl-3 pr-4 py-2.5 rounded-xl border-2 border-chart-orange/50 bg-chart-orange/10 hover:border-chart-orange hover:bg-chart-orange/15 transition-colors"
    >
      <span className="relative flex w-7 h-7 items-center justify-center rounded-lg bg-chart-orange text-white">
        <PaperclipIcon />
        <span
          className="absolute inset-0 rounded-lg bg-chart-orange opacity-40 motion-safe:animate-ping motion-safe:[animation-iteration-count:3]"
          aria-hidden="true"
        />
      </span>
      <span className="min-w-0">
        <span className="block font-mono text-[9px] tracking-[0.14em] uppercase text-chart-orange">
          Attachment
        </span>
        <span className="block text-[13px] font-semibold text-ink truncate">
          {attachment.label} <span aria-hidden="true">↓</span>
        </span>
      </span>
    </a>
  );
}
