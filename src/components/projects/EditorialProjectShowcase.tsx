import Image from "next/image";
import type { Project } from "@/data/projects";
import Link from "next/link";
import { Tag } from "@/components/Tag";

const placeholders = [
  "from-accent-soft to-sage/60",
  "from-accent/10 to-accent-soft/90",
  "from-sage/80 to-accent-soft/70",
];

type Props = {
  project: Project;
  index: number;
};

/** Consistent large card; only image/text order alternates for rhythm. */
export function EditorialProjectShowcase({ project, index }: Props) {
  const reverse = index % 2 === 1;
  const ph = placeholders[index % 3];

  return (
    <article className="group overflow-hidden rounded-2xl border border-line bg-white shadow-sm transition hover:border-accent/35 hover:shadow-md focus-within:ring-2 focus-within:ring-accent/25 focus-within:ring-offset-2 focus-within:ring-offset-base">
      <div
        className={`flex flex-col gap-0 md:flex-row ${
          reverse ? "md:flex-row-reverse" : ""
        }`}
      >
        <Link
          href={`/projects/${project.slug}`}
          className={`focus-ring relative flex aspect-[16/10] w-full shrink-0 overflow-hidden items-center justify-center md:aspect-auto md:min-h-[280px] md:w-[52%] ${
            project.coverImage ? "bg-neutral-100" : `bg-gradient-to-br ${ph}`
          }`}
          aria-label={`View ${project.title}`}
        >
          {project.coverImage ? (
            <Image
              src={project.coverImage}
              alt={`${project.title} project visual`}
              fill
              className="object-cover transition duration-300 group-hover:scale-[1.02]"
              sizes="(max-width: 768px) 100vw, 52vw"
            />
          ) : (
            <span className="text-sm text-muted/80 transition group-hover:text-muted">
              Project visual
            </span>
          )}
        </Link>

        <div className="flex flex-1 flex-col justify-center px-6 py-8 md:px-10 md:py-10 lg:px-12">
          <p className="text-xs font-medium text-muted-2">
            {String(index + 1).padStart(2, "0")}
          </p>
          <h2 className="font-display mt-2 text-2xl font-semibold tracking-tight text-ink md:text-3xl">
            <Link
              href={`/projects/${project.slug}`}
              className="focus-ring rounded-sm transition hover:text-accent"
            >
              {project.title}
            </Link>
          </h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </div>
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted md:text-[15px]">
            {project.shortDescription}
          </p>
          <Link
            href={`/projects/${project.slug}`}
            className="focus-ring mt-6 inline-flex w-fit rounded-sm text-sm font-medium text-accent underline-offset-4 transition hover:text-accent-muted hover:underline"
          >
            View project →
          </Link>
        </div>
      </div>
    </article>
  );
}
