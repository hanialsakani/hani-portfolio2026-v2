"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/app/contexts/ThemeContext";

const NAV_LINKS = [
  { label: "About", id: "about" },
  { label: "Achievements", id: "achievements" },
  { label: "Skills", id: "skills" },
  { label: "Experience", id: "experience" },
  { label: "Certifications", id: "certifications" },
  { label: "Education", id: "education" },
  { label: "Contact", id: "contact" },
];

function ThemeToggle({ compact = false }: { compact?: boolean }) {
  const { theme, setTheme } = useTheme();
  return (
    <div
      className={`flex items-center gap-0.5 bg-white/[0.05] border border-white/[0.08] rounded-full p-0.5 ${compact ? "self-start mb-2" : ""}`}
    >
      {(["space", "executive"] as const).map((t) => (
        <button
          key={t}
          onClick={() => setTheme(t)}
          className={`px-2.5 py-1 rounded-full text-xs font-medium transition-all duration-200 ${
            theme === t
              ? "bg-indigo-500/20 text-indigo-300"
              : "text-slate-500 hover:text-slate-300"
          }`}
        >
          {t === "space" ? "🌌 Space" : "🔴 Executive"}
        </button>
      ))}
    </div>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }, 260);
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a0a0c]/90 backdrop-blur-md border-b border-indigo-900/30 shadow-xl shadow-black/30"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-xl font-bold tracking-tight"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
              Hani
            </span>
            <span className="text-slate-300"> Alsakani</span>
          </button>

          {/* Desktop links + toggle */}
          <div className="hidden md:flex items-center gap-5">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="relative text-sm text-slate-400 hover:text-white transition-colors duration-200 group"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-gradient-to-r from-indigo-500 to-cyan-400 group-hover:w-full transition-all duration-300" />
              </button>
            ))}
            <ThemeToggle />
            <a
              href="mailto:hanialsakani@gmail.com"
              className="px-4 py-1.5 rounded-full border border-indigo-500/60 text-indigo-300 text-sm font-medium hover:bg-indigo-500/10 transition-colors"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen((o) => !o)}
            className="md:hidden flex flex-col justify-center gap-[5px] w-8 h-8"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={mobileOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              className="block w-full h-0.5 bg-slate-300 origin-center"
            />
            <motion.span
              animate={mobileOpen ? { scaleX: 0, opacity: 0 } : { scaleX: 1, opacity: 1 }}
              className="block w-full h-0.5 bg-slate-300 origin-center"
            />
            <motion.span
              animate={mobileOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              className="block w-full h-0.5 bg-slate-300 origin-center"
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden bg-[#0d0d10]/95 backdrop-blur-lg border-t border-indigo-900/30"
          >
            <div className="px-5 py-4 flex flex-col gap-1">
              <ThemeToggle compact />
              {NAV_LINKS.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className="text-left text-slate-300 hover:text-white py-2.5 border-b border-slate-800/60 text-sm transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <a
                href="mailto:hanialsakani@gmail.com"
                className="mt-2 text-center py-2.5 rounded-full border border-indigo-500/60 text-indigo-300 text-sm font-medium"
              >
                Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
