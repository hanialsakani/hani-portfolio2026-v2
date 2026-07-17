"use client";

import ChapterHeading from "@/app/components/ui/ChapterHeading";
import Reveal from "@/app/components/ui/Reveal";
import { SITE } from "@/content/site";

export default function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-20">
      <div className="max-w-5xl mx-auto px-5 sm:px-6">
        <ChapterHeading id="contact" title="Contact" />

        <div className="max-w-2xl">
          <Reveal delay={0.05}>
            <p className="font-serif text-2xl sm:text-[1.75rem] font-medium text-ink leading-snug [text-wrap:balance] mb-4">
              Let&apos;s put your numbers to work. Open to new opportunities,
              collaborations, and conversations.
            </p>
            <p className="flex items-center gap-2 font-mono text-[11px] tracking-[0.1em] uppercase text-ink-faint mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-good inline-block" aria-hidden="true" />
              {SITE.availability} · {SITE.location}
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="flex flex-wrap gap-3 mb-6">
              <a
                href={`mailto:${SITE.email}`}
                className="px-6 py-3 bg-navy text-paper font-medium text-sm rounded-sm hover:bg-navy-bright transition-colors"
              >
                Send an email
              </a>
              <a
                href={SITE.linkedin.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-hairline text-ink font-medium text-sm rounded-sm hover:border-ink transition-colors"
              >
                LinkedIn ↗
              </a>
            </div>
            <p className="font-mono text-[11px] text-ink-faint">
              {SITE.email} — {SITE.responseNote}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
