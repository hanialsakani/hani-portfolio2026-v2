"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useTheme } from "@/app/contexts/ThemeContext";

const EDUCATION = [
  {
    degree: "MSc Business Analytics",
    institution: "Kingston University",
    period: "2025 – 2026",
    location: "London, UK",
    icon: "🎓",
    current: true,
    description:
      "Advanced modules in data science, machine learning, business intelligence and strategic analytics.",
  },
  {
    degree: "BSc Information Technology",
    institution: "The Open University",
    period: "Completed",
    location: "UK",
    icon: "💻",
    current: false,
    description:
      "Comprehensive study of software engineering, networking, databases and IT management.",
  },
  {
    degree: "Level 2 Award in IT",
    institution: "Just IT",
    period: "Completed",
    location: "UK",
    icon: "📱",
    current: false,
    description:
      "Foundational IT skills covering hardware, software and digital communication.",
  },
];

export default function EducationSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { theme } = useTheme();
  const isExec = theme === "executive";

  const accentCard = isExec
    ? "border-[rgba(204,10,31,0.5)] shadow-lg shadow-[rgba(204,10,31,0.1)]"
    : "border-indigo-500/50 shadow-lg shadow-indigo-500/10";
  const plainCard = "border-white/10";
  const accentBadge = isExec
    ? "bg-[rgba(204,10,31,0.25)] text-[#ffc2c8]"
    : "bg-indigo-500/25 text-indigo-200";
  const plainBadge = "bg-slate-500/20 text-slate-300";
  const institutionColor = isExec ? "text-[#f47585]" : "text-indigo-300";
  const accentBar = isExec
    ? "bg-gradient-to-r from-[#cc0a1f] to-[#7a0612]"
    : "bg-gradient-to-r from-indigo-500 to-cyan-400";
  const hoverBorder = isExec
    ? "hover:border-[rgba(204,10,31,0.4)]"
    : "hover:border-indigo-500/40";

  return (
    <section id="education" ref={ref} className="relative z-10 py-20 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
              Education
            </span>
          </h2>
          <div className="mt-3 mx-auto w-14 h-[3px] rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400" />
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-5">
          {EDUCATION.map((edu, i) => {
            const cardClass = edu.current ? accentCard : plainCard;
            const badgeClass = edu.current ? accentBadge : plainBadge;

            return (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: i * 0.12 }}
                className={`relative bg-white/[0.025] border rounded-2xl p-6 overflow-hidden transition-all ${cardClass} ${hoverBorder}`}
              >
                {edu.current && (
                  <div className="absolute top-4 right-4">
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${badgeClass}`}>
                      Current
                    </span>
                  </div>
                )}

                <div className="text-3xl mb-4">{edu.icon}</div>
                <h3 className="font-bold text-white mb-1">{edu.degree}</h3>
                <p className={`font-medium text-sm ${institutionColor}`}>{edu.institution}</p>
                <p className="text-slate-500 text-xs mt-1 mb-3">
                  {edu.period} &nbsp;·&nbsp; {edu.location}
                </p>
                <p className="text-slate-400 text-xs leading-relaxed">{edu.description}</p>

                {edu.current && (
                  <div className={`absolute bottom-0 left-0 right-0 h-[2px] ${accentBar}`} />
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
