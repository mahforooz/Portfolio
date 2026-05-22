import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";
import { healthSync as d } from "@/data/healthSyncContent";
import { CaseStudyImageGallery } from "./CaseStudyImageGallery";
import { Tag } from "./Tag";

const ON_PAGE = [
  { id: "hs-overview", label: "Overview" },
  { id: "hs-problem", label: "Problem" },
  { id: "hs-research", label: "Research" },
  { id: "hs-insights", label: "Insights" },
  { id: "hs-strategy", label: "Strategy" },
  { id: "hs-ai", label: "AI guidance" },
  { id: "hs-watch", label: "Apple Watch" },
  { id: "hs-visual", label: "Visual design" },
  { id: "hs-ethics", label: "Ethics" },
  { id: "hs-outcome", label: "Outcome" },
  { id: "hs-reflection", label: "Reflection" },
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
  items: readonly string[] | string[];
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

function InsightCards({
  items,
}: {
  items: readonly { title: string; body: string }[];
}) {
  return (
    <div className="mt-8 grid gap-8 sm:grid-cols-2">
      {items.map((item) => (
        <div key={item.title} className="border-t border-line pt-6">
          <h3 className="font-display text-lg font-semibold text-ink">{item.title}</h3>
          <p className="mt-3 text-base leading-relaxed text-muted">{item.body}</p>
        </div>
      ))}
    </div>
  );
}

export function HealthSyncCaseStudy({ project }: { project: Project }) {
  return (
    <article className="pb-28">
      <header className="border-b border-line bg-base">
        <div className="layout-page layout-page-top pb-16 pt-14 md:pb-20 md:pt-16">
          <p className="text-xs font-semibold uppercase tracking-wider text-accent">Case study</p>

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
                src="/projects/healthsync-cover.png"
                alt="HealthSync AI on iPhone and Apple Watch showing glucose dashboard and quick log"
                width={1024}
                height={576}
                className="h-auto w-full"
                priority
                sizes="(max-width: 1023px) min(420px, 94vw), 520px"
              />
            </figure>
          </div>

          <dl className="mt-10 grid gap-8 border-t border-line pt-10 text-sm md:grid-cols-2">
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wider text-muted-2">Role</dt>
              <dd className="mt-2 text-ink">{d.heroMeta.role}</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wider text-muted-2">Timeline</dt>
              <dd className="mt-2 text-ink">{d.heroMeta.timeline}</dd>
            </div>
            <div className="md:col-span-2">
              <dt className="text-xs font-semibold uppercase tracking-wider text-muted-2">Team</dt>
              <dd className="mt-2 text-ink">{d.heroMeta.team}</dd>
            </div>
            <div className="md:col-span-2">
              <dt className="text-xs font-semibold uppercase tracking-wider text-muted-2">Tools</dt>
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
        <nav aria-label="On this page" className="border-b border-line pb-6 lg:hidden print:hidden">
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
            <section id="hs-overview" aria-labelledby="hs-overview-heading" className="scroll-mt-28">
              <h2 id="hs-overview-heading" className="font-display text-xl font-semibold text-ink md:text-2xl">
                Overview
              </h2>
              <p className="mt-5 max-w-[65ch] text-base leading-relaxed text-muted">{d.overviewIntro}</p>
              <p className="mt-6 max-w-[65ch] text-base leading-relaxed text-muted">{d.overviewContribution}</p>
              <figure className="mt-8 max-w-4xl overflow-hidden rounded-lg border border-line bg-white">
                <Image
                  src="/projects/healthsync-mocks.png"
                  alt={d.overviewMocksAlt}
                  width={1024}
                  height={632}
                  className="h-auto w-full"
                  sizes="(max-width: 1024px) 100vw, 896px"
                  unoptimized
                />
                <figcaption className="border-t border-line px-4 py-3 text-center text-xs text-muted">
                  {d.overviewMocksCaption}
                </figcaption>
              </figure>
              <p className="mt-8 max-w-[65ch] text-base leading-relaxed text-muted">{d.collaboratedIntro}</p>
              <BulletList items={d.collaboratedBullets} className="mt-4 max-w-[65ch]" />
              <p className="mt-6 max-w-[65ch] text-base leading-relaxed text-muted">{d.independentIntro}</p>
              <BulletList items={d.independentBullets} className="mt-4 max-w-[65ch]" />
            </section>

            <section id="hs-problem" aria-labelledby="hs-problem-heading" className="scroll-mt-28">
              <h2 id="hs-problem-heading" className="font-display text-xl font-semibold text-ink md:text-2xl">
                Problem
              </h2>
              <p className="mt-5 max-w-[65ch] text-base leading-relaxed text-muted">{d.problemIntro}</p>
              <p className="mt-6 max-w-[65ch] text-base leading-relaxed text-muted">{d.problemSecondary}</p>
              <p className="mt-6 max-w-[65ch] text-base leading-relaxed text-muted">{d.problemClosing}</p>
            </section>

            <section id="hs-research" aria-labelledby="hs-research-heading" className="scroll-mt-28">
              <h2 id="hs-research-heading" className="font-display text-xl font-semibold text-ink md:text-2xl">
                Research &amp; discovery
              </h2>
              <p className="mt-5 max-w-[65ch] text-base leading-relaxed text-muted">{d.researchIntro}</p>
              <BulletList items={d.researchTopics} className="mt-4 max-w-[65ch]" />
              <p className="mt-6 max-w-[65ch] text-base leading-relaxed text-muted">{d.researchClosing}</p>
            </section>

            <section id="hs-insights" aria-labelledby="hs-insights-heading" className="scroll-mt-28">
              <h2 id="hs-insights-heading" className="font-display text-xl font-semibold text-ink md:text-2xl">
                Key insights
              </h2>
              <InsightCards items={d.keyInsights} />
              <p className="mt-8 max-w-[65ch] text-base leading-relaxed text-muted">{d.insightsClosing}</p>
            </section>

            <section id="hs-strategy" aria-labelledby="hs-strategy-heading" className="scroll-mt-28">
              <h2 id="hs-strategy-heading" className="font-display text-xl font-semibold text-ink md:text-2xl">
                Design strategy
              </h2>
              <p className="mt-5 max-w-[65ch] text-base leading-relaxed text-muted">{d.strategyIntro}</p>
              <BulletList items={d.strategyPrinciples} className="mt-4 max-w-[65ch]" />
              <p className="mt-8 max-w-[65ch] text-base leading-relaxed text-muted">{d.strategyClosing}</p>

              <h3 className="font-display mt-12 text-lg font-semibold text-ink md:text-xl">
                Longitudinal healthcare journey
              </h3>
              <p className="mt-5 max-w-[65ch] text-base leading-relaxed text-muted">{d.journeyIntro}</p>
              <BulletList items={d.journeyStages} className="mt-4 max-w-[65ch]" />
              <p className="mt-6 max-w-[65ch] text-base leading-relaxed text-muted">{d.journeyClosing}</p>
              <figure className="mt-8 max-w-4xl overflow-hidden rounded-lg border border-line bg-white">
                <Image
                  src="/projects/healthsync-journey-maps.png"
                  alt={d.journeyMapsAlt}
                  width={1024}
                  height={558}
                  className="h-auto w-full"
                  sizes="(max-width: 1024px) 100vw, 896px"
                  unoptimized
                />
                <figcaption className="border-t border-line px-4 py-3 text-center text-xs text-muted">
                  {d.journeyMapsCaption}
                </figcaption>
              </figure>
            </section>

            <section id="hs-ai" aria-labelledby="hs-ai-heading" className="scroll-mt-28">
              <h2 id="hs-ai-heading" className="font-display text-xl font-semibold text-ink md:text-2xl">
                Contextual AI guidance
              </h2>
              <p className="mt-5 max-w-[65ch] text-base leading-relaxed text-muted">{d.aiIntro}</p>
              <BulletList items={d.aiSignals} className="mt-4 max-w-[65ch]" />
              <p className="mt-6 max-w-[65ch] text-base leading-relaxed text-muted">{d.aiTranslation}</p>
              <p className="mt-6 max-w-[65ch] text-base leading-relaxed text-muted">{d.aiExample}</p>
              <p className="mt-6 max-w-[65ch] text-base leading-relaxed text-muted">{d.aiPrinciplesIntro}</p>
              <BulletList items={d.aiPrinciples} className="mt-4 max-w-[65ch]" />
              <p className="mt-4 max-w-[65ch] text-base leading-relaxed text-muted">{d.aiPrinciplesClosing}</p>
            </section>

            <section id="hs-watch" aria-labelledby="hs-watch-heading" className="scroll-mt-28">
              <h2 id="hs-watch-heading" className="font-display text-xl font-semibold text-ink md:text-2xl">
                Apple Watch experience
              </h2>
              <p className="mt-5 max-w-[65ch] text-base leading-relaxed text-muted">{d.watchIntro}</p>
              <p className="mt-6 max-w-[65ch] text-base leading-relaxed text-muted">{d.watchClosing}</p>
              <figure className="mt-8 max-w-4xl overflow-hidden rounded-lg border border-line bg-white">
                <Image
                  src="/projects/healthsync-watch.png"
                  alt={d.watchMocksAlt}
                  width={1024}
                  height={632}
                  className="h-auto w-full"
                  sizes="(max-width: 1024px) 100vw, 896px"
                  unoptimized
                />
                <figcaption className="border-t border-line px-4 py-3 text-center text-xs text-muted">
                  {d.watchMocksCaption}
                </figcaption>
              </figure>
            </section>

            <section id="hs-visual" aria-labelledby="hs-visual-heading" className="scroll-mt-28">
              <h2 id="hs-visual-heading" className="font-display text-xl font-semibold text-ink md:text-2xl">
                Visual design direction
              </h2>
              <p className="mt-5 max-w-[65ch] text-base leading-relaxed text-muted">{d.visualIntro}</p>
              <BulletList items={d.visualTraits} className="mt-4 max-w-[65ch]" />
              <p className="mt-6 max-w-[65ch] text-base leading-relaxed text-muted">{d.visualClosing}</p>
            </section>

            <section id="hs-ethics" aria-labelledby="hs-ethics-heading" className="scroll-mt-28">
              <h2 id="hs-ethics-heading" className="font-display text-xl font-semibold text-ink md:text-2xl">
                Ethical considerations
              </h2>
              <p className="mt-5 max-w-[65ch] text-base leading-relaxed text-muted">{d.ethicsIntro}</p>
              <p className="mt-6 max-w-[65ch] text-base leading-relaxed text-muted">{d.ethicsTopicsIntro}</p>
              <BulletList items={d.ethicsTopics} className="mt-4 max-w-[65ch]" />
              <p className="mt-6 max-w-[65ch] text-base leading-relaxed text-muted">{d.ethicsClosing}</p>
            </section>

            <section id="hs-outcome" aria-labelledby="hs-outcome-heading" className="scroll-mt-28">
              <h2 id="hs-outcome-heading" className="font-display text-xl font-semibold text-ink md:text-2xl">
                Outcome
              </h2>
              <p className="mt-5 max-w-[65ch] text-base leading-relaxed text-muted">{d.outcomeIntro}</p>
              <BulletList items={d.outcomeBullets} className="mt-4 max-w-[65ch]" />
              <CaseStudyImageGallery
                slides={d.outcomeGallery}
                label="Outcome prototype flows gallery"
              />
              <p className="mt-8 max-w-[65ch] text-base leading-relaxed text-muted">{d.outcomeSkillsIntro}</p>
              <BulletList items={d.outcomeSkills} className="mt-4 max-w-[65ch]" />
            </section>

            <section
              id="hs-reflection"
              aria-labelledby="hs-reflection-heading"
              className="scroll-mt-28 border-t border-line pt-12 md:pt-14"
            >
              <h2 id="hs-reflection-heading" className="font-display text-xl font-semibold text-ink md:text-2xl">
                Reflection
              </h2>
              <p className="mt-5 max-w-[65ch] text-base leading-relaxed text-muted">{d.reflectionIntro}</p>
              <p className="mt-8 max-w-[65ch] text-lg font-medium leading-snug text-ink">{d.reflectionLesson}</p>
              <p className="mt-6 max-w-[65ch] text-base leading-relaxed text-muted">{d.reflectionClosing}</p>
            </section>
          </div>
        </div>
      </div>
    </article>
  );
}
