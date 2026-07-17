"use client";

import ChapterHeading from "@/app/components/ui/ChapterHeading";
import Reveal from "@/app/components/ui/Reveal";
import { EXPERIENCES } from "@/content/experience";

export default function Experience() {
  return (
    <section id="experience" className="py-16 sm:py-20">
      <div className="max-w-5xl mx-auto px-5 sm:px-6">
        <ChapterHeading id="experience" title="Experience" />

        <div className="border-t-2 border-ink">
          {EXPERIENCES.map((exp, i) => (
            <Reveal key={`${exp.title}-${exp.period}`} delay={Math.min(i * 0.06, 0.3)}>
              <article className="grid md:grid-cols-[190px_1fr] gap-2 md:gap-8 py-7 border-b border-hairline">
                <div className="pt-0.5">
                  <p className="font-mono text-[11px] tracking-[0.06em] text-ink-faint tabular">
                    {exp.period}
                  </p>
                  {exp.type === "Volunteer" && (
                    <span className="inline-block mt-1.5 font-mono text-[9px] tracking-[0.14em] uppercase text-brass border border-brass-soft/50 rounded-sm px-1.5 py-0.5">
                      Volunteer
                    </span>
                  )}
                </div>
                <div>
                  <h3 className="font-serif font-semibold text-xl text-ink leading-snug">
                    {exp.title}
                  </h3>
                  <p className="text-navy text-sm font-medium mt-0.5 mb-3.5">
                    {exp.company}
                  </p>
                  <ul className="space-y-2">
                    {exp.highlights.map((h, hi) => (
                      <li key={hi} className="flex gap-3 text-sm text-ink-soft leading-relaxed">
                        <span className="text-brass-soft shrink-0 select-none" aria-hidden="true">
                          —
                        </span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
