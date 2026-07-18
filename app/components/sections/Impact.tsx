"use client";

import SectionHead from "@/app/components/ui/SectionHead";
import Reveal from "@/app/components/ui/Reveal";
import Counter from "@/app/components/ui/Counter";
import { ACHIEVEMENTS } from "@/content/achievements";

const HUES = ["blue", "green", "orange", "blue"] as const;
const BARS = [
  [34, 48, 42, 62, 70, 100],
  [100, 88, 92, 74, 66, 55],
  [18, 30, 44, 58, 80, 100],
  [22, 34, 46, 60, 78, 100],
];

function MiniBars({ values, hue }: { values: number[]; hue: string }) {
  return (
    <svg width="96" height="34" viewBox="0 0 96 34" aria-hidden="true" className="shrink-0">
      {values.map((v, i) => (
        <rect
          key={i}
          x={i * 16 + 2}
          y={34 - (v / 100) * 30 - 2}
          width={10}
          height={(v / 100) * 30}
          rx={2}
          fill={i === values.length - 1 ? "var(--chart-orange)" : `var(--chart-${hue})`}
          opacity={i === values.length - 1 ? 1 : 0.55}
        />
      ))}
    </svg>
  );
}

export default function Impact() {
  return (
    <section id="impact" className="py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <SectionHead kicker="Measured, not claimed" title="Impact" hue="blue" />

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
          {ACHIEVEMENTS.map((a, i) => (
            <Reveal key={a.label} delay={i * 0.08}>
              <article className="h-full bg-surface border border-line rounded-2xl p-6 sm:p-7 hover:border-chart-blue/60 transition-colors">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <p className="font-display font-extrabold text-4xl sm:text-5xl tracking-tight text-ink tabular leading-none">
                    <span style={{ color: `var(--chart-${HUES[i]})` }}>
                      <Counter value={a.value} suffix={a.suffix} />
                    </span>
                  </p>
                  <MiniBars values={BARS[i % BARS.length]} hue={HUES[i]} />
                </div>
                <h3 className="font-semibold text-ink text-[15px] mb-1.5">{a.label}</h3>
                <p className="text-ink-soft text-sm leading-relaxed">{a.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
