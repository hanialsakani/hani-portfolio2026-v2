"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useTheme } from "@/app/contexts/ThemeContext";

export default function AboutSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { theme } = useTheme();
  const isExec = theme === "executive";

  const hi1 = isExec ? "text-[#f47585]" : "text-indigo-300";
  const hi2 = isExec ? "text-[#e07080]" : "text-cyan-300";
  const factHover = isExec
    ? "hover:border-[rgba(204,10,31,0.3)]"
    : "hover:border-indigo-500/30";

  return (
    <section id="about" ref={ref} className="relative z-10 py-20 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <SectionHeading label="About" highlight="Me" inView={inView} />

        <div className="grid sm:grid-cols-3 gap-5 mt-12">
          {/* Main bio */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="sm:col-span-2 bg-white/[0.03] border border-white/10 rounded-2xl p-7 space-y-4"
          >
            <p className="text-slate-300 leading-relaxed">
              I am a results-driven{" "}
              <strong className={`${hi1} font-semibold`}>Business Analyst</strong>{" "}
              and{" "}
              <strong className={`${hi2} font-semibold`}>Data Analytics</strong>{" "}
              professional with a proven track record in data-driven decision
              making, business process optimisation, and executive stakeholder
              engagement. I combine
              technical expertise with a sharp business acumen to translate
              complex data into actionable decisions.
            </p>
            <p className="text-slate-300 leading-relaxed">
              My career spans over{" "}
              <strong className={`${hi1} font-semibold`}>10 years</strong>{" "}
              across IT business analysis, project management, and administrative
              leadership roles, where I delivered a{" "}
              <strong className={`${hi2} font-semibold`}>30% efficiency improvement</strong>
              , achieved{" "}
              <strong className={`${hi2} font-semibold`}>20% faster approval cycles</strong>
              , and supported programmes for over{" "}
              <strong className={`${hi2} font-semibold`}>16,000 participants</strong>.
            </p>
            <p className="text-slate-300 leading-relaxed">
              Currently pursuing an{" "}
              <strong className={`${hi1} font-semibold`}>MSc in Business Analytics</strong>{" "}
              at Kingston University (2025–2026), I am deepening my expertise
              in advanced analytics and machine learning to drive even greater
              impact.
            </p>
          </motion.div>

          {/* Quick facts */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.22 }}
            className="flex flex-col gap-3"
          >
            {[
              { label: "Location", value: "Greater London, UK" },
              { label: "Certification", value: "ECBA (IIBA)" },
              { label: "Languages", value: "English, Arabic" },
              { label: "Availability", value: "Open to Opportunities" },
              { label: "Focus Area", value: "Business Analysis & Data" },
            ].map((fact) => (
              <div
                key={fact.label}
                className={`bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 transition-colors ${factHover}`}
              >
                <p className="text-[10px] uppercase tracking-widest text-slate-500 mb-0.5">
                  {fact.label}
                </p>
                <p className="text-sm font-medium text-slate-200">{fact.value}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function SectionHeading({
  label,
  highlight,
  inView,
}: {
  label: string;
  highlight: string;
  inView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="text-center"
    >
      <h2 className="text-3xl sm:text-4xl font-bold">
        {label}{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
          {highlight}
        </span>
      </h2>
      <div className="mt-3 mx-auto w-14 h-[3px] rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400" />
    </motion.div>
  );
}
