"use client";

import { motion } from "framer-motion";

const ITEMS = [
  "Business Analysis",
  "Data Analytics",
  "Tableau",
  "Power BI",
  "SQL",
  "Python",
  "SAP",
  "Jira",
  "Process Optimisation",
  "Stakeholder Management",
  "Agile",
  "ECBA Certified",
  "Looker",
  "Excel",
  "GitHub",
];

export default function MarqueeSection() {
  const items = [...ITEMS, ...ITEMS, ...ITEMS];

  return (
    <div className="relative z-10 overflow-hidden border-t border-indigo-900/30 py-5 mt-4">
      <motion.div
        className="flex gap-10 whitespace-nowrap"
        animate={{ x: ["0%", "-33.333%"] }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
      >
        {items.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-2.5 text-xs uppercase tracking-[0.2em] text-slate-600 flex-shrink-0"
          >
            <span className="text-indigo-500 text-[8px]">◆</span>
            {item}
          </span>
        ))}
      </motion.div>

      {/* Fade edges — use CSS variable for background to match theme */}
      <div
        className="absolute inset-y-0 left-0 w-16 pointer-events-none"
        style={{ background: "linear-gradient(to right, var(--bg-primary), transparent)" }}
      />
      <div
        className="absolute inset-y-0 right-0 w-16 pointer-events-none"
        style={{ background: "linear-gradient(to left, var(--bg-primary), transparent)" }}
      />
    </div>
  );
}
