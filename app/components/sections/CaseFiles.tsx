"use client";

import SectionHead from "@/app/components/ui/SectionHead";
import Reveal from "@/app/components/ui/Reveal";
import { PROJECTS } from "@/content/projects";

/**
 * Case studies. Hidden until the first project is added to
 * content/projects.ts — then it appears here and in the navigation
 * automatically.
 */
export default function CaseFiles() {
  if (PROJECTS.length === 0) return null;

  return (
    <section id="case-files" className="py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <SectionHead kicker="Problem → approach → result" title="Case Studies" hue="orange" />

        <div className="space-y-6">
          {PROJECTS.map((project, i) => (
            <Reveal key={project.title} delay={i * 0.08}>
              <article className="bg-surface border border-line rounded-2xl p-6 sm:p-8">
                <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-chart-orange mb-2">
                  Case {String(i + 1).padStart(2, "0")} · {project.context}
                </p>
                <h3 className="font-display font-bold text-2xl text-ink mb-5">{project.title}</h3>
                <dl className="grid sm:grid-cols-3 gap-5 mb-5">
                  {(
                    [
                      ["Problem", project.problem],
                      ["Approach", project.approach],
                      ["Result", project.result],
                    ] as const
                  ).map(([label, text]) => (
                    <div key={label} className="border-t-2 border-ink pt-3">
                      <dt className="font-mono text-[10px] tracking-[0.12em] uppercase text-ink-faint mb-1.5">
                        {label}
                      </dt>
                      <dd
                        className={`text-sm leading-relaxed ${
                          label === "Result" ? "text-chart-green font-semibold" : "text-ink-soft"
                        }`}
                      >
                        {text}
                      </dd>
                    </div>
                  ))}
                </dl>
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <p className="font-mono text-[11px] text-ink-faint">{project.tools.join(" · ")}</p>
                  {project.link && (
                    <a
                      href={project.link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-[11px] uppercase tracking-[0.1em] text-chart-blue hover:underline"
                    >
                      {project.link.label} ↗
                    </a>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
