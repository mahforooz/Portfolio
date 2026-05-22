import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";
import { persustainPdf as d } from "@/data/persustainPdfContent";
import { Tag } from "./Tag";

const ON_PAGE = [
  { id: "ps-overview", label: "Overview" },
  { id: "ps-problem", label: "Problem" },
  { id: "ps-role", label: "My role" },
  { id: "ps-system", label: "System design" },
  { id: "ps-model", label: "Emissions model" },
  { id: "ps-product", label: "Product surface" },
  { id: "ps-tech", label: "Technical" },
  { id: "ps-outcome", label: "Outcome" },
  { id: "ps-reflection", label: "Reflection" },
] as const;

function TocLinks({ className }: { className?: string }) {
  return (
    <ul className={className}>
      {ON_PAGE.map(({ id, label }) => (
        <li key={id}>
          <a
            href={`#${id}`}
            className="focus-ring block rounded-md py-1.5 text-sm text-muted underline-offset-4 transition-colors hover:bg-accent-soft/40 hover:text-ink hover:underline"
          >
            {label}
          </a>
        </li>
      ))}
    </ul>
  );
}

function BulletList({
  items,
  className = "",
}: {
  items: string[];
  className?: string;
}) {
  return (
    <ul className={`list-disc space-y-2 pl-5 text-base leading-relaxed text-ink ${className}`}>
      {items.map((x) => (
        <li key={x}>{x}</li>
      ))}
    </ul>
  );
}

export function PersustainCaseStudy({ project }: { project: Project }) {
  return (
    <article className="pb-28">
      {/* Hero */}
      <header className="border-b border-line bg-base">
        <div className="layout-page layout-page-top pb-16 pt-14 md:pb-20 md:pt-16">
          <p className="text-xs font-semibold uppercase tracking-wider text-accent">
            Case study
          </p>

          <div className="mt-4 grid gap-8 lg:mt-6 lg:grid-cols-[1fr,minmax(0,520px)] lg:items-start lg:gap-x-10 xl:gap-x-14">
            <div className="min-w-0">
              <h1 className="font-display text-display font-semibold text-ink md:max-w-4xl">
                {project.title}
              </h1>
              <p className="mt-6 max-w-2xl text-lg font-normal leading-snug text-ink md:text-xl">
                {d.tagline}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>
            </div>

            <figure className="relative w-full max-w-[min(94vw,360px)] shrink-0 overflow-hidden rounded-lg border border-line bg-neutral-100 sm:max-w-[min(94vw,420px)] lg:ml-auto lg:max-w-none lg:w-full">
              <Image
                src="/projects/persustain-cover.png"
                alt="Persustain splash screen on a smartphone resting on a laptop keyboard"
                width={960}
                height={638}
                className="h-auto w-full"
                priority
                sizes="(max-width: 1023px) min(420px, 94vw), 520px"
              />
            </figure>
          </div>

          <dl className="mt-10 grid gap-8 border-t border-line pt-10 text-sm md:grid-cols-2">
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wider text-muted-2">
                Role
              </dt>
              <dd className="mt-2 text-ink">{d.heroMeta.role}</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wider text-muted-2">
                Timeline
              </dt>
              <dd className="mt-2 text-ink">{d.heroMeta.timeline}</dd>
            </div>
            <div className="md:col-span-2">
              <dt className="text-xs font-semibold uppercase tracking-wider text-muted-2">
                Team
              </dt>
              <dd className="mt-2 text-ink">{d.heroMeta.team}</dd>
            </div>
            <div className="md:col-span-2">
              <dt className="text-xs font-semibold uppercase tracking-wider text-muted-2">
                Tools
              </dt>
              <dd className="mt-4 flex flex-wrap gap-2">
                {d.heroMeta.tools.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-line bg-white px-3 py-1 text-ink"
                  >
                    {t}
                  </span>
                ))}
              </dd>
            </div>
          </dl>

          <p className="mt-10">
            <Link
              href="/projects"
              className="focus-ring text-sm font-medium text-accent underline-offset-4 hover:underline"
            >
              ← All projects
            </Link>
          </p>
        </div>
      </header>

      <div className="layout-page pt-14 md:pt-20">
        <nav
          aria-label="On this page"
          className="border-b border-line pb-6 lg:hidden print:hidden"
        >
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-2">On this page</p>
          <TocLinks className="mt-3 flex flex-wrap gap-x-6 gap-y-1" />
        </nav>

        <div className="lg:grid lg:grid-cols-[11.5rem_minmax(0,1fr)] lg:gap-x-12 lg:pb-16 xl:grid-cols-[13rem_minmax(0,1fr)] xl:gap-x-14">
          <aside className="relative hidden lg:block print:hidden">
            <nav
              aria-label="On this page"
              className="sticky top-28 max-h-[calc(100vh-8rem)] space-y-3 overflow-y-auto pb-12 pt-14"
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-2">On this page</p>
              <TocLinks className="space-y-1 border-l border-line pl-4" />
            </nav>
          </aside>

          <div className="min-w-0 space-y-16 pt-8 md:space-y-20 lg:py-14">
            <section id="ps-overview" aria-labelledby="ps-overview-heading" className="scroll-mt-28">
              <h2 id="ps-overview-heading" className="font-display text-xl font-semibold text-ink md:text-2xl">
                Overview
              </h2>
              <p className="mt-5 max-w-[65ch] text-base leading-relaxed text-muted">{d.overviewIntro}</p>
              <p className="mt-6 max-w-[65ch] text-base leading-relaxed text-muted">{d.overviewQuestionLead}</p>
              <blockquote className="mt-4 max-w-[65ch] border-l-[3px] border-accent bg-accent-soft/30 py-4 pl-5 pr-6 text-[17px] font-medium leading-snug text-ink">
                {d.overviewQuestion}
              </blockquote>
              <p className="mt-6 max-w-[65ch] text-base leading-relaxed text-muted">{d.overviewContributionIntro}</p>
              <BulletList items={d.overviewContributionBullets} className="mt-4 max-w-[65ch]" />
              <p className="mt-6 max-w-[65ch] text-base leading-relaxed text-muted">{d.overviewClosing}</p>
            </section>

            <section id="ps-problem" aria-labelledby="ps-problem-heading" className="scroll-mt-28">
              <h2 id="ps-problem-heading" className="font-display text-xl font-semibold text-ink md:text-2xl">
                Problem
              </h2>
              <p className="mt-5 max-w-[65ch] text-base leading-relaxed text-muted">{d.problemIntro}</p>
              <BulletList items={d.problemBullets} className="mt-4 max-w-[65ch]" />
            </section>

            <section id="ps-role" aria-labelledby="ps-role-heading" className="scroll-mt-28">
              <h2 id="ps-role-heading" className="font-display text-xl font-semibold text-ink md:text-2xl">
                My role
              </h2>
              <p className="mt-5 max-w-[65ch] text-base leading-relaxed text-muted">{d.roleIntro}</p>
              <BulletList items={d.roleBullets} className="mt-4 max-w-[65ch]" />
            </section>

            <section id="ps-system" aria-labelledby="ps-system-heading" className="scroll-mt-28">
              <h2 id="ps-system-heading" className="font-display text-xl font-semibold text-ink md:text-2xl">
                System design
              </h2>
              <p className="mt-5 max-w-[65ch] text-base leading-relaxed text-muted">{d.hybridIntro}</p>
              <div className="mt-8 grid gap-8 md:grid-cols-2 md:gap-10">
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-accent">
                    {d.deterministicTitle}
                  </h3>
                  <BulletList items={d.deterministicBullets} className="mt-4" />
                </div>
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-accent">{d.aiTitle}</h3>
                  <BulletList items={d.aiBullets} className="mt-4" />
                </div>
              </div>
              <p className="mt-8 max-w-[65ch] text-base leading-relaxed text-muted">{d.separationNote}</p>
            </section>

            <section id="ps-model" aria-labelledby="ps-model-heading" className="scroll-mt-28">
              <h2 id="ps-model-heading" className="font-display text-xl font-semibold text-ink md:text-2xl">
                Emissions model
              </h2>
              <p className="mt-5 max-w-[65ch] text-base leading-relaxed text-muted">{d.behaviorIntro}</p>
              <BulletList items={d.modelConcepts} className="mt-4 max-w-[65ch]" />
              <div className="mt-8 max-w-lg border-l-[3px] border-accent bg-surface px-5 py-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-accent">Net emissions</p>
                <p className="mt-3 font-mono text-base font-semibold tabular-nums text-ink">{d.netFormula}</p>
              </div>
              <p className="mt-6 max-w-[65ch] text-base leading-relaxed text-muted">{d.modelOutcome}</p>
            </section>

            <section id="ps-product" aria-labelledby="ps-product-heading" className="scroll-mt-28">
              <h2 id="ps-product-heading" className="font-display text-xl font-semibold text-ink md:text-2xl">
                Product surface
              </h2>
              <p className="mt-5 max-w-[65ch] text-muted">What the backend backed in the MVP:</p>
              <div className="mt-8 grid gap-8 sm:grid-cols-2">
                {d.productModules.map((m) => (
                  <div key={m.title} className="border-t border-line pt-6">
                    <h3 className="font-display text-lg font-semibold text-ink">{m.title}</h3>
                    <p className="mt-3 text-base leading-relaxed text-muted">{m.body}</p>
                  </div>
                ))}
              </div>
            </section>

            <section id="ps-tech" aria-labelledby="ps-tech-heading" className="scroll-mt-28">
              <h2 id="ps-tech-heading" className="font-display text-xl font-semibold text-ink md:text-2xl">
                Technical development
              </h2>
              <p className="mt-5 max-w-[65ch] text-base leading-relaxed text-muted">{d.technicalStackIntro}</p>
              <BulletList items={d.technicalStack} className="mt-4 max-w-[65ch]" />
              <p className="mt-8 text-sm font-semibold uppercase tracking-wider text-muted-2">
                {d.coreServicesIntro}
              </p>
              <ul className="mt-3 max-w-2xl space-y-1.5 font-mono text-[13px] text-ink">
                {d.coreServices.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
              <p className="mt-8 max-w-[65ch] text-base leading-relaxed text-muted">{d.aggregationNote}</p>
            </section>

            <section id="ps-outcome" aria-labelledby="ps-outcome-heading" className="scroll-mt-28">
              <h2 id="ps-outcome-heading" className="font-display text-xl font-semibold text-ink md:text-2xl">
                Outcome
              </h2>
              <p className="mt-5 max-w-[65ch] text-base leading-relaxed text-muted">{d.outcomeMvpIntro}</p>
              <BulletList items={d.outcomeMvpBullets} className="mt-4 max-w-[65ch]" />
              <p className="mt-8 max-w-[65ch] text-base leading-relaxed text-muted">{d.futureContextIntro}</p>
              <BulletList items={d.futureContextBullets} className="mt-4 max-w-[65ch]" />
            </section>

            <section
              id="ps-reflection"
              aria-labelledby="ps-reflection-heading"
              className="scroll-mt-28 border-t border-line pt-12 md:pt-14"
            >
              <h2 id="ps-reflection-heading" className="font-display text-xl font-semibold text-ink md:text-2xl">
                Reflection
              </h2>
              <p className="mt-5 max-w-[65ch] text-base leading-relaxed text-muted">{d.reflectionIntersectionIntro}</p>
              <BulletList items={d.reflectionThemes} className="mt-4 max-w-[65ch]" />
              <p className="mt-8 max-w-[65ch] text-lg font-medium leading-snug text-ink">{d.reflectionLesson}</p>
              <p className="mt-6 max-w-[65ch] text-base leading-relaxed text-muted">{d.reflectionInfluenceIntro}</p>
              <BulletList items={d.reflectionInfluences} className="mt-4 max-w-[65ch]" />
              <p className="mt-8 max-w-[65ch] text-base leading-relaxed text-muted">{d.reflectionClosing}</p>
            </section>
          </div>
        </div>
      </div>
    </article>
  );
}
