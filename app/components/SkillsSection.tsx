"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useTheme } from "@/app/contexts/ThemeContext";

const SKILL_GROUPS = [
  {
    title: "Data & BI Tools",
    color: "primary",
    skills: ["Tableau", "Power BI", "SQL", "Python", "Looker (Expert)", "Excel (Advanced)"],
  },
  {
    title: "Project & Dev Tools",
    color: "secondary",
    skills: ["SAP", "Jira", "GitHub", "Microsoft 365", "Agile"],
  },
  {
    title: "Business Analysis Skills",
    color: "tertiary",
    skills: [
      "Requirements Elicitation",
      "Stakeholder Analysis",
      "Process Modeling",
      "Gap Analysis",
      "Strategic Analysis",
      "Use Case Development",
      "Business Analysis Planning",
      "Elicitation & Collaboration",
    ],
  },
  {
    title: "Soft Skills",
    color: "soft",
    skills: ["Generative AI", "Data Storytelling", "Presentation Skills", "Problem Solving"],
  },
];

const EXEC_ACCORDION_GROUPS = [
  {
    title: "Data & BI Tools",
    skills: ["Looker (Expert)", "Tableau", "Power BI", "SQL", "Excel (Advanced)", "Python"],
  },
  {
    title: "Business Analysis Skills",
    skills: [
      "Requirements Elicitation",
      "Stakeholder Analysis",
      "Process Modeling",
      "Gap Analysis",
      "Strategic Analysis",
      "Use Case Development",
      "Business Analysis Planning",
      "Elicitation & Collaboration",
    ],
  },
  {
    title: "Project & Dev Tools",
    skills: ["SAP", "Jira", "GitHub", "Microsoft 365", "Agile"],
  },
  {
    title: "Soft Skills",
    skills: ["Generative AI", "Data Storytelling", "Presentation Skills", "Problem Solving"],
  },
];

const SPACE_PILL: Record<string, string> = {
  primary:
    "bg-indigo-500/10 border border-indigo-500/30 text-indigo-200 hover:bg-indigo-500/25 hover:border-indigo-400/60",
  secondary:
    "bg-cyan-500/10 border border-cyan-500/30 text-cyan-200 hover:bg-cyan-500/25 hover:border-cyan-400/60",
  tertiary:
    "bg-violet-500/10 border border-violet-500/30 text-violet-200 hover:bg-violet-500/25 hover:border-violet-400/60",
  soft: "bg-emerald-500/10 border border-emerald-500/30 text-emerald-200 hover:bg-emerald-500/25 hover:border-emerald-400/60",
};

const SPACE_HEADING: Record<string, string> = {
  primary: "text-indigo-300",
  secondary: "text-cyan-300",
  tertiary: "text-violet-300",
  soft: "text-emerald-300",
};

export default function SkillsSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { theme } = useTheme();
  const isExec = theme === "executive";

  return (
    <section id="skills" ref={ref} className="relative z-10 py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold">
            Skills &amp;{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
              Expertise
            </span>
          </h2>
          <div className="mt-3 mx-auto w-14 h-[3px] rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400" />
        </motion.div>

        {isExec ? (
          <ExecAccordion inView={inView} />
        ) : (
          <div className="grid sm:grid-cols-2 gap-5">
            {SKILL_GROUPS.map((group, gi) => (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: gi * 0.12 }}
                className="bg-white/[0.025] border border-white/[0.08] rounded-2xl p-6 hover:border-white/20 transition-colors"
              >
                <h3 className={`font-semibold mb-4 ${SPACE_HEADING[group.color]}`}>
                  {group.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill, si) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.85 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.3, delay: gi * 0.12 + si * 0.04 }}
                      whileHover={{ scale: 1.07 }}
                      className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${SPACE_PILL[group.color]}`}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function ExecAccordion({ inView }: { inView: boolean }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.15 }}
      className="max-w-3xl mx-auto space-y-2"
    >
      {EXEC_ACCORDION_GROUPS.map((group, i) => {
        const isOpen = openIndex === i;
        return (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.08 }}
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="w-full flex items-center justify-between px-5 py-4 rounded-xl border text-left transition-all duration-300"
              style={
                isOpen
                  ? {
                      background: "linear-gradient(to right, #7a0612, #cc0a1f)",
                      borderColor: "rgba(204,10,31,0.5)",
                      boxShadow: "0 0 20px rgba(204,10,31,0.3)",
                    }
                  : {
                      background: "#111111",
                      borderColor: "#222222",
                    }
              }
            >
              <span
                className={`font-semibold text-sm tracking-wide ${isOpen ? "text-white" : "text-[#f5f0e8]"}`}
              >
                {group.title}
              </span>
              <motion.span
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className={`text-base leading-none flex-shrink-0 ${isOpen ? "text-white" : "text-[#cc0a1f]"}`}
              >
                ▾
              </motion.span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="flex flex-wrap gap-2 p-4 bg-[#0d0d0d] border border-[rgba(204,10,31,0.15)] border-t-0 rounded-b-xl">
                    {group.skills.map((skill, si) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.25, delay: si * 0.06 }}
                        whileHover={{ scale: 1.07 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-3 py-1.5 rounded-full text-xs font-medium cursor-pointer transition-all bg-[rgba(122,6,18,0.3)] border border-[rgba(204,10,31,0.35)] text-[#ffc2c8] hover:bg-[rgba(204,10,31,0.2)] hover:border-[rgba(204,10,31,0.55)]"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
