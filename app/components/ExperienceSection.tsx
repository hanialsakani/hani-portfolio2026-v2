"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useTheme } from "@/app/contexts/ThemeContext";

interface Experience {
  title: string;
  company: string;
  period: string;
  type: "Full-time" | "Volunteer";
  highlights: string[];
}

const EXPERIENCES: Experience[] = [
  {
    title: "Technical & Administrative Assistant",
    company: "The Kingdom of Saudi Arabia Project for Utilization of Hady & Adahi – ISDB",
    period: "May 2022 – Nov 2024",
    type: "Full-time",
    highlights: [
      "Managed project documentation using SAP and Jira; coordinated with contractors and engineers",
      "Oversaw operational logistics for weekly slaughter processes and beneficiary country collaborations",
      "Streamlined meeting schedules and executive reporting, reducing approval times by 20%",
      "Developed professional presentations and reports to support project management and decision-making",
    ],
  },
  {
    title: "IT Business Analyst",
    company: "Altanmiah Alejabiah Association (Non-Profit)",
    period: "May 2022 – Nov 2024",
    type: "Volunteer",
    highlights: [
      "Analysed business procedures and assessed workflows to align with organizational goals",
      "Designed interactive reports and dashboards to support data-driven strategies",
      "Provided technical support and proposed system improvements to enhance efficiency",
    ],
  },
  {
    title: "IT Business Analyst",
    company: "Sawaeid Center (Non-Profit)",
    period: "Jan 2021 – Feb 2022",
    type: "Volunteer",
    highlights: [
      "Documented and analysed work procedures, identifying areas for improvement",
      "Conducted stakeholder interviews to evaluate system effectiveness and recommended updates",
      "Prepared technical reports and delivered findings to senior decision-makers",
    ],
  },
  {
    title: "Project Management Coordinator",
    company: "Modernization & Development of Slaughterhouses Project – ISDB",
    period: "Jul 2019 – Sep 2020",
    type: "Full-time",
    highlights: [
      "Managed project timelines, budgets, and deliverables to ensure successful execution",
      "Communicated with consulting firms to define project requirements and scope",
      "Maintained accurate project documentation for efficient tracking and compliance",
    ],
  },
  {
    title: "Administrative Supervisor",
    company: "Munif Al Nahdi Group (Mize)",
    period: "Sep 2018 – Jun 2019",
    type: "Full-time",
    highlights: [
      "Setting goals for performance and deadlines in compliance with company plans",
      "Organizing workflow and ensuring employees understand duties",
      "Monitoring employee productivity and providing constructive feedback",
      "Managing administrative works and KPI delivery",
      "Management of supply chain inventories and suppliers claims",
    ],
  },
  {
    title: "Administrative Officer",
    company: "Munif Al Nahdi Group (Mize)",
    period: "Feb 2012 – Sep 2018",
    type: "Full-time",
    highlights: [
      "Management of office supplies and inventories",
      "Maintenance of reliable office database for document safekeeping",
      "Preparation of minutes, calendar of activities, and travel itineraries",
      "Preparation of reports and statistical data for higher management",
      "Technical and administrative support to colleagues and clients",
    ],
  },
];

export default function ExperienceSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { theme } = useTheme();
  const isExec = theme === "executive";

  return (
    <section id="experience" ref={ref} className="relative z-10 py-20 px-4 sm:px-6">
      {isExec ? (
        <ExecCarousel inView={inView} />
      ) : (
        <SpaceTimeline inView={inView} />
      )}
    </section>
  );
}

/* ── Space: vertical timeline ─────────────────────────────────────── */

function SpaceTimeline({ inView }: { inView: boolean }) {
  return (
    <div className="max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-14"
      >
        <h2 className="text-3xl sm:text-4xl font-bold">
          Work{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
            Experience
          </span>
        </h2>
        <div className="mt-3 mx-auto w-14 h-[3px] rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400" />
      </motion.div>

      <div className="relative">
        <div className="absolute left-[7px] sm:left-[11px] top-0 bottom-4 w-px bg-gradient-to-b from-indigo-500 via-cyan-500/50 to-transparent" />
        <div className="space-y-10">
          {EXPERIENCES.map((exp, i) => (
            <ExperienceCard key={i} exp={exp} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </div>
  );
}

function ExperienceCard({ exp, index, inView }: { exp: Experience; index: number; inView: boolean }) {
  return (
    <div className="relative pl-8 sm:pl-12">
      <div className="absolute left-0 top-5 w-[15px] h-[15px] rounded-full bg-indigo-500 border-2 border-[#0a0a0c] shadow-[0_0_12px_rgba(99,102,241,0.7)] z-10" />
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, delay: index * 0.12 }}
        className="bg-white/[0.025] border border-white/[0.08] rounded-2xl p-5 sm:p-6 hover:border-indigo-500/40 hover:bg-white/[0.04] transition-all"
      >
        <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
          <div>
            <h3 className="font-bold text-white text-base sm:text-lg leading-snug">{exp.title}</h3>
            <p className="text-indigo-300 font-medium text-sm mt-0.5">{exp.company}</p>
          </div>
          <div className="flex flex-col items-end gap-1 flex-shrink-0">
            <span className="text-xs text-slate-400">{exp.period}</span>
            <span className={`text-[11px] px-2.5 py-0.5 rounded-full font-medium ${exp.type === "Volunteer" ? "bg-cyan-500/20 text-cyan-300" : "bg-indigo-500/20 text-indigo-300"}`}>
              {exp.type}
            </span>
          </div>
        </div>
        <ul className="space-y-2">
          {exp.highlights.map((h, i) => (
            <li key={i} className="flex gap-2.5 text-sm text-slate-400">
              <span className="text-indigo-400 mt-0.5 flex-shrink-0">▸</span>
              <span>{h}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
}

/* ── Executive: horizontal carousel + modal ───────────────────────── */

function ExecCarousel({ inView }: { inView: boolean }) {
  const [active, setActive] = useState(0);
  const [modal, setModal] = useState<Experience | null>(null);
  const total = EXPERIENCES.length;

  const prev = useCallback(() => setActive((a) => (a - 1 + total) % total), [total]);
  const next = useCallback(() => setActive((a) => (a + 1) % total), [total]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (modal) return;
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [prev, next, modal]);

  return (
    <div className="max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-14"
      >
        <h2 className="text-3xl sm:text-4xl font-bold">
          Work{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
            Experience
          </span>
        </h2>
        <div className="mt-3 mx-auto w-14 h-[3px] rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.65, delay: 0.2 }}
      >
        {/* Carousel viewport */}
        <div className="relative h-72 sm:h-64 overflow-hidden select-none">
          {EXPERIENCES.map((exp, i) => {
            const offset = i - active;
            const absOffset = Math.abs(offset);
            const scale = absOffset === 0 ? 1 : absOffset === 1 ? 0.82 : 0.65;
            const opacity = absOffset === 0 ? 1 : absOffset === 1 ? 0.55 : 0;
            const x = `${offset * 84}%`;
            const zIndex = total - absOffset;
            const isActive = offset === 0;

            return (
              <motion.div
                key={i}
                animate={{ x, scale, opacity }}
                transition={{ type: "spring", stiffness: 280, damping: 30 }}
                style={{ zIndex, position: "absolute", top: 0, left: "50%", marginLeft: "-40%", width: "80%" }}
                className={`${isActive ? "cursor-pointer" : "cursor-pointer"}`}
                onClick={() => {
                  if (isActive) setModal(exp);
                  else setActive(i);
                }}
              >
                <div className={`border rounded-2xl p-5 sm:p-6 h-full transition-colors ${isActive ? "bg-white/[0.05] border-[rgba(204,10,31,0.5)] shadow-lg shadow-[rgba(204,10,31,0.12)]" : "bg-white/[0.02] border-white/[0.06]"}`}>
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                    <div className="min-w-0">
                      <h3 className="font-bold text-white text-sm sm:text-base leading-snug">{exp.title}</h3>
                      <p className="text-[#f47585] font-medium text-xs sm:text-sm mt-0.5 truncate">{exp.company}</p>
                    </div>
                    <div className="flex flex-col items-end gap-1 flex-shrink-0">
                      <span className="text-xs text-slate-400">{exp.period}</span>
                      <span className={`text-[11px] px-2 py-0.5 rounded-full font-medium ${exp.type === "Volunteer" ? "bg-[rgba(122,6,18,0.2)] text-[#ffc2c8]" : "bg-[rgba(204,10,31,0.2)] text-[#ffc2c8]"}`}>
                        {exp.type}
                      </span>
                    </div>
                  </div>
                  <ul className="space-y-1.5 overflow-hidden">
                    {exp.highlights.slice(0, 2).map((h, hi) => (
                      <li key={hi} className="flex gap-2 text-xs text-slate-400 line-clamp-1">
                        <span className="text-[#cc0a1f] flex-shrink-0">▸</span>
                        <span className="truncate">{h}</span>
                      </li>
                    ))}
                  </ul>
                  {isActive && (
                    <p className="text-[10px] text-slate-500 mt-3 text-right">Click to expand →</p>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-6 mt-6">
          <button
            onClick={prev}
            className="w-10 h-10 rounded-full border border-[rgba(204,10,31,0.4)] text-[#f47585] flex items-center justify-center hover:bg-[rgba(204,10,31,0.1)] transition-colors"
          >
            ←
          </button>

          <div className="flex gap-2">
            {EXPERIENCES.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`rounded-full transition-all ${i === active ? "w-6 h-2 bg-[#cc0a1f]" : "w-2 h-2 bg-white/20 hover:bg-white/40"}`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="w-10 h-10 rounded-full border border-[rgba(204,10,31,0.4)] text-[#f47585] flex items-center justify-center hover:bg-[rgba(204,10,31,0.1)] transition-colors"
          >
            →
          </button>
        </div>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {modal && (
          <ExperienceModal exp={modal} onClose={() => setModal(null)} />
        )}
      </AnimatePresence>
    </div>
  );
}

function ExperienceModal({ exp, onClose }: { exp: Experience; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.92, y: 20 }}
        transition={{ type: "spring", stiffness: 320, damping: 28 }}
        className="relative bg-[#111111] border border-[rgba(204,10,31,0.4)] rounded-2xl p-6 sm:p-8 max-w-lg w-full shadow-2xl shadow-[rgba(204,10,31,0.15)] z-10"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full border border-white/10 text-slate-400 hover:text-white hover:border-white/30 flex items-center justify-center transition-colors text-sm"
        >
          ✕
        </button>

        <div className="mb-5">
          <h3 className="font-bold text-white text-lg sm:text-xl leading-snug pr-8">{exp.title}</h3>
          <p className="text-[#f47585] font-medium text-sm mt-1">{exp.company}</p>
          <div className="flex items-center gap-2 mt-2">
            <span className="text-xs text-slate-400">{exp.period}</span>
            <span className="text-slate-600">·</span>
            <span className={`text-[11px] px-2 py-0.5 rounded-full font-medium ${exp.type === "Volunteer" ? "bg-[rgba(122,6,18,0.25)] text-[#ffc2c8]" : "bg-[rgba(204,10,31,0.25)] text-[#ffc2c8]"}`}>
              {exp.type}
            </span>
          </div>
        </div>

        <div className="h-px bg-[rgba(204,10,31,0.2)] mb-5" />

        <ul className="space-y-3">
          {exp.highlights.map((h, i) => (
            <li key={i} className="flex gap-3 text-sm text-slate-300">
              <span className="text-[#cc0a1f] mt-0.5 flex-shrink-0">▸</span>
              <span>{h}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  );
}
