"use client";

import ChapterHeading from "@/app/components/ui/ChapterHeading";
import Reveal from "@/app/components/ui/Reveal";
import { EDUCATION, CERTIFICATIONS } from "@/content/credentials";

export default function Credentials() {
  return (
    <section id="credentials" className="py-16 sm:py-20">
      <div className="max-w-5xl mx-auto px-5 sm:px-6">
        <ChapterHeading id="credentials" title="Credentials" />

        {/* Education */}
        <Reveal>
          <h3 className="font-mono text-[10px] tracking-[0.18em] uppercase text-ink-faint mb-4">
            Education
          </h3>
        </Reveal>
        <div className="grid sm:grid-cols-3 gap-4 sm:gap-5 mb-14">
          {EDUCATION.map((edu, i) => (
            <Reveal key={edu.degree} delay={i * 0.08}>
              <article
                className={`h-full bg-surface border p-6 ${
                  edu.current ? "border-navy" : "border-hairline"
                }`}
              >
                {edu.current && (
                  <span className="inline-block font-mono text-[9px] tracking-[0.16em] uppercase text-brass border border-brass-soft/50 rounded-sm px-1.5 py-0.5 mb-3">
                    In progress
                  </span>
                )}
                <h4 className="font-serif font-semibold text-lg text-ink leading-snug">
                  {edu.degree}
                </h4>
                <p className="text-navy text-sm font-medium mt-1">{edu.institution}</p>
                <p className="font-mono text-[10px] tracking-[0.08em] text-ink-faint mt-1.5 mb-3">
                  {edu.period} · {edu.location}
                </p>
                <p className="text-ink-soft text-sm leading-relaxed">{edu.description}</p>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Certifications ledger */}
        <Reveal>
          <h3 className="font-mono text-[10px] tracking-[0.18em] uppercase text-ink-faint mb-4">
            Certifications & training
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[560px] border-t-2 border-ink text-sm">
              <thead>
                <tr className="border-b border-hairline">
                  <th scope="col" className="text-left font-mono text-[10px] tracking-[0.14em] uppercase text-ink-faint font-medium py-3 pr-4 w-28">
                    Date
                  </th>
                  <th scope="col" className="text-left font-mono text-[10px] tracking-[0.14em] uppercase text-ink-faint font-medium py-3 pr-4">
                    Certification
                  </th>
                  <th scope="col" className="text-left font-mono text-[10px] tracking-[0.14em] uppercase text-ink-faint font-medium py-3">
                    Issuer
                  </th>
                </tr>
              </thead>
              <tbody>
                {CERTIFICATIONS.map((cert) => (
                  <tr key={cert.name} className="border-b border-hairline align-top">
                    <td className="py-3.5 pr-4 font-mono text-[11px] text-brass tabular whitespace-nowrap">
                      {cert.year ?? "—"}
                    </td>
                    <td className="py-3.5 pr-4 font-medium text-ink leading-snug">
                      {cert.name}
                    </td>
                    <td className="py-3.5 text-ink-soft">{cert.issuer ?? "—"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
