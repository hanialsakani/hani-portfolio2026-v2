"use client";

import Image from "next/image";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import Counter from "@/app/components/ui/Counter";
import { chapterNumber } from "@/app/components/chapters";
import { SITE } from "@/content/site";
import { ACHIEVEMENTS } from "@/content/achievements";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};

/** The cover page of the report. */
export default function Hero() {
  const reduce = useReducedMotion();
  const item: Variants = {
    hidden: reduce ? { opacity: 0 } : { opacity: 0, y: 18 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: "easeOut" },
    },
  };
  // Cover shows the three headline figures; Chapter 02 tells the stories.
  const coverStats = ACHIEVEMENTS.slice(0, 3);

  return (
    <section id="top" className="pt-14">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-5xl mx-auto px-5 sm:px-6 pt-12 sm:pt-16 pb-16"
      >
        {/* Cover rule */}
        <motion.div
          variants={item}
          className="flex flex-wrap items-baseline justify-between gap-2 border-b-2 border-ink pb-3 mb-10"
        >
          <span className="font-mono text-[10px] sm:text-[11px] tracking-[0.16em] uppercase text-ink-soft">
            {SITE.folio}
          </span>
          <span className="font-mono text-[10px] sm:text-[11px] tracking-[0.16em] uppercase text-ink-faint">
            {SITE.location}
          </span>
        </motion.div>

        <div className="grid md:grid-cols-[1fr_280px] gap-10 md:gap-14 items-start">
          {/* Text column */}
          <div>
            <motion.p
              variants={item}
              className="font-mono text-[11px] sm:text-xs tracking-[0.2em] uppercase text-navy mb-6"
            >
              {SITE.kicker} — <span className="text-brass">{SITE.availability}</span>
            </motion.p>

            <motion.h1
              variants={item}
              className="font-serif font-medium text-[2.5rem] leading-[1.06] sm:text-6xl lg:text-[4.25rem] text-ink [text-wrap:balance] mb-6 max-w-[17ch]"
            >
              {SITE.headline.lead}
              <em className="text-navy not-italic border-b-[3px] border-brass-soft">
                {SITE.headline.emphasis}
              </em>
              {SITE.headline.tail}
            </motion.h1>

            <motion.p
              variants={item}
              className="text-ink-soft text-[15px] sm:text-base leading-relaxed max-w-[52ch] mb-5"
            >
              {SITE.standfirst}
            </motion.p>

            <motion.p
              variants={item}
              className="font-mono text-[11px] tracking-[0.08em] text-ink-faint mb-8"
            >
              {SITE.heroSkills.join(" · ")}
            </motion.p>

            <motion.div variants={item} className="flex flex-wrap gap-3 mb-8">
              <a
                href="#contact"
                className="px-6 py-3 bg-navy text-paper font-medium text-sm rounded-sm hover:bg-navy-bright transition-colors"
              >
                Get in touch
              </a>
              <a
                href={SITE.cvPath}
                download
                className="px-6 py-3 border border-hairline text-ink font-medium text-sm rounded-sm hover:border-ink transition-colors"
              >
                Download CV ↓
              </a>
            </motion.div>

            <motion.div
              variants={item}
              className="flex flex-wrap items-center gap-x-5 gap-y-1.5 font-mono text-[11px] text-ink-faint"
            >
              <a href={`mailto:${SITE.email}`} className="hover:text-navy transition-colors">
                {SITE.email}
              </a>
              <a
                href={SITE.linkedin.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-navy transition-colors"
              >
                LinkedIn ↗
              </a>
            </motion.div>
          </div>

          {/* Portrait */}
          <motion.figure variants={item} className="mx-auto md:mx-0 max-w-[280px] w-full">
            <div className="bg-surface border border-hairline p-2.5 shadow-sm">
              <Image
                src="/profile.webp"
                alt={`Portrait of ${SITE.name}`}
                width={640}
                height={640}
                priority
                className="w-full h-auto"
              />
            </div>
            <figcaption className="mt-3 font-mono text-[10px] tracking-[0.12em] uppercase text-ink-faint leading-relaxed">
              {SITE.shortName} — London, 2026
              <span className="block text-brass mt-0.5">
                ECBA certified · MSc candidate, Kingston University
              </span>
            </figcaption>
          </motion.figure>
        </div>

        {/* Stat ledger */}
        <motion.div
          variants={item}
          className="grid grid-cols-3 border-t-2 border-ink mt-14"
        >
          {coverStats.map((s, i) => (
            <div
              key={s.label}
              className={`py-5 pr-4 border-b border-hairline ${i > 0 ? "pl-4 sm:pl-6 border-l border-hairline" : ""}`}
            >
              <span className="block font-mono text-[9px] sm:text-[10px] tracking-[0.16em] uppercase text-brass mb-1.5">
                Fig. {String(i + 1).padStart(2, "0")}
              </span>
              <p className="font-serif font-medium text-3xl sm:text-4xl lg:text-[2.75rem] text-navy leading-none mb-1.5">
                <Counter value={s.value} suffix={s.suffix} />
              </p>
              <p className="text-xs sm:text-sm text-ink-soft">{s.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Sparkline caption */}
        <motion.p
          variants={item}
          className="flex items-center gap-3 mt-5 text-xs text-ink-faint"
        >
          <svg width="72" height="20" viewBox="0 0 72 20" aria-hidden="true" className="shrink-0">
            <polyline
              points="1,16 12,13 23,14 34,9 45,10 56,5 71,3"
              fill="none"
              stroke="var(--navy)"
              strokeWidth="1.6"
            />
            <circle cx="71" cy="3" r="2.3" fill="var(--brass-soft)" />
          </svg>
          <span>
            Career trajectory, 2012—present — full record in{" "}
            <a href="#experience" className="text-navy hover:underline">
              Chapter {chapterNumber("experience")}, Experience
            </a>
            .
          </span>
        </motion.p>
      </motion.div>
    </section>
  );
}
