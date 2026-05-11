"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useTheme } from "@/app/contexts/ThemeContext";

const ACHIEVEMENTS = [
  {
    target: 30,
    suffix: "%",
    label: "Efficiency Gain",
    description: "Designed Looker dashboards that improved decision-making efficiency by 30% across ISDB operations",
    icon: "⚡",
    accent: "from-indigo-500/20 to-indigo-500/5 border-indigo-500/30",
    spaceDesc: "Process digitisation & workflow optimisation",
  },
  {
    target: 20,
    suffix: "%",
    label: "Faster Approvals",
    description: "Reduced project deliverable approval times by 20% through improved documentation workflows",
    icon: "🚀",
    accent: "from-cyan-500/20 to-cyan-500/5 border-cyan-500/30",
    spaceDesc: "Automated approval cycle improvements",
  },
  {
    target: 16,
    suffix: "K+",
    label: "Participants",
    description: "Supported over 16,000 participants in leadership and skill-building initiatives through data-driven reporting",
    icon: "👥",
    accent: "from-violet-500/20 to-violet-500/5 border-violet-500/30",
    spaceDesc: "Events & programmes coordinated",
  },
  {
    target: 10,
    suffix: "+",
    label: "Years Experience",
    description: "Over 10 years across IT business analysis, project management, and administrative leadership roles",
    icon: "📊",
    accent: "from-indigo-500/20 to-indigo-500/5 border-indigo-500/30",
    spaceDesc: "Business Analysis & Leadership",
  },
];

function SpaceCounter({ target, suffix }: { target: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const steps = 60;
    const duration = 1800;
    let step = 0;
    const timer = setInterval(() => {
      step++;
      setCount(Math.min(Math.round((target / steps) * step), target));
      if (step >= steps) clearInterval(timer);
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function AchievementsSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { theme } = useTheme();
  const isExec = theme === "executive";

  return (
    <section id="achievements" ref={ref} className="relative z-10 py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold">
            Key{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
              Achievements
            </span>
          </h2>
          <div className="mt-3 mx-auto w-14 h-[3px] rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400" />
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {ACHIEVEMENTS.map((a, i) =>
            isExec ? (
              <ExecFlipCard key={a.label} achievement={a} index={i} inView={inView} />
            ) : (
              <motion.div
                key={a.label}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: i * 0.1 }}
                className={`bg-gradient-to-b ${a.accent} border rounded-2xl p-6 text-center hover:scale-[1.03] transition-transform`}
              >
                <div className="text-3xl mb-3">{a.icon}</div>
                <div className="text-3xl sm:text-4xl font-black mb-1.5 text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-cyan-300">
                  <SpaceCounter target={a.target} suffix={a.suffix} />
                </div>
                <p className="text-white font-semibold text-sm mb-1">{a.label}</p>
                <p className="text-slate-400 text-xs leading-snug">{a.spaceDesc}</p>
              </motion.div>
            )
          )}
        </div>

        {isExec && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center text-[11px] text-slate-600 mt-4"
          >
            Tap once to count · tap again to flip · tap to return
          </motion.p>
        )}
      </div>
    </section>
  );
}

function ExecFlipCard({
  achievement,
  index,
  inView,
}: {
  achievement: (typeof ACHIEVEMENTS)[0];
  index: number;
  inView: boolean;
}) {
  const [activated, setActivated] = useState(false);
  const [flipped, setFlipped] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!activated) return;
    const { target } = achievement;
    const steps = 50;
    const duration = 1200;
    let step = 0;
    const timer = setInterval(() => {
      step++;
      setCount(Math.min(Math.round((target / steps) * step), target));
      if (step >= steps) clearInterval(timer);
    }, duration / steps);
    return () => clearInterval(timer);
  }, [activated, achievement.target]);

  const handleClick = () => {
    if (!activated) {
      setActivated(true);
    } else if (!flipped) {
      setFlipped(true);
    } else {
      setFlipped(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.1 }}
      style={{ perspective: "1200px" }}
      className="cursor-pointer h-44 sm:h-48"
      onClick={handleClick}
    >
      <div
        style={{
          transformStyle: "preserve-3d",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
          transition: "transform 0.5s ease",
          position: "relative",
          width: "100%",
          height: "100%",
        }}
      >
        {/* Front */}
        <div
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
          }}
          className="absolute inset-0 flex flex-col items-center justify-center bg-[#1a0505] border border-[rgba(204,10,31,0.27)] rounded-2xl p-4 text-center hover:shadow-[0_0_24px_rgba(204,10,31,0.18)] transition-shadow"
        >
          <div
            className="text-4xl sm:text-5xl font-bold mb-2 tabular-nums text-[#cc0a1f]"
            style={{ fontFamily: "var(--font-jetbrains, monospace)" }}
          >
            {activated ? count : 0}
            {achievement.suffix}
          </div>
          <p className="text-[#f5f0e8] text-sm font-medium">{achievement.label}</p>
          {!activated && (
            <p className="text-slate-700 text-[10px] mt-2 tracking-wide">tap to reveal</p>
          )}
        </div>

        {/* Back */}
        <div
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            background: "linear-gradient(to bottom, #7a0612, #cc0a1f)",
          }}
          className="absolute inset-0 rounded-2xl p-5 flex flex-col items-center justify-center text-center gap-3"
        >
          <div className="text-2xl">{achievement.icon}</div>
          <p className="text-white text-xs leading-relaxed">{achievement.description}</p>
        </div>
      </div>
    </motion.div>
  );
}
