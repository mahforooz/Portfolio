"use client";

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import { useEffect, useRef } from "react";

/** Subtle node grid with slow drift and gentle cursor parallax */
export function AnimatedVisual() {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 28, damping: 18 });
  const sy = useSpring(my, { stiffness: 28, damping: 18 });
  const bg = useMotionTemplate`radial-gradient(ellipse 80% 70% at calc(50% + ${sx}px) calc(42% + ${sy}px), rgba(110,91,255,0.14), transparent 55%), radial-gradient(circle at 70% 80%, rgba(37,37,37,0.04), transparent 45%)`;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      const px = (e.clientX - r.left - r.width / 2) * 0.04;
      const py = (e.clientY - r.top - r.height / 2) * 0.04;
      mx.set(px);
      my.set(py);
    };

    const onLeave = () => {
      mx.set(0);
      my.set(0);
    };

    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", onLeave);
    return () => {
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
    };
  }, [mx, my]);

  const nodes = [
    { x: "18%", y: "22%" },
    { x: "72%", y: "18%" },
    { x: "48%", y: "38%" },
    { x: "28%", y: "62%" },
    { x: "78%", y: "58%" },
    { x: "52%", y: "78%" },
    { x: "12%", y: "48%" },
  ];

  return (
    <div
      ref={ref}
      className="relative aspect-[4/5] w-full max-w-md overflow-hidden rounded-2xl border border-ink/8 bg-gradient-to-br from-white via-base to-violet-50/40 shadow-[0_24px_80px_-32px_rgba(110,91,255,0.35)] md:aspect-square lg:max-w-none"
      aria-hidden
    >
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-90"
        style={{ background: bg }}
      />

      <svg
        className="absolute inset-0 h-full w-full text-ink/[0.08]"
        preserveAspectRatio="none"
      >
        <line x1="18%" y1="22%" x2="48%" y2="38%" stroke="currentColor" strokeWidth="1" />
        <line x1="48%" y1="38%" x2="72%" y2="18%" stroke="currentColor" strokeWidth="1" />
        <line x1="48%" y1="38%" x2="28%" y2="62%" stroke="currentColor" strokeWidth="1" />
        <line x1="28%" y1="62%" x2="52%" y2="78%" stroke="currentColor" strokeWidth="1" />
        <line x1="52%" y1="78%" x2="78%" y2="58%" stroke="currentColor" strokeWidth="1" />
        <line x1="12%" y1="48%" x2="18%" y2="22%" stroke="currentColor" strokeWidth="1" />
      </svg>

      {nodes.map((n, i) => (
        <motion.span
          key={i}
          className="absolute h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/70 shadow-[0_0_12px_rgba(110,91,255,0.35)]"
          style={{ left: n.x, top: n.y }}
          animate={
            reduceMotion
              ? {}
              : {
                  y: [0, -6, 0],
                  opacity: [0.55, 0.95, 0.55],
                }
          }
          transition={{
            duration: 10 + i * 1.2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.4,
          }}
        />
      ))}

      <div className="pointer-events-none absolute inset-6 rounded-xl border border-dashed border-ink/[0.06]" />

      <div className="absolute bottom-6 left-6 right-6">
        <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-muted">
          Spatial index · ambient
        </p>
      </div>
    </div>
  );
}
