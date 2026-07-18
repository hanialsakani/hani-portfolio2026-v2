"use client";

import SectionHead from "@/app/components/ui/SectionHead";
import Reveal from "@/app/components/ui/Reveal";
import { SITE } from "@/content/site";

export default function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <SectionHead kicker="Add me to your dataset" title="Contact" hue="blue" />

        <Reveal delay={0.05}>
          <div className="relative overflow-hidden bg-surface border border-line rounded-3xl p-7 sm:p-10">
            <svg
              className="absolute right-0 bottom-0 w-56 h-24 opacity-60 pointer-events-none"
              viewBox="0 0 220 90"
              aria-hidden="true"
            >
              <polyline
                points="4,78 34,66 64,70 94,50 124,55 154,32 184,24 214,8"
                fill="none"
                stroke="var(--chart-blue)"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <circle cx="214" cy="8" r="4" fill="var(--chart-orange)" />
            </svg>

            <div className="relative max-w-xl">
              <p className="font-display font-bold text-2xl sm:text-3xl tracking-tight text-ink [text-wrap:balance] mb-3">
                Let&apos;s put your numbers to work.
              </p>
              <p className="flex items-center gap-2 font-mono text-[11px] tracking-[0.1em] uppercase text-ink-faint mb-7">
                <span className="w-1.5 h-1.5 rounded-full bg-chart-green inline-block" aria-hidden="true" />
                {SITE.availability} · {SITE.location}
              </p>
              <div className="flex flex-wrap gap-3 mb-5">
                <a
                  href={`mailto:${SITE.email}`}
                  className="px-6 py-3 bg-chart-blue text-white font-semibold text-sm rounded-xl hover:opacity-90 active:scale-[0.98] transition-all"
                >
                  Send an email
                </a>
                <a
                  href={SITE.linkedin.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 border border-line text-ink font-semibold text-sm rounded-xl hover:border-ink-faint transition-colors"
                >
                  LinkedIn ↗
                </a>
              </div>
              <p className="font-mono text-[11px] text-ink-faint">
                {SITE.email} — {SITE.responseNote}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
