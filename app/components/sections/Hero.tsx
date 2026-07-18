"use client";

import Image from "next/image";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import GaugeRing from "@/app/components/ui/GaugeRing";
import Counter from "@/app/components/ui/Counter";
import { SITE } from "@/content/site";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};

/** Career trajectory drawn behind the headline — rises 2012 → now. */
function CareerArea() {
  const line =
    "M0,150 L55,142 L110,145 L165,126 L220,130 L275,102 L330,108 L385,78 L440,63 L495,40 L550,28 L600,16";
  return (
    <svg
      className="absolute inset-x-0 bottom-0 w-full h-[62%] pointer-events-none"
      viewBox="0 0 600 170"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="hero-area" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="var(--chart-blue)" stopOpacity="0.22" />
          <stop offset="1" stopColor="var(--chart-blue)" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={`${line} L600,170 L0,170 Z`} fill="url(#hero-area)" className="fade-late" />
      <path
        d={line}
        fill="none"
        stroke="var(--chart-blue)"
        strokeWidth="2.5"
        className="draw-path"
        style={{ ["--path-len" as string]: "700" }}
      />
      <circle cx="600" cy="16" r="5" fill="var(--chart-orange)" className="fade-late" />
    </svg>
  );
}

export default function Hero() {
  const reduce = useReducedMotion();
  const item: Variants = {
    hidden: reduce ? { opacity: 0 } : { opacity: 0, y: 18 },
    show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
  };

  return (
    <section id="top" className="relative pt-14 overflow-hidden chart-grid-bg">
      <CareerArea />
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative max-w-6xl mx-auto px-5 sm:px-6 pt-14 sm:pt-20 pb-24 sm:pb-32"
      >
        <div className="grid md:grid-cols-[1fr_260px] gap-10 md:gap-14 items-start">
          <div>
            <motion.p
              variants={item}
              className="font-mono text-[11px] sm:text-xs tracking-[0.18em] uppercase text-chart-blue mb-5"
            >
              {SITE.kicker} · London&ensp;
              <span className="text-chart-green">▲ trending since 2012</span>
            </motion.p>

            <motion.h1
              variants={item}
              className="font-display font-extrabold text-[2.6rem] leading-[1.02] sm:text-6xl lg:text-[4.4rem] tracking-tight text-ink [text-wrap:balance] mb-6 max-w-[16ch]"
            >
              My career is a chart that only goes{" "}
              <span className="text-chart-blue">up and to the right.</span>
            </motion.h1>

            <motion.p
              variants={item}
              className="text-ink-soft text-[15px] sm:text-base leading-relaxed max-w-[52ch] mb-7"
            >
              {SITE.name} — {SITE.standfirst}
            </motion.p>

            <motion.div variants={item} className="flex flex-wrap gap-3 mb-8">
              <a
                href="#contact"
                className="px-6 py-3 bg-chart-blue text-white font-semibold text-sm rounded-xl hover:opacity-90 active:scale-[0.98] transition-all"
              >
                Let&apos;s talk →
              </a>
              <a
                href={SITE.cvPath}
                download
                className="px-6 py-3 border border-line bg-surface text-ink font-semibold text-sm rounded-xl hover:border-ink-faint transition-colors"
              >
                Download CV ↓
              </a>
            </motion.div>

            <motion.p
              variants={item}
              className="font-mono text-[11px] tracking-[0.06em] text-ink-faint"
            >
              {SITE.heroSkills.join(" · ")} &ensp;·&ensp;{" "}
              <a href={`mailto:${SITE.email}`} className="hover:text-chart-blue transition-colors">
                {SITE.email}
              </a>{" "}
              ·{" "}
              <a
                href={SITE.linkedin.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-chart-blue transition-colors"
              >
                LinkedIn ↗
              </a>
            </motion.p>
          </div>

          {/* Portrait + status */}
          <motion.figure variants={item} className="mx-auto md:mx-0 w-full max-w-[240px]">
            <div className="relative bg-surface border border-line rounded-2xl p-2.5 shadow-sm">
              <Image
                src="/profile.webp"
                alt={`Portrait of ${SITE.name}`}
                width={640}
                height={640}
                priority
                className="w-full h-auto rounded-xl"
              />
              <span className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 whitespace-nowrap inline-flex items-center gap-1.5 bg-surface border border-line rounded-full px-3 py-1 text-[11px] font-semibold text-ink shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-chart-green inline-block" aria-hidden="true" />
                {SITE.availability}
              </span>
            </div>
            <figcaption className="mt-5 text-center font-mono text-[10px] tracking-[0.1em] uppercase text-ink-faint">
              ECBA · MSc Business Analytics &apos;26
            </figcaption>
          </motion.figure>
        </div>

        {/* Gauge strip */}
        <motion.div variants={item} className="flex flex-wrap gap-3 sm:gap-4 mt-12">
          <div className="flex items-center gap-3 bg-surface/85 backdrop-blur-sm border border-line rounded-2xl px-4 py-3">
            <GaugeRing fraction={0.3} hue="blue" />
            <span>
              <span className="block font-display font-extrabold text-xl leading-tight text-ink tabular">
                +<Counter value={30} suffix="%" />
              </span>
              <span className="text-[11px] text-ink-faint">decision efficiency</span>
            </span>
          </div>
          <div className="flex items-center gap-3 bg-surface/85 backdrop-blur-sm border border-line rounded-2xl px-4 py-3">
            <GaugeRing fraction={0.2} hue="green" />
            <span>
              <span className="block font-display font-extrabold text-xl leading-tight text-ink tabular">
                −<Counter value={20} suffix="%" />
              </span>
              <span className="text-[11px] text-ink-faint">approval cycle time</span>
            </span>
          </div>
          <div className="flex items-center gap-3 bg-surface/85 backdrop-blur-sm border border-line rounded-2xl px-4 py-3">
            <GaugeRing fraction={0.83} hue="orange" />
            <span>
              <span className="block font-display font-extrabold text-xl leading-tight text-ink tabular">
                <Counter value={16} suffix="K+" />
              </span>
              <span className="text-[11px] text-ink-faint">people reached</span>
            </span>
          </div>
          <div className="flex items-center gap-3 bg-surface/85 backdrop-blur-sm border border-line rounded-2xl px-4 py-3">
            <GaugeRing fraction={1} hue="blue" />
            <span>
              <span className="block font-display font-extrabold text-xl leading-tight text-ink tabular">
                <Counter value={10} suffix="+" />
              </span>
              <span className="text-[11px] text-ink-faint">years experience</span>
            </span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
