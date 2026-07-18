"use client";

import SectionHead from "@/app/components/ui/SectionHead";
import Reveal from "@/app/components/ui/Reveal";
import { EXPERIENCES } from "@/content/experience";

export default function Experience() {
  return (
    <section id="experience" className="py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <SectionHead kicker="The line, plotted role by role" title="Experience" hue="blue" />

        <div className="relative">
          {/* The career line — a rising data series through time */}
          <div
            className="absolute left-[5px] top-2 bottom-2 w-px bg-gradient-to-b from-chart-orange via-chart-blue to-line"
            aria-hidden="true"
          />
          <div className="space-y-8">
            {EXPERIENCES.map((exp, i) => (
              <Reveal key={`${exp.title}-${exp.period}`} delay={Math.min(i * 0.06, 0.3)}>
                <article className="relative pl-8">
                  <span
                    className="absolute left-0 top-2 w-[11px] h-[11px] rounded-full border-2 border-bg"
                    style={{ background: i === 0 ? "var(--chart-orange)" : "var(--chart-blue)" }}
                    aria-hidden="true"
                  />
                  <div className="bg-surface border border-line rounded-2xl p-5 sm:p-6 hover:border-chart-blue/60 transition-colors">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                      <div className="min-w-0">
                        <h3 className="font-display font-bold text-lg text-ink leading-snug">
                          {exp.title}
                        </h3>
                        <p className="text-chart-blue text-sm font-medium mt-0.5">{exp.company}</p>
                      </div>
                      <div className="flex flex-col items-end gap-1 shrink-0">
                        <span className="font-mono text-[11px] text-ink-faint tabular">{exp.period}</span>
                        {exp.type === "Volunteer" && (
                          <span className="font-mono text-[9px] tracking-[0.12em] uppercase text-chart-green border border-chart-green/40 rounded-full px-2 py-0.5">
                            Volunteer
                          </span>
                        )}
                      </div>
                    </div>
                    <ul className="space-y-1.5">
                      {exp.highlights.map((h, hi) => (
                        <li key={hi} className="flex gap-2.5 text-sm text-ink-soft leading-relaxed">
                          <span className="text-chart-orange shrink-0 select-none" aria-hidden="true">
                            ▸
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
      </div>
    </section>
  );
}
