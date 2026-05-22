"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useReducedMotion } from "framer-motion";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/research", label: "Research" },
  { href: "/contact", label: "Contact" },
];

export function FloatingPillNav() {
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();

  return (
    <nav
      className="pointer-events-auto fixed left-1/2 top-5 z-[60] -translate-x-1/2 md:top-6"
      aria-label="Primary"
    >
      <div className="flex max-w-[calc(100vw-1.25rem)] items-center gap-0.5 overflow-x-auto rounded-full border border-white/12 bg-ink/90 px-1 py-1 shadow-lg shadow-black/15 backdrop-blur-md [scrollbar-width:none] md:max-w-none md:gap-1 md:px-1.5 md:py-1.5 [&::-webkit-scrollbar]:hidden">
        {links.map((l) => {
          const active =
            l.href === "/"
              ? pathname === "/"
              : pathname === l.href || pathname.startsWith(`${l.href}/`);
          return (
            <Link
              key={l.href}
              href={l.href}
              aria-current={active ? "page" : undefined}
              className={`focus-ring relative flex min-h-10 shrink-0 items-center justify-center rounded-full px-3 py-2 text-[12px] font-medium transition-colors md:min-h-[2.5rem] md:px-4 md:text-[13px] ${
                active ? "text-white" : "text-white/70 hover:text-white"
              }`}
            >
              {active && !reduceMotion ? (
                <motion.span
                  layoutId="pill-active"
                  className="absolute inset-0 rounded-full bg-accent/45"
                  transition={{ type: "spring", stiffness: 400, damping: 34 }}
                />
              ) : active ? (
                <span className="absolute inset-0 rounded-full bg-accent/45" />
              ) : null}
              <span className="relative z-10">{l.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
