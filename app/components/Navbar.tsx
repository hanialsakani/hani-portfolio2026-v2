"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useTheme } from "@/app/contexts/ThemeContext";
import { CHAPTERS } from "@/app/components/chapters";
import { SITE } from "@/content/site";

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" className="w-4 h-4" aria-hidden="true">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4" aria-hidden="true">
      <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
    </svg>
  );
}

function ThemeToggle() {
  const { theme, toggle } = useTheme();
  return (
    <button
      onClick={toggle}
      aria-label={theme === "light" ? "Switch to dark theme" : "Switch to light theme"}
      className="w-8 h-8 flex items-center justify-center rounded-sm border border-hairline text-ink-soft hover:text-ink hover:border-ink-faint transition-colors"
    >
      {theme === "light" ? <MoonIcon /> : <SunIcon />}
    </button>
  );
}

export default function Navbar() {
  const [activeId, setActiveId] = useState<string>("");
  const [mobileOpen, setMobileOpen] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        }
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    for (const { id } of CHAPTERS) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-paper/90 backdrop-blur-md border-b border-hairline">
      <nav className="max-w-5xl mx-auto px-5 sm:px-6" aria-label="Main">
        <div className="flex items-center justify-between h-14">
          <a href="#top" className="font-serif font-semibold text-lg text-ink">
            {SITE.name}
          </a>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-5">
            {CHAPTERS.map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                aria-current={activeId === id ? "true" : undefined}
                className={`font-mono text-[11px] tracking-[0.14em] uppercase transition-colors ${
                  activeId === id
                    ? "text-navy border-b border-brass-soft pb-0.5"
                    : "text-ink-faint hover:text-ink"
                }`}
              >
                {label}
              </a>
            ))}
            <a
              href={SITE.cvPath}
              download
              className="font-mono text-[11px] tracking-[0.14em] uppercase px-3 py-1.5 border border-ink text-ink rounded-sm hover:bg-ink hover:text-paper transition-colors"
            >
              CV ↓
            </a>
            <ThemeToggle />
          </div>

          {/* Mobile */}
          <div className="flex md:hidden items-center gap-3">
            <ThemeToggle />
            <button
              onClick={() => setMobileOpen((o) => !o)}
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
              className="flex flex-col justify-center gap-[5px] w-8 h-8"
            >
              <motion.span
                animate={mobileOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                className="block w-full h-px bg-ink origin-center"
              />
              <motion.span
                animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
                className="block w-full h-px bg-ink"
              />
              <motion.span
                animate={mobileOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                className="block w-full h-px bg-ink origin-center"
              />
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
            animate={reduce ? { opacity: 1 } : { height: "auto", opacity: 1 }}
            exit={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="md:hidden overflow-hidden bg-paper border-t border-hairline"
          >
            <div className="px-5 py-3 flex flex-col">
              {CHAPTERS.map(({ id, label }) => (
                <a
                  key={id}
                  href={`#${id}`}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-baseline justify-between py-3 border-b border-hairline font-mono text-xs tracking-[0.14em] uppercase text-ink-soft hover:text-ink"
                >
                  {label}
                  <span className="text-brass text-[10px]" aria-hidden="true">
                    →
                  </span>
                </a>
              ))}
              <a
                href={SITE.cvPath}
                download
                className="mt-3 mb-1 text-center font-mono text-xs tracking-[0.14em] uppercase px-3 py-2.5 border border-ink text-ink rounded-sm"
              >
                Download CV ↓
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
