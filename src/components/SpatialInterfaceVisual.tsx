"use client";

import { useReducedMotion } from "framer-motion";
import { useCallback, useEffect, useRef } from "react";

/** Soft grid + nodes + gentle glow; calm motion. */
export function SpatialInterfaceVisual() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const pointerRef = useRef({ x: 0, y: 0, active: false });
  const rafRef = useRef(0);

  const draw = useCallback(
    (ctx: CanvasRenderingContext2D, w: number, h: number, t: number) => {
      const BG = "#FAFAF9";
      ctx.fillStyle = BG;
      ctx.fillRect(0, 0, w, h);

      const glow = ctx.createRadialGradient(
        w * 0.35,
        h * 0.4,
        0,
        w * 0.45,
        h * 0.45,
        w * 0.45
      );
      glow.addColorStop(0, "rgba(6, 148, 148, 0.1)");
      glow.addColorStop(0.5, "rgba(6, 148, 148, 0.04)");
      glow.addColorStop(1, "rgba(250, 250, 249, 0)");
      ctx.fillStyle = glow;
      ctx.fillRect(0, 0, w, h);

      const step = 28;
      ctx.strokeStyle = "rgba(231, 229, 228, 0.7)";
      ctx.lineWidth = 1;
      for (let x = 0; x <= w; x += step) {
        ctx.beginPath();
        ctx.moveTo(x + 0.5, 0);
        ctx.lineTo(x + 0.5, h);
        ctx.stroke();
      }
      for (let y = 0; y <= h; y += step) {
        ctx.beginPath();
        ctx.moveTo(0, y + 0.5);
        ctx.lineTo(w, y + 0.5);
        ctx.stroke();
      }

      const cx =
        w * 0.5 +
        (pointerRef.current.active ? pointerRef.current.x * 0.06 : 0);
      const cy =
        h * 0.46 +
        (pointerRef.current.active ? pointerRef.current.y * 0.05 : 0) +
        (reduceMotion ? 0 : Math.sin(t * 0.4) * 2);

      const R = "6,148,148";
      const rings = [0.1, 0.17, 0.24].map((s) => s * Math.min(w, h));
      ctx.lineWidth = 1;
      rings.forEach((r, i) => {
        ctx.strokeStyle = `rgba(${R},${0.1 + i * 0.06})`;
        ctx.beginPath();
        ctx.arc(cx, cy, r, 0, Math.PI * 2);
        ctx.stroke();
      });

      const n = 5;
      for (let i = 0; i < n; i++) {
        const ang = (i / n) * Math.PI * 2 + (reduceMotion ? 0 : t * 0.12);
        const rr = Math.min(w, h) * 0.18;
        const ox = cx + Math.cos(ang) * rr;
        const oy = cy + Math.sin(ang) * rr;
        ctx.strokeStyle = `rgba(${R},0.15)`;
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(ox, oy);
        ctx.stroke();
        ctx.fillStyle = `rgba(${R},0.45)`;
        ctx.beginPath();
        ctx.arc(ox, oy, 3, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.fillStyle = `rgba(${R},0.65)`;
      ctx.beginPath();
      ctx.arc(cx, cy, 3.5, 0, Math.PI * 2);
      ctx.fill();

      if (pointerRef.current.active) {
        ctx.fillStyle = "rgba(6, 148, 148, 0.08)";
        ctx.beginPath();
        ctx.arc(cx, cy, 48, 0, Math.PI * 2);
        ctx.fill();
      }
    },
    [reduceMotion]
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let t = 0;
    const onPointer = (e: PointerEvent) => {
      const r = container.getBoundingClientRect();
      pointerRef.current = {
        x: e.clientX - (r.left + r.width / 2),
        y: e.clientY - (r.top + r.height / 2),
        active: true,
      };
    };
    const onLeave = () => {
      pointerRef.current.active = false;
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const { width, height } = container.getBoundingClientRect();
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const paint = () => {
      const { width, height } = container.getBoundingClientRect();
      if (width && height) draw(ctx, width, height, reduceMotion ? 0 : t);
    };

    const loop = () => {
      if (!reduceMotion) t += 0.012;
      paint();
      if (!reduceMotion) rafRef.current = requestAnimationFrame(loop);
    };

    const onResize = () => {
      resize();
      paint();
    };

    resize();
    paint();
    container.addEventListener("pointermove", onPointer);
    container.addEventListener("pointerleave", onLeave);
    window.addEventListener("resize", onResize);
    if (!reduceMotion) rafRef.current = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(rafRef.current);
      container.removeEventListener("pointermove", onPointer);
      container.removeEventListener("pointerleave", onLeave);
      window.removeEventListener("resize", onResize);
    };
  }, [draw, reduceMotion]);

  return (
    <div
      ref={containerRef}
      className="relative aspect-[5/4] w-full max-w-md min-h-[280px] overflow-hidden rounded-xl bg-base md:aspect-[4/3]"
      aria-hidden
    >
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
    </div>
  );
}
