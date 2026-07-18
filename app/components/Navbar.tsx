"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useTheme } from "@/app/contexts/ThemeContext";
import { NAV_ITEMS, SECTIONS } from "@/app/components/chapters";
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
      className="w-8 h-8 flex items-center justify-center rounded-lg border border-line text-ink-soft hover:text-ink hover:border-ink-faint transition-colors"
    >
      {theme === "light" ? <MoonIcon /> : <SunIcon />}
    </button>
  );
}

export default function Navbar() {
  const [activeId, setActiveId] = useState<string>("");
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const reduce = useReducedMotion();
  const onInsights = pathname.startsWith("/insights");

  useEffect(() => {
    if (onInsights) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        }
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    for (const { id } of SECTIONS) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, [onInsights]);

  const isActive = (item: (typeof NAV_ITEMS)[number]) =>
    item.id === "insights" ? onInsights : !onInsights && activeId === item.id;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-bg/85 backdrop-blur-md border-b border-line">
      <nav className="max-w-6xl mx-auto px-5 sm:px-6" aria-label="Main">
        <div className="flex items-center justify-between h-14">
          <Link href="/" className="font-display font-bold text-lg tracking-tight text-ink flex items-center gap-2">
            <svg width="22" height="16" viewBox="0 0 22 16" aria-hidden="true">
              <polyline points="1,13 6,10 11,11 16,5 21,2" fill="none" stroke="var(--chart-blue)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="21" cy="2" r="2.2" fill="var(--chart-orange)" />
            </svg>
            {SITE.name}
          </Link>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                aria-current={isActive(item) ? "true" : undefined}
                className={`px-3 py-1.5 rounded-lg text-[13px] font-medium transition-colors ${
                  isActive(item)
                    ? "text-chart-blue bg-chart-blue-soft"
                    : "text-ink-soft hover:text-ink"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <span className="ml-2">
              <ThemeToggle />
            </span>
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
              <motion.span animate={mobileOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }} className="block w-full h-[1.5px] bg-ink origin-center" />
              <motion.span animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }} className="block w-full h-[1.5px] bg-ink" />
              <motion.span animate={mobileOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }} className="block w-full h-[1.5px] bg-ink origin-center" />
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
            className="md:hidden overflow-hidden bg-bg border-t border-line"
          >
            <div className="px-5 py-3 flex flex-col">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-baseline justify-between py-3 border-b border-line text-sm font-medium text-ink-soft hover:text-ink"
                >
                  {item.label}
                  <span className="text-chart-orange text-xs" aria-hidden="true">→</span>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
