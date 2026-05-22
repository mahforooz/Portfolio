import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";
import { ftsp as d } from "@/data/ftspContent";
import { CaseStudyImageGallery } from "./CaseStudyImageGallery";
import { Tag } from "./Tag";

const ON_PAGE = [
  { id: "ftsp-overview", label: "Overview" },
  { id: "ftsp-problem", label: "Problem" },
  { id: "ftsp-research", label: "Research" },
  { id: "ftsp-insights", label: "Insights" },
  { id: "ftsp-solution", label: "Solution" },
  { id: "ftsp-ecosystem", label: "Ecosystem" },
  { id: "ftsp-systems", label: "Systems" },
  { id: "ftsp-why", label: "Why it works" },
  { id: "ftsp-reflection", label: "Reflection" },
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

export function FTSPCaseStudy({ project }: { project: Project }) {
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
                src="/projects/ftsp-cover.png"
                alt="FTSP promotional flyer mockup: Confused about Money? You are not Alone, with financial help desk details"
                width={1024}
                height={677}
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
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wider text-muted-2">Course</dt>
              <dd className="mt-2 text-ink">{d.heroMeta.course}</dd>
            </div>
            <div>
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
            <section id="ftsp-overview" aria-labelledby="ftsp-overview-heading" className="scroll-mt-28">
              <h2 id="ftsp-overview-heading" className="font-display text-xl font-semibold text-ink md:text-2xl">
                Overview
              </h2>
              <p className="mt-5 max-w-[65ch] text-base leading-relaxed text-muted">{d.overviewIntro}</p>
              <p className="mt-6 max-w-[65ch] text-base leading-relaxed text-muted">{d.overviewBody}</p>
              <p className="mt-6 max-w-[65ch] text-base leading-relaxed text-muted">{d.overviewClosing}</p>
            </section>

            <section id="ftsp-problem" aria-labelledby="ftsp-problem-heading" className="scroll-mt-28">
              <h2 id="ftsp-problem-heading" className="font-display text-xl font-semibold text-ink md:text-2xl">
                Problem
              </h2>
              <p className="mt-5 max-w-[65ch] text-base leading-relaxed text-muted">{d.problemIntro}</p>
              <BulletList items={d.problemSystems} className="mt-4 max-w-[65ch]" />
              <p className="mt-6 max-w-[65ch] text-base leading-relaxed text-muted">{d.problemBarrier}</p>
              <p className="mt-6 max-w-[65ch] text-base leading-relaxed text-muted">{d.problemLearningIntro}</p>
              <BulletList items={d.problemLearningSources} className="mt-4 max-w-[65ch]" />
              <p className="mt-6 max-w-[65ch] text-base leading-relaxed text-muted">{d.problemLearningClosing}</p>
              <blockquote className="mt-8 border-l-[3px] border-accent bg-accent-soft/30 py-4 pl-5 pr-6 text-[17px] font-medium leading-snug text-ink">
                {d.centralInsight}
              </blockquote>
            </section>

            <section id="ftsp-research" aria-labelledby="ftsp-research-heading" className="scroll-mt-28">
              <h2 id="ftsp-research-heading" className="font-display text-xl font-semibold text-ink md:text-2xl">
                Research process
              </h2>

              <h3 className="font-display mt-10 text-lg font-semibold text-ink">Secondary research</h3>
              <p className="mt-5 max-w-[65ch] text-base leading-relaxed text-muted">{d.secondaryResearchIntro}</p>
              <BulletList items={d.secondaryResearchTopics} className="mt-4 max-w-[65ch]" />
              <p className="mt-6 max-w-[65ch] text-base leading-relaxed text-muted">{d.secondaryResearchClosing}</p>

              <h3 className="font-display mt-12 text-lg font-semibold text-ink">Co-design workshops</h3>
              <p className="mt-5 max-w-[65ch] text-base leading-relaxed text-muted">{d.coDesignIntro}</p>
              <BulletList items={d.coDesignTopics} className="mt-4 max-w-[65ch]" />
              <p className="mt-6 max-w-[65ch] text-base leading-relaxed text-muted">{d.coDesignClosing}</p>

              <h3 className="font-display mt-12 text-lg font-semibold text-ink">Iteration &amp; reflection</h3>
              <p className="mt-5 max-w-[65ch] text-base leading-relaxed text-muted">{d.iterationIntro}</p>
              <p className="mt-6 max-w-[65ch] text-base leading-relaxed text-muted">{d.iterationProblem}</p>
              <BulletList items={d.iterationLessons} className="mt-4 max-w-[65ch]" />
              <p className="mt-6 max-w-[65ch] text-base leading-relaxed text-muted">{d.iterationRedesignIntro}</p>
              <BulletList items={d.iterationRedesign} className="mt-4 max-w-[65ch]" />
              <p className="mt-6 max-w-[65ch] text-base leading-relaxed text-muted">{d.iterationClosing}</p>

              <CaseStudyImageGallery
                slides={d.researchGallery}
                label="Research artifacts gallery"
                className="mt-12"
              />
            </section>

            <section id="ftsp-insights" aria-labelledby="ftsp-insights-heading" className="scroll-mt-28">
              <h2 id="ftsp-insights-heading" className="font-display text-xl font-semibold text-ink md:text-2xl">
                Key research insights
              </h2>
              <InsightCards items={d.keyInsights} />
            </section>

            <section id="ftsp-solution" aria-labelledby="ftsp-solution-heading" className="scroll-mt-28">
              <h2 id="ftsp-solution-heading" className="font-display text-xl font-semibold text-ink md:text-2xl">
                Design opportunity &amp; solution
              </h2>
              <blockquote className="mt-5 max-w-[65ch] border-l-[3px] border-accent bg-accent-soft/30 py-4 pl-5 pr-6 text-[17px] font-medium leading-snug text-ink">
                {d.designOpportunity}
              </blockquote>
              <p className="mt-8 max-w-[65ch] text-base leading-relaxed text-muted">{d.solutionIntro}</p>
              <p className="mt-6 max-w-[65ch] text-base leading-relaxed text-muted">{d.solutionCombinesIntro}</p>
              <BulletList items={d.solutionCombines} className="mt-4 max-w-[65ch]" />
              <p className="mt-6 max-w-[65ch] text-base leading-relaxed text-muted">{d.solutionClosing}</p>
            </section>

            <section id="ftsp-ecosystem" aria-labelledby="ftsp-ecosystem-heading" className="scroll-mt-28">
              <h2 id="ftsp-ecosystem-heading" className="font-display text-xl font-semibold text-ink md:text-2xl">
                Service ecosystem
              </h2>
              <div className="mt-8 grid gap-8 md:grid-cols-2">
                {d.ecosystemModules.map((m) => (
                  <div key={m.title} className="border-t border-line pt-6 md:last:col-span-2 md:last:max-w-[65ch]">
                    <h3 className="font-display text-lg font-semibold text-ink">{m.title}</h3>
                    <p className="mt-3 text-base leading-relaxed text-muted">{m.body}</p>
                  </div>
                ))}
              </div>
            </section>

            <section id="ftsp-systems" aria-labelledby="ftsp-systems-heading" className="scroll-mt-28">
              <h2 id="ftsp-systems-heading" className="font-display text-xl font-semibold text-ink md:text-2xl">
                Journey mapping &amp; systems thinking
              </h2>
              <p className="mt-5 max-w-[65ch] text-base leading-relaxed text-muted">{d.systemsIntro}</p>
              <p className="mt-6 max-w-[65ch] text-sm font-semibold uppercase tracking-wider text-muted-2">
                These helped us visualize:
              </p>
              <BulletList items={d.systemsVisualized} className="mt-3 max-w-[65ch]" />
              <p className="mt-6 max-w-[65ch] text-base leading-relaxed text-muted">{d.systemsClosing}</p>

              <CaseStudyImageGallery
                slides={d.systemsGallery}
                label="Journey maps and service blueprint gallery"
                className="mt-12"
              />
            </section>

            <section id="ftsp-why" aria-labelledby="ftsp-why-heading" className="scroll-mt-28">
              <h2 id="ftsp-why-heading" className="font-display text-xl font-semibold text-ink md:text-2xl">
                Why the service works
              </h2>
              <InsightCards items={d.whyWorks} />

              <figure className="mt-12 max-w-4xl overflow-hidden rounded-lg border border-line bg-white">
                <Image
                  src="/projects/ftsp-storyboard.png"
                  alt={d.storyboardAlt}
                  width={1024}
                  height={779}
                  className="h-auto w-full"
                  sizes="(max-width: 768px) 100vw, 896px"
                />
                {d.storyboardCaption && (
                  <figcaption className="border-t border-line px-4 py-3 text-center text-xs text-muted">
                    {d.storyboardCaption}
                  </figcaption>
                )}
              </figure>
            </section>

            <section
              id="ftsp-reflection"
              aria-labelledby="ftsp-reflection-heading"
              className="scroll-mt-28 border-t border-line pt-12 md:pt-14"
            >
              <h2 id="ftsp-reflection-heading" className="font-display text-xl font-semibold text-ink md:text-2xl">
                Reflection
              </h2>
              <p className="mt-5 max-w-[65ch] text-base leading-relaxed text-muted">{d.reflectionIntro}</p>
              <p className="mt-6 max-w-[65ch] text-base leading-relaxed text-muted">{d.reflectionBody}</p>
              <p className="mt-8 max-w-[65ch] text-base leading-relaxed text-muted">{d.reflectionSkillsIntro}</p>
              <BulletList items={d.reflectionSkills} className="mt-4 max-w-[65ch]" />
              <p className="mt-8 max-w-[65ch] text-base leading-relaxed text-muted">{d.reflectionClosing}</p>
            </section>
          </div>
        </div>
      </div>
    </article>
  );
}
