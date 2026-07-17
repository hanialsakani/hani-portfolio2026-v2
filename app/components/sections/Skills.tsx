"use client";

import ChapterHeading from "@/app/components/ui/ChapterHeading";
import Reveal from "@/app/components/ui/Reveal";
import { SKILL_GROUPS } from "@/content/skills";

export default function Skills() {
  return (
    <section id="skills" className="py-16 sm:py-20">
      <div className="max-w-5xl mx-auto px-5 sm:px-6">
        <ChapterHeading id="skills" title="Skills" />

        <div className="border-t-2 border-ink">
          {SKILL_GROUPS.map((group, gi) => (
            <Reveal key={group.title} delay={gi * 0.07}>
              <div className="grid md:grid-cols-[220px_1fr] gap-3 md:gap-8 py-6 border-b border-hairline">
                <h3 className="font-serif font-semibold text-lg text-ink pt-1">
                  {group.title}
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <li
                      key={skill.name}
                      className="inline-flex items-baseline gap-1.5 px-3 py-1.5 bg-surface border border-hairline rounded-sm text-[13px] text-ink-soft hover:border-navy hover:text-ink transition-colors"
                    >
                      {skill.name}
                      {skill.level && (
                        <span className="font-mono text-[9px] tracking-[0.1em] uppercase text-brass">
                          {skill.level}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
