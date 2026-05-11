"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const CONTACTS = [
  {
    icon: "📧",
    label: "Email",
    display: "hanialsakani@gmail.com",
    href: "mailto:hanialsakani@gmail.com",
    external: false,
  },
  {
    icon: "🔗",
    label: "LinkedIn",
    display: "hani-alsakani-ecba",
    href: "https://www.linkedin.com/in/hani-alsakani-ecba-818547b8/",
    external: true,
  },
  {
    icon: "📍",
    label: "Location",
    display: "Greater London, UK",
    href: null,
    external: false,
  },
];

export default function ContactSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" ref={ref} className="relative z-10 py-20 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold">
            Get in{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
              Touch
            </span>
          </h2>
          <div className="mt-3 mx-auto w-14 h-[3px] rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400" />
          <p className="mt-5 text-slate-400 max-w-sm mx-auto text-sm leading-relaxed">
            Open to new opportunities, collaborations, and conversations. Let&apos;s connect.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-4 mb-10">
          {CONTACTS.map((c, i) => (
            <motion.div
              key={c.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white/[0.025] border border-white/[0.08] rounded-2xl p-6 text-center hover:border-indigo-500/40 hover:bg-white/[0.04] transition-all group"
            >
              <div className="text-3xl mb-3">{c.icon}</div>
              <p className="text-[10px] uppercase tracking-widest text-slate-500 mb-2">
                {c.label}
              </p>
              {c.href ? (
                <a
                  href={c.href}
                  target={c.external ? "_blank" : undefined}
                  rel={c.external ? "noopener noreferrer" : undefined}
                  className="text-white text-sm font-medium hover:text-indigo-300 transition-colors break-all"
                >
                  {c.display}
                </a>
              ) : (
                <p className="text-white text-sm font-medium">{c.display}</p>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="text-center"
        >
          <a
            href="mailto:hanialsakani@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500 text-white font-semibold hover:opacity-90 active:scale-95 transition-all shadow-lg shadow-indigo-500/30 text-sm"
          >
            <span>Send an Email</span>
            <span>→</span>
          </a>
          <p className="mt-4 text-slate-600 text-xs">
            I typically respond within 24 hours
          </p>
        </motion.div>
      </div>
    </section>
  );
}
