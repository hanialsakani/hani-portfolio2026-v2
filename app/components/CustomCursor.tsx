"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = -200;
    let mouseY = -200;
    let ringX = -200;
    let ringY = -200;
    let raf: number;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = () => {
      dot.style.left = mouseX + "px";
      dot.style.top = mouseY + "px";

      ringX += (mouseX - ringX) * 0.13;
      ringY += (mouseY - ringY) * 0.13;

      ring.style.left = ringX + "px";
      ring.style.top = ringY + "px";

      raf = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMouseMove);
    raf = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      {/* Inner dot */}
      <div
        ref={dotRef}
        className="fixed w-2 h-2 rounded-full pointer-events-none z-[9999]"
        style={{
          background: "var(--cursor-dot-color)",
          transform: "translate(-50%, -50%)",
          transition: "background 0.5s ease",
        }}
      />
      {/* Outer ring */}
      <div
        ref={ringRef}
        className="fixed w-9 h-9 rounded-full border-2 pointer-events-none z-[9998]"
        style={{
          borderColor: "var(--cursor-ring-color)",
          transform: "translate(-50%, -50%)",
          transition: "border-color 0.5s ease",
        }}
      />
    </>
  );
}
