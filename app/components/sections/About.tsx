"use client";

import SectionHead from "@/app/components/ui/SectionHead";
import Reveal from "@/app/components/ui/Reveal";
import { ABOUT_PARAGRAPHS, QUICK_FACTS } from "@/content/site";

function Narrative({ text }: { text: string }) {
  const parts = text.split(/\{([^}]+)\}/g);
  return (
    <p className="text-ink-soft leading-relaxed">
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          <strong key={i} className="text-chart-blue font-semibold">
            {part}
          </strong>
        ) : (
          part
        )
      )}
    </p>
  );
}

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <SectionHead kicker="The analyst behind the numbers" title="About" hue="green" />

        <div className="grid md:grid-cols-5 gap-8 md:gap-12">
          <Reveal delay={0.05} className="md:col-span-3 space-y-5 text-[15px]">
            {ABOUT_PARAGRAPHS.map((p, i) => (
              <Narrative key={i} text={p.text} />
            ))}
          </Reveal>

          <Reveal delay={0.15} className="md:col-span-2">
            <div className="bg-surface border border-line rounded-2xl p-5">
              <h3 className="font-mono text-[10px] tracking-[0.16em] uppercase text-ink-faint mb-2">
                Quick read
              </h3>
              <dl>
                {QUICK_FACTS.map((fact) => (
                  <div
                    key={fact.label}
                    className="flex items-baseline justify-between gap-4 py-2.5 border-b border-line last:border-b-0"
                  >
                    <dt className="font-mono text-[10px] tracking-[0.12em] uppercase text-ink-faint shrink-0">
                      {fact.label}
                    </dt>
                    <dd className="text-sm font-medium text-ink text-right">{fact.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
