"use client";

import { useScroll, useSpring, motion, useReducedMotion } from "framer-motion";

/** Reading-progress rule along the top of the report. */
export default function ProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 30,
    restDelta: 0.001,
  });
  const reduce = useReducedMotion();

  return (
    <motion.div
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 h-[2px] origin-left z-[100] bg-brass-soft"
      style={{ scaleX: reduce ? scrollYProgress : scaleX }}
    />
  );
}
