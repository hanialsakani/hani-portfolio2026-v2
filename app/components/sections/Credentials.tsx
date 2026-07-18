"use client";

import SectionHead from "@/app/components/ui/SectionHead";
import Reveal from "@/app/components/ui/Reveal";
import { EDUCATION, CERTIFICATIONS } from "@/content/credentials";

export default function Credentials() {
  return (
    <section id="credentials" className="py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <SectionHead kicker="Verified data points" title="Credentials" hue="green" />

        {/* Education */}
        <div className="grid sm:grid-cols-3 gap-4 sm:gap-5 mb-12">
          {EDUCATION.map((edu, i) => (
            <Reveal key={edu.degree} delay={i * 0.08}>
              <article
                className={`h-full bg-surface border rounded-2xl p-6 ${
                  edu.current ? "border-chart-green" : "border-line"
                }`}
              >
                {edu.current && (
                  <span className="inline-flex items-center gap-1.5 font-mono text-[9px] tracking-[0.14em] uppercase text-chart-green border border-chart-green/40 rounded-full px-2 py-0.5 mb-3">
                    <span className="w-1 h-1 rounded-full bg-chart-green inline-block" aria-hidden="true" />
                    In progress
                  </span>
                )}
                <h4 className="font-display font-bold text-[16px] text-ink leading-snug">
                  {edu.degree}
                </h4>
                <p className="text-chart-blue text-sm font-medium mt-1">{edu.institution}</p>
                <p className="font-mono text-[10px] tracking-[0.06em] text-ink-faint mt-1.5 mb-3">
                  {edu.period} · {edu.location}
                </p>
                <p className="text-ink-soft text-sm leading-relaxed">{edu.description}</p>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Certifications */}
        <Reveal>
          <h3 className="font-mono text-[10px] tracking-[0.16em] uppercase text-ink-faint mb-4">
            Certifications & training
          </h3>
          <div className="overflow-x-auto bg-surface border border-line rounded-2xl">
            <table className="w-full min-w-[560px] text-sm">
              <thead>
                <tr className="border-b border-line">
                  <th scope="col" className="text-left font-mono text-[10px] tracking-[0.12em] uppercase text-ink-faint font-medium py-3 px-5 w-28">
                    Date
                  </th>
                  <th scope="col" className="text-left font-mono text-[10px] tracking-[0.12em] uppercase text-ink-faint font-medium py-3 pr-4">
                    Certification
                  </th>
                  <th scope="col" className="text-left font-mono text-[10px] tracking-[0.12em] uppercase text-ink-faint font-medium py-3 pr-5">
                    Issuer
                  </th>
                </tr>
              </thead>
              <tbody>
                {CERTIFICATIONS.map((cert) => (
                  <tr key={cert.name} className="border-b border-line last:border-b-0 align-top">
                    <td className="py-3.5 px-5 font-mono text-[11px] text-chart-green tabular whitespace-nowrap">
                      {cert.year ?? "—"}
                    </td>
                    <td className="py-3.5 pr-4 font-medium text-ink leading-snug">{cert.name}</td>
                    <td className="py-3.5 pr-5 text-ink-soft">{cert.issuer ?? "—"}</td>
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
