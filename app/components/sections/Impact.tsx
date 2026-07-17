"use client";

import ChapterHeading from "@/app/components/ui/ChapterHeading";
import Reveal from "@/app/components/ui/Reveal";
import Counter from "@/app/components/ui/Counter";
import { ACHIEVEMENTS } from "@/content/achievements";

export default function Impact() {
  return (
    <section id="impact" className="py-16 sm:py-20">
      <div className="max-w-5xl mx-auto px-5 sm:px-6">
        <ChapterHeading id="impact" title="Impact" />

        <div className="grid sm:grid-cols-2 border-t border-l border-hairline">
          {ACHIEVEMENTS.map((a, i) => (
            <Reveal
              key={a.label}
              delay={i * 0.08}
              className="border-b border-r border-hairline bg-surface p-6 sm:p-8"
            >
              <span className="block font-mono text-[10px] tracking-[0.16em] uppercase text-brass mb-3">
                Fig. {String(i + 1).padStart(2, "0")}
              </span>
              <p className="font-serif font-medium text-4xl sm:text-5xl text-navy leading-none mb-2">
                <Counter value={a.value} suffix={a.suffix} />
              </p>
              <h3 className="font-semibold text-ink text-sm mb-2">{a.label}</h3>
              <p className="text-ink-soft text-sm leading-relaxed">{a.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
