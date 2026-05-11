"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useTheme } from "@/app/contexts/ThemeContext";

const CERTS = [
  {
    name: "Certificate of Appreciation: Web3 and AI Workshop",
    issuer: "Kingston University",
    year: "Feb 2026",
    icon: "🎖️",
    cardClass: "border-indigo-500/40 bg-gradient-to-b from-indigo-500/10 to-transparent",
    badgeClass: "bg-indigo-500/25 text-indigo-200",
  },
  {
    name: "ECBA – Entry Certificate in Business Analysis",
    issuer: "IIBA",
    year: "Jul 2025",
    icon: "🏆",
    cardClass: "border-indigo-500/40 bg-gradient-to-b from-indigo-500/10 to-transparent",
    badgeClass: "bg-indigo-500/25 text-indigo-200",
  },
  {
    name: "Adaptive US Business Analyst Bootcamp",
    issuer: "Adaptive US Inc.",
    year: "Jul 2025",
    icon: "📚",
    cardClass: "border-cyan-500/40 bg-gradient-to-b from-cyan-500/10 to-transparent",
    badgeClass: "bg-cyan-500/25 text-cyan-200",
  },
  {
    name: "Adaptive US ECBA Training",
    issuer: "Adaptive US Inc.",
    year: "Mar 2025",
    icon: "🎓",
    cardClass: "border-violet-500/40 bg-gradient-to-b from-violet-500/10 to-transparent",
    badgeClass: "bg-violet-500/25 text-violet-200",
  },
  {
    name: "IIBA Member",
    issuer: "IIBA",
    year: "Jun 2025",
    icon: "🏅",
    cardClass: "border-cyan-500/40 bg-gradient-to-b from-cyan-500/10 to-transparent",
    badgeClass: "bg-cyan-500/25 text-cyan-200",
  },
  {
    name: "PMP Certificate of Training",
    issuer: "",
    year: "",
    icon: "📋",
    cardClass: "border-violet-500/40 bg-gradient-to-b from-violet-500/10 to-transparent",
    badgeClass: "bg-violet-500/25 text-violet-200",
  },
  {
    name: "Programming & Web Development (PHP)",
    issuer: "",
    year: "",
    icon: "💻",
    cardClass: "border-indigo-500/40 bg-gradient-to-b from-indigo-500/10 to-transparent",
    badgeClass: "bg-indigo-500/25 text-indigo-200",
  },
  {
    name: "Data Visualisation Workshops: Infographic Design & PowerPoint Slide Zoom",
    issuer: "",
    year: "",
    icon: "📊",
    cardClass: "border-cyan-500/40 bg-gradient-to-b from-cyan-500/10 to-transparent",
    badgeClass: "bg-cyan-500/25 text-cyan-200",
  },
  {
    name: "Data Analysis Track & Full Stack Developer Track",
    issuer: "1 Million Arab Coders Initiative",
    year: "",
    icon: "🌟",
    cardClass: "border-violet-500/40 bg-gradient-to-b from-violet-500/10 to-transparent",
    badgeClass: "bg-violet-500/25 text-violet-200",
  },
];

export default function CertificationsSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { theme } = useTheme();
  const isExec = theme === "executive";

  return (
    <section id="certifications" ref={ref} className="relative z-10 py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
              Certifications
            </span>
          </h2>
          <div className="mt-3 mx-auto w-14 h-[3px] rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {CERTS.map((cert, i) =>
            isExec ? (
              <FlipCard key={cert.name} cert={cert} index={i} inView={inView} />
            ) : (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className={`border rounded-2xl p-5 text-center flex flex-col items-center gap-3 transition-all ${cert.cardClass}`}
              >
                <div className="text-4xl">{cert.icon}</div>
                <h3 className="font-semibold text-white text-sm leading-snug">{cert.name}</h3>
                {cert.issuer && (
                  <p className="text-slate-400 text-xs leading-relaxed">{cert.issuer}</p>
                )}
                {cert.year && (
                  <span className={`text-xs px-3 py-1 rounded-full font-medium ${cert.badgeClass}`}>
                    {cert.year}
                  </span>
                )}
              </motion.div>
            )
          )}
        </div>
      </div>
    </section>
  );
}

function FlipCard({
  cert,
  index,
  inView,
}: {
  cert: (typeof CERTS)[0];
  index: number;
  inView: boolean;
}) {
  const [flipped, setFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.08 }}
      className="h-48"
      style={{ perspective: "1000px" }}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
    >
      <div
        style={{
          transformStyle: "preserve-3d",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
          transition: "transform 0.55s ease",
          position: "relative",
          width: "100%",
          height: "100%",
        }}
      >
        {/* Front */}
        <div
          style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}
          className="absolute inset-0 bg-[#111111] border border-[rgba(204,10,31,0.3)] rounded-2xl p-5 flex flex-col items-center justify-center gap-3 text-center"
        >
          <div className="text-3xl">{cert.icon}</div>
          <h3 className="font-semibold text-white text-sm leading-snug">{cert.name}</h3>
          {cert.issuer && (
            <p className="text-[#f47585] text-xs">{cert.issuer}</p>
          )}
        </div>

        {/* Back */}
        <div
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
          className="absolute inset-0 bg-[#0d0d0d] border border-[rgba(204,10,31,0.5)] rounded-2xl p-5 flex flex-col items-center justify-center gap-3 text-center overflow-hidden"
        >
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#cc0a1f] to-[#7a0612]" />
          {cert.year && (
            <span className="text-xs font-bold bg-[rgba(204,10,31,0.2)] text-[#ffc2c8] px-3 py-1 rounded-full border border-[rgba(204,10,31,0.3)]">
              {cert.year}
            </span>
          )}
          <h3 className="font-semibold text-white text-sm leading-snug">{cert.name}</h3>
          {cert.issuer && (
            <p className="text-slate-400 text-xs">{cert.issuer}</p>
          )}
          {!cert.year && !cert.issuer && (
            <p className="text-slate-500 text-xs italic">Professional Development</p>
          )}
        </div>
      </div>
    </motion.div>
  );
}
