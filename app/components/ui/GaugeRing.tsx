"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

const HUES = {
  blue: "var(--chart-blue)",
  green: "var(--chart-green)",
  orange: "var(--chart-orange)",
} as const;

/** Animated ring gauge. `fraction` is 0..1 of the circle to fill. */
export default function GaugeRing({
  fraction,
  hue = "blue",
  size = 54,
}: {
  fraction: number;
  hue?: keyof typeof HUES;
  size?: number;
}) {
  const ref = useRef<SVGSVGElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduce = useReducedMotion();

  const stroke = 6;
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const target = c * (1 - Math.min(Math.max(fraction, 0), 1));

  return (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      aria-hidden="true"
      className="shrink-0 -rotate-90"
    >
      <circle
        cx={size / 2}
        cy={size / 2}
        r={r}
        fill="none"
        stroke="var(--line)"
        strokeWidth={stroke}
      />
      <motion.circle
        cx={size / 2}
        cy={size / 2}
        r={r}
        fill="none"
        stroke={HUES[hue]}
        strokeWidth={stroke}
        strokeLinecap="round"
        strokeDasharray={c}
        initial={{ strokeDashoffset: reduce ? target : c }}
        animate={inView ? { strokeDashoffset: target } : {}}
        transition={{ duration: reduce ? 0 : 1.3, ease: "easeOut", delay: 0.2 }}
      />
    </svg>
  );
}
