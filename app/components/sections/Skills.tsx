"use client";

import SectionHead from "@/app/components/ui/SectionHead";
import Reveal from "@/app/components/ui/Reveal";
import { SKILL_GROUPS } from "@/content/skills";

const GROUP_HUES = ["blue", "green", "orange", "blue"] as const;

/** Skill cell intensity encodes proficiency: Expert > Advanced > core. */
function cellStyle(level: string | undefined, hue: string) {
  if (level === "Expert")
    return { background: `var(--chart-${hue})`, color: "#fff", borderColor: "transparent" };
  if (level === "Advanced")
    return {
      background: "color-mix(in srgb, var(--chart-" + hue + ") 18%, var(--surface))",
      color: "var(--ink)",
      borderColor: "color-mix(in srgb, var(--chart-" + hue + ") 40%, transparent)",
    };
  return {};
}

export default function Skills() {
  return (
    <section id="skills" className="py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <SectionHead kicker="The heat matrix" title="Skills" hue="orange" />

        <div className="grid md:grid-cols-2 gap-4 sm:gap-5">
          {SKILL_GROUPS.map((group, gi) => {
            const hue = GROUP_HUES[gi % GROUP_HUES.length];
            return (
              <Reveal key={group.title} delay={gi * 0.07}>
                <div className="h-full bg-surface border border-line rounded-2xl p-5 sm:p-6">
                  <div className="flex items-center gap-2.5 mb-4">
                    <span
                      className="w-2.5 h-2.5 rounded-[3px]"
                      style={{ background: `var(--chart-${hue})` }}
                      aria-hidden="true"
                    />
                    <h3 className="font-display font-bold text-[15px] text-ink">{group.title}</h3>
                  </div>
                  <ul className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <li
                        key={skill.name}
                        className="inline-flex items-baseline gap-1.5 px-3 py-1.5 border border-line rounded-lg text-[13px] font-medium text-ink-soft"
                        style={cellStyle(skill.level, hue)}
                      >
                        {skill.name}
                        {skill.level && (
                          <span className="font-mono text-[9px] tracking-[0.08em] uppercase opacity-80">
                            {skill.level}
                          </span>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.3}>
          <p className="flex items-center gap-4 mt-5 font-mono text-[10px] tracking-[0.08em] uppercase text-ink-faint">
            <span className="inline-flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-[3px] bg-chart-blue inline-block" /> Expert
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-[3px] bg-chart-blue-soft border border-chart-blue/40 inline-block" /> Advanced
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-[3px] border border-line inline-block" /> Working proficiency
            </span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
