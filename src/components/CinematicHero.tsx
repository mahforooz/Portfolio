"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";

export function CinematicHero() {
  const containerRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [0, reduceMotion ? 0 : -120]
  );
  const fade = useTransform(
    scrollYProgress,
    [0, 0.85],
    [1, reduceMotion ? 1 : 0.9]
  );

  return (
    <section
      ref={containerRef}
      className="relative min-h-[100svh] overflow-hidden bg-white"
      aria-label="Introduction"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        {/* Primary hero color wash */}
        <div
          className="animate-glow-breathe absolute left-1/2 top-[-28%] h-[min(95vh,920px)] w-[min(165vw,1280px)] -translate-x-1/2 rounded-[100%] bg-[radial-gradient(ellipse_at_center,#00cccc_0%,rgba(0,204,204,0.55)_22%,rgba(0,204,204,0.28)_42%,rgba(0,204,204,0.08)_58%,transparent_72%)] blur-[72px] md:top-[-22%]"
          style={reduceMotion ? { animation: "none", opacity: 0.85 } : undefined}
        />
        {/* Bold right orb */}
        <div className="absolute -right-[18%] top-[12%] h-[min(82vh,760px)] w-[min(82vh,760px)] rounded-full bg-[radial-gradient(circle_at_40%_40%,#00cccc_0%,rgba(0,204,204,0.45)_35%,rgba(0,204,204,0.12)_62%,transparent_78%)] blur-[64px]" />
        {/* Saturated accent behind headline */}
        <div className="absolute -right-[8%] bottom-[8%] h-[min(58vh,520px)] w-[min(52vw,560px)] rounded-[4rem] bg-[#00cccc] opacity-[0.28] blur-[56px] md:bottom-[12%] md:right-[-4%]" />
        {/* Left balance */}
        <div className="absolute -left-[22%] bottom-[5%] h-[min(52vh,480px)] w-[min(70vw,620px)] rounded-full bg-[radial-gradient(circle,rgba(0,204,204,0.38)_0%,rgba(0,204,204,0.12)_45%,transparent_72%)] blur-[80px]" />
      </div>

      <motion.div
        style={{ y, opacity: fade }}
        className="relative z-10 flex min-h-[100svh] flex-col justify-end px-5 pb-24 pt-28 md:px-8 md:pb-28 md:pt-32 lg:px-10 lg:pb-32"
      >
        <div className="layout-page max-w-content">
          <p className="max-w-xl text-base font-medium leading-relaxed text-muted md:text-lg">
            Interaction Designer &amp; aspiring HCI researcher studying how
            people think, decide and learn with AI and immersive technologies.
          </p>

          <h1 className="font-display mt-8 text-mega font-semibold tracking-tight text-ink md:mt-10">
            <span className="block">Mahtab</span>
            <span className="block text-ink/95">Foroozandeh</span>
          </h1>
        </div>
      </motion.div>

      <div className="pointer-events-auto absolute bottom-6 left-0 right-0 z-20 flex justify-center md:bottom-10">
        <a
          href="#about"
          className="focus-ring group flex flex-col items-center gap-1 rounded-lg px-4 py-2 text-xs font-medium text-muted-2 transition hover:text-ink"
        >
          <span>Continue</span>
          <svg
            className="h-4 w-4 transition group-hover:translate-y-0.5"
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            aria-hidden
          >
            <path d="M4 6l4 4 4-4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>
    </section>
  );
}
