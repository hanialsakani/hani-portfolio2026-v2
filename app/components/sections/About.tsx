"use client";

import ChapterHeading from "@/app/components/ui/ChapterHeading";
import Reveal from "@/app/components/ui/Reveal";
import { ABOUT_PARAGRAPHS, QUICK_FACTS } from "@/content/site";

/** Renders {highlighted} spans in narrative copy as navy emphasis. */
function Narrative({ text }: { text: string }) {
  const parts = text.split(/\{([^}]+)\}/g);
  return (
    <p className="text-ink-soft leading-relaxed">
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          <strong key={i} className="text-navy font-semibold">
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
    <section id="about" className="py-16 sm:py-20">
      <div className="max-w-5xl mx-auto px-5 sm:px-6">
        <ChapterHeading id="about" title="About" />

        <div className="grid md:grid-cols-5 gap-10 md:gap-14">
          <Reveal delay={0.05} className="md:col-span-3 space-y-5">
            {ABOUT_PARAGRAPHS.map((p, i) => (
              <Narrative key={i} text={p.text} />
            ))}
          </Reveal>

          <Reveal delay={0.15} className="md:col-span-2">
            <h3 className="font-mono text-[10px] tracking-[0.18em] uppercase text-ink-faint border-b-2 border-ink pb-2 mb-1">
              Particulars
            </h3>
            <dl>
              {QUICK_FACTS.map((fact) => (
                <div
                  key={fact.label}
                  className="flex items-baseline justify-between gap-4 py-3 border-b border-hairline"
                >
                  <dt className="font-mono text-[10px] tracking-[0.14em] uppercase text-ink-faint shrink-0">
                    {fact.label}
                  </dt>
                  <dd className="text-sm font-medium text-ink text-right">
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
