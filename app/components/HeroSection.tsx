"use client";

import { useState, useEffect, useRef } from "react";
import { motion, type Variants } from "framer-motion";
import { useTheme } from "@/app/contexts/ThemeContext";

const PHRASES = [
  "Business Analyst",
  "Data Analytics Expert",
  "Process Optimiser",
  "Insights Strategist",
];

const SPACE_PHRASE_GRADIENTS = [
  "linear-gradient(to right, #818cf8, #c084fc)",
  "linear-gradient(to right, #22d3ee, #60a5fa)",
  "linear-gradient(to right, #c084fc, #f472b6)",
  "linear-gradient(to right, #34d399, #22d3ee)",
];

const EXEC_PHRASE_GRADIENTS = [
  "linear-gradient(to right, #f47585, #cc0a1f)",
  "linear-gradient(to right, #cc0a1f, #7a0612)",
  "linear-gradient(to right, #e07080, #cc0a1f)",
  "linear-gradient(to right, #f47585, #a3081c)",
];

const SKILLS = ["Power BI", "SQL", "Python", "Agile", "Tableau", "Looker", "ECBA"];

const STATS = [
  { value: "10+", label: "Years Exp." },
  { value: "ECBA", label: "Certified" },
];

function useTypewriter(phrases: string[]) {
  const [display, setDisplay] = useState("");
  const [phraseIdx, setPhraseIdx] = useState(0);
  const idxRef = useRef(0);
  const charIdx = useRef(0);
  const deleting = useRef(false);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    const tick = () => {
      const phrase = phrases[idxRef.current];

      if (!deleting.current) {
        charIdx.current += 1;
        setDisplay(phrase.slice(0, charIdx.current));

        if (charIdx.current === phrase.length) {
          deleting.current = true;
          timer = setTimeout(tick, 1800);
          return;
        }
        timer = setTimeout(tick, 85);
      } else {
        charIdx.current -= 1;
        setDisplay(phrase.slice(0, charIdx.current));

        if (charIdx.current === 0) {
          deleting.current = false;
          idxRef.current = (idxRef.current + 1) % phrases.length;
          setPhraseIdx(idxRef.current);
        }
        timer = setTimeout(tick, 40);
      }
    };

    timer = setTimeout(tick, 900);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { display, phraseIdx };
}

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } },
};

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 flex-shrink-0">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5 flex-shrink-0">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

export default function HeroSection() {
  const { display, phraseIdx } = useTypewriter(PHRASES);
  const { theme } = useTheme();
  const isExec = theme === "executive";
  const phraseGradients = isExec ? EXEC_PHRASE_GRADIENTS : SPACE_PHRASE_GRADIENTS;

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center z-10 px-4 sm:px-6 overflow-hidden"
    >
      {/* Ambient glow orbs */}
      <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-indigo-600/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-cyan-600/10 blur-3xl pointer-events-none" />
      <motion.div
        animate={{ x: [0, 50, 0], y: [0, -40, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 right-1/4 w-72 h-72 rounded-full bg-purple-600/[0.06] blur-3xl pointer-events-none"
      />

      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-10 md:gap-16 items-center py-28 md:py-20">
        {/* ── Text column ── */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="order-2 md:order-1"
        >
          {/* Eyebrow */}
          <motion.div variants={item} className="flex items-center gap-2 mb-5">
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.25em] uppercase text-indigo-400">
              <motion.span
                animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1.5 h-1.5 rounded-full bg-indigo-400 inline-block"
              />
              Welcome to my portfolio
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={item}
            className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold leading-tight mb-4"
          >
            Hi, I&apos;m{" "}
            <span className="relative inline-block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400">
                Hani Alsakani
              </span>
              <motion.span
                className="absolute -bottom-1 left-0 h-[2px] bg-gradient-to-r from-indigo-500 via-purple-400 to-cyan-400 rounded-full"
                style={{ originX: 0 }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.9, duration: 0.75, ease: "easeOut" as const }}
              />
            </span>
          </motion.h1>

          {/* Typewriter */}
          <motion.div
            variants={item}
            className="flex items-center h-10 mb-5"
          >
            <span
              className="text-xl sm:text-2xl font-semibold"
              style={{
                backgroundImage: phraseGradients[phraseIdx],
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                transition: "background-image 0.4s ease",
              }}
            >
              {display}
            </span>
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 0.7, repeat: Infinity }}
              className="inline-block ml-0.5 w-[2px] h-6 bg-cyan-400 flex-shrink-0"
            />
          </motion.div>

          {/* Bio */}
          <motion.p
            variants={item}
            className="text-slate-400 leading-relaxed max-w-lg mb-6"
          >
            MSc Business Analytics candidate at Kingston University. I drive
            efficiency through data-driven insights, process optimisation, and
            stakeholder collaboration — delivering measurable results across
            every engagement.
          </motion.p>

          {/* Skill chips */}
          <motion.div variants={item} className="flex flex-wrap gap-2 mb-7">
            {SKILLS.map((skill, i) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.75 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 + i * 0.08, duration: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
                className="px-3 py-1 text-xs font-medium rounded-full border border-indigo-500/30 text-indigo-300 bg-indigo-500/10 hover:border-indigo-400/60 hover:bg-indigo-500/20 transition-all"
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>

          {/* CTA buttons */}
          <motion.div variants={item} className="flex flex-wrap gap-4 mb-7">
            <button
              onClick={() =>
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
              }
              className="relative px-7 py-3 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500 text-white font-semibold shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:scale-[1.04] active:scale-95 transition-all duration-200 overflow-hidden group"
            >
              <span className="relative z-10">Get in Touch</span>
              <span className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-full" />
            </button>
            <button
              onClick={() =>
                document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-7 py-3 rounded-full border border-indigo-500/50 text-indigo-300 font-semibold hover:bg-indigo-500/10 hover:border-indigo-400 hover:scale-[1.04] active:scale-95 transition-all duration-200"
            >
              View Experience
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={item}
            className="flex flex-wrap gap-8 mb-6 pb-6 border-b border-slate-800"
          >
            {STATS.map(({ value, label }) => (
              <div key={label} className="flex flex-col gap-0.5">
                <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
                  {value}
                </span>
                <span className="text-xs text-slate-500 uppercase tracking-wide">{label}</span>
              </div>
            ))}
          </motion.div>

          {/* Social / contact row */}
          <motion.div variants={item} className="flex flex-wrap items-center gap-2">
            <a
              href="mailto:hanialsakani@gmail.com"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs text-slate-400 hover:text-cyan-400 border border-transparent hover:border-cyan-500/30 hover:bg-cyan-500/5 transition-all"
            >
              <EmailIcon />
              hanialsakani@gmail.com
            </a>
            <span className="text-slate-700">|</span>
            <a
              href="https://www.linkedin.com/in/hani-alsakani-ecba-818547b8/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs text-slate-400 hover:text-cyan-400 border border-transparent hover:border-cyan-500/30 hover:bg-cyan-500/5 transition-all"
            >
              <LinkedInIcon />
              LinkedIn
            </a>
            <span className="text-slate-700">|</span>
            <span className="flex items-center gap-1.5 text-xs text-slate-500 px-3 py-1.5">
              <span className="text-indigo-400">◉</span> Greater London, UK
            </span>
          </motion.div>
        </motion.div>

        {/* ── Avatar column ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7, rotate: -6 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.85, delay: 0.15, ease: [0.34, 1.56, 0.64, 1] }}
          className="order-1 md:order-2 flex justify-center"
        >
          <div className="relative w-56 h-56 sm:w-64 sm:h-64 lg:w-80 lg:h-80">
            {/* Ripple rings */}
            {[0, 0.75, 1.5].map((delay, i) => (
              <motion.div
                key={i}
                className="absolute inset-0 rounded-full border border-indigo-500/25"
                animate={{ scale: [1, 1.75, 2.5], opacity: [0.55, 0.2, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay, ease: "linear" }}
              />
            ))}

            {/* Spinning dashed orbital */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
              className="absolute inset-3 rounded-full border border-dashed border-indigo-500/20"
            />

            {/* Static inner ring */}
            <div className="absolute inset-6 rounded-full ring-1 ring-indigo-500/40" />

            {/* Glow core */}
            <div className="absolute inset-10 rounded-full blur-2xl bg-indigo-500/25" />

            {/* Avatar */}
            <div className="absolute inset-8 rounded-full bg-gradient-to-br from-indigo-600 via-violet-600 to-cyan-500 flex items-center justify-center shadow-2xl shadow-indigo-600/40">
              <span className="text-4xl sm:text-5xl lg:text-6xl font-black text-white select-none tracking-tight">
                HA
              </span>
            </div>

            {/* ECBA badge */}
            <motion.div
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-3 -right-4 bg-[#0d0d14] border border-indigo-500/50 rounded-xl px-3 py-1.5 text-xs font-semibold text-indigo-300 shadow-lg shadow-indigo-500/20 flex items-center gap-1.5"
            >
              <motion.span
                animate={{ opacity: [1, 0.4, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block"
              />
              ECBA Certified
            </motion.div>

            {/* MSc badge */}
            <motion.div
              animate={{ y: [5, -5, 5] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
              className="absolute -top-2 -left-5 bg-[#0d0d14] border border-purple-500/50 rounded-xl px-3 py-1.5 text-xs font-semibold text-purple-300 shadow-lg shadow-purple-500/20 flex items-center gap-1.5"
            >
              <motion.span
                animate={{ opacity: [1, 0.4, 1] }}
                transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                className="w-1.5 h-1.5 rounded-full bg-purple-400 inline-block"
              />
              MSc Business Analytics
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-slate-600"
      >
        <span className="text-[10px] tracking-[0.2em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-slate-600 to-transparent"
        />
      </motion.div>
    </section>
  );
}
