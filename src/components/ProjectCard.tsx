"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import type { Project } from "@/data/projects";
import { Tag } from "./Tag";

function ArrowIcon({
  className,
  animate = true,
}: {
  className?: string;
  animate?: boolean;
}) {
  return (
    <motion.svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      className={className}
      aria-hidden
      animate={animate ? { x: [0, 3, 0] } : false}
      transition={{
        duration: 2.4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <path
        d="M4 10h12m0 0-4-4m4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </motion.svg>
  );
}

type ProjectCardProps = {
  project: Project;
  className?: string;
  /** Editorial grid hint */
  layout?: "wide" | "tall" | "standard";
};

export function ProjectCard({ project, className = "", layout = "standard" }: ProjectCardProps) {
  const reduceMotion = useReducedMotion();
  const arrowMotion = !reduceMotion;

  const layoutClass =
    layout === "wide"
      ? "md:col-span-2 min-h-[280px]"
      : layout === "tall"
        ? "md:row-span-2 min-h-[420px] md:min-h-0"
        : "min-h-[260px]";

  return (
    <motion.article
      className={`group relative flex flex-col overflow-hidden rounded-2xl border border-ink/8 bg-gradient-to-br from-white via-base to-violet-50/30 shadow-[0_20px_60px_-40px_rgba(37,37,37,0.25)] ${layoutClass} ${className}`}
      whileHover={reduceMotion ? undefined : { y: -5 }}
      transition={{ type: "spring", stiffness: 380, damping: 28 }}
    >
      <Link
        href={`/projects/${project.slug}`}
        className="flex h-full flex-col focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
      >
        <div className="relative flex flex-1 flex-col p-6 md:p-8">
          <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-accent/[0.07] blur-3xl transition group-hover:bg-accent/10" />

          <motion.div className="relative mb-6 aspect-[16/10] w-full max-w-sm overflow-hidden rounded-lg border border-ink/5 bg-ink/[0.03] md:max-w-none">
            {project.coverImage ? (
              <Image
                src={project.coverImage}
                alt={`${project.title} project visual`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 400px"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center">
                <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-muted/80">
                  Visual placeholder
                </span>
              </div>
            )}
          </motion.div>

          <div className="mt-auto space-y-4">
            <div className="flex flex-wrap gap-2">
              {project.tags.map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </div>
            <h3 className="text-xl font-semibold tracking-tight text-ink md:text-2xl">
              {project.title}
            </h3>
            <p className="max-w-prose text-sm leading-relaxed text-muted md:text-base">
              {project.shortDescription}
            </p>
            <span className="inline-flex items-center gap-2 text-sm font-medium text-accent">
              View case study
              <ArrowIcon className="text-accent" animate={arrowMotion} />
            </span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
