import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";
import { endlessJourney as d } from "@/data/endlessJourneyContent";
import { CaseStudyImageGallery } from "./CaseStudyImageGallery";
import { Tag } from "./Tag";

const ON_PAGE = [
  { id: "tej-overview", label: "Overview" },
  { id: "tej-research", label: "Research" },
  { id: "tej-narrative", label: "Narrative" },
  { id: "tej-gameplay", label: "Gameplay" },
  { id: "tej-environment", label: "Environment" },
  { id: "tej-technical", label: "Technical" },
  { id: "tej-challenges", label: "Challenges" },
  { id: "tej-reflection", label: "Reflection" },
  { id: "tej-future", label: "Future" },
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

export function EndlessJourneyCaseStudy({ project }: { project: Project }) {
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
                src="/projects/endless-journey-cover.png"
                alt="The Endless Journey title screen on a laptop: figure by a campfire with Play button"
                width={1024}
                height={715}
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
              <dt className="text-xs font-semibold uppercase tracking-wider text-muted-2">Platform</dt>
              <dd className="mt-2 text-ink">{d.heroMeta.platform}</dd>
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
            <section id="tej-overview" aria-labelledby="tej-overview-heading" className="scroll-mt-28">
              <h2 id="tej-overview-heading" className="font-display text-xl font-semibold text-ink md:text-2xl">
                Overview
              </h2>
              <p className="mt-5 max-w-[65ch] text-base leading-relaxed text-muted">{d.overviewIntro}</p>
              <p className="mt-6 max-w-[65ch] text-base leading-relaxed text-muted">{d.overviewStory}</p>
              <p className="mt-6 max-w-[65ch] text-base leading-relaxed text-muted">{d.overviewReframe}</p>
              <p className="mt-8 max-w-[65ch] text-base leading-relaxed text-muted">{d.researchFocusIntro}</p>
              <BulletList items={d.researchFocusBullets} className="mt-4 max-w-[65ch]" />
              <p className="mt-6 max-w-[65ch] text-base leading-relaxed text-muted">{d.researchFocusClosing}</p>
            </section>

            <section id="tej-research" aria-labelledby="tej-research-heading" className="scroll-mt-28">
              <h2 id="tej-research-heading" className="font-display text-xl font-semibold text-ink md:text-2xl">
                Research &amp; insights
              </h2>
              <p className="mt-5 max-w-[65ch] text-base leading-relaxed text-muted">{d.researchInsightsIntro}</p>
              <p className="mt-6 max-w-[65ch] text-base leading-relaxed text-muted">{d.researchThemesIntro}</p>
              <BulletList items={d.researchThemes} className="mt-4 max-w-[65ch]" />
              <p className="mt-6 max-w-[65ch] text-base leading-relaxed text-muted">{d.researchThemesClosing}</p>

              <p className="mt-10 text-sm font-semibold uppercase tracking-wider text-muted-2">
                Research insight → gameplay translation
              </p>
              <div className="mt-3 max-w-3xl overflow-x-auto rounded-lg border border-line bg-white shadow-sm">
                <table className="w-full min-w-[32rem] border-collapse text-left text-sm">
                  <caption className="sr-only">
                    Research insights mapped to gameplay systems in The Endless Journey
                  </caption>
                  <thead>
                    <tr className="bg-surface">
                      <th
                        scope="col"
                        className="w-[42%] border-b border-r border-line px-4 py-3.5 text-xs font-semibold uppercase tracking-wider text-ink"
                      >
                        Research insight
                      </th>
                      <th
                        scope="col"
                        className="border-b border-line px-4 py-3.5 text-xs font-semibold uppercase tracking-wider text-ink"
                      >
                        Gameplay translation
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {d.insightTable.map((row, i) => (
                      <tr
                        key={row.insight}
                        className={i % 2 === 1 ? "bg-base/60" : "bg-white"}
                      >
                        <th
                          scope="row"
                          className="border-b border-r border-line px-4 py-3.5 align-top font-normal text-muted"
                        >
                          {row.insight}
                        </th>
                        <td className="border-b border-line px-4 py-3.5 align-top text-ink">
                          {row.translation}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section id="tej-narrative" aria-labelledby="tej-narrative-heading" className="scroll-mt-28">
              <h2 id="tej-narrative-heading" className="font-display text-xl font-semibold text-ink md:text-2xl">
                Narrative structure
              </h2>
              <p className="mt-5 max-w-[65ch] text-base leading-relaxed text-muted">{d.narrativeIntro}</p>
              <div className="mt-8 space-y-8">
                {d.acts.map((act) => (
                  <div key={act.title} className="border-t border-line pt-6">
                    <h3 className="font-display text-lg font-semibold text-ink">{act.title}</h3>
                    <p className="mt-3 max-w-[65ch] text-base leading-relaxed text-muted">{act.body}</p>
                  </div>
                ))}
              </div>
              <CaseStudyImageGallery
                slides={d.narrativeGallery}
                label="Narrative structure in-game gallery"
              />
            </section>

            <section id="tej-gameplay" aria-labelledby="tej-gameplay-heading" className="scroll-mt-28">
              <h2 id="tej-gameplay-heading" className="font-display text-xl font-semibold text-ink md:text-2xl">
                Gameplay systems
              </h2>
              <div className="mt-8 grid gap-8 sm:grid-cols-2">
                {d.gameplaySystems.map((sys) => (
                  <div key={sys.title} className="border-t border-line pt-6">
                    <h3 className="font-display text-lg font-semibold text-ink">{sys.title}</h3>
                    <p className="mt-3 text-base leading-relaxed text-muted">{sys.body}</p>
                  </div>
                ))}
              </div>
              <CaseStudyImageGallery
                slides={d.gameplayGallery}
                label="Gameplay systems in-game gallery"
              />
            </section>

            <section id="tej-environment" aria-labelledby="tej-environment-heading" className="scroll-mt-28">
              <h2 id="tej-environment-heading" className="font-display text-xl font-semibold text-ink md:text-2xl">
                Environmental storytelling
              </h2>
              <p className="mt-5 max-w-[65ch] text-base leading-relaxed text-muted">{d.environmentalIntro}</p>
              <p className="mt-6 max-w-[65ch] text-base leading-relaxed text-muted">{d.environmentalUsesIntro}</p>
              <BulletList items={d.environmentalUses} className="mt-4 max-w-[65ch]" />
              <p className="mt-6 max-w-[65ch] text-base leading-relaxed text-muted">{d.environmentalClosing}</p>
              <CaseStudyImageGallery
                slides={d.environmentalGallery}
                label="Environmental storytelling in-game gallery"
              />
            </section>

            <section id="tej-technical" aria-labelledby="tej-technical-heading" className="scroll-mt-28">
              <h2 id="tej-technical-heading" className="font-display text-xl font-semibold text-ink md:text-2xl">
                Technical development
              </h2>
              <p className="mt-5 max-w-[65ch] text-base leading-relaxed text-muted">{d.technicalIntro}</p>
              <p className="mt-6 text-sm font-semibold uppercase tracking-wider text-muted-2">
                {d.technicalSystemsIntro}
              </p>
              <BulletList items={d.technicalSystems} className="mt-3 max-w-[65ch]" />
              <p className="mt-6 max-w-[65ch] text-base leading-relaxed text-muted">{d.technicalClosing}</p>
              <CaseStudyImageGallery
                slides={d.technicalGallery}
                label="Technical development gallery"
              />
            </section>

            <section id="tej-challenges" aria-labelledby="tej-challenges-heading" className="scroll-mt-28">
              <h2 id="tej-challenges-heading" className="font-display text-xl font-semibold text-ink md:text-2xl">
                Challenges &amp; iteration
              </h2>
              <p className="mt-5 max-w-[65ch] text-base leading-relaxed text-muted">{d.challengesIntro}</p>
              <p className="mt-6 max-w-[65ch] text-base leading-relaxed text-muted">{d.challengesClosing}</p>
            </section>

            <section
              id="tej-reflection"
              aria-labelledby="tej-reflection-heading"
              className="scroll-mt-28 border-t border-line pt-12 md:pt-14"
            >
              <h2 id="tej-reflection-heading" className="font-display text-xl font-semibold text-ink md:text-2xl">
                Reflection
              </h2>
              <p className="mt-5 max-w-[65ch] text-base leading-relaxed text-muted">{d.reflectionIntro}</p>
              <p className="mt-6 max-w-[65ch] text-base leading-relaxed text-muted">{d.reflectionInterestsIntro}</p>
              <BulletList items={d.reflectionInterests} className="mt-4 max-w-[65ch]" />
              <p className="mt-8 max-w-[65ch] text-lg font-medium leading-snug text-ink">{d.reflectionLesson}</p>
              <p className="mt-6 max-w-[65ch] text-base leading-relaxed text-muted">{d.reflectionExamplesIntro}</p>
              <BulletList items={d.reflectionExamples} className="mt-4 max-w-[65ch]" />
              <p className="mt-8 max-w-[65ch] text-base leading-relaxed text-muted">{d.reflectionClosing}</p>
            </section>

            <section id="tej-future" aria-labelledby="tej-future-heading" className="scroll-mt-28">
              <h2 id="tej-future-heading" className="font-display text-xl font-semibold text-ink md:text-2xl">
                Future directions
              </h2>
              <p className="mt-5 max-w-[65ch] text-base leading-relaxed text-muted">{d.futureIntro}</p>
              <BulletList items={d.futureBullets} className="mt-4 max-w-[65ch]" />
              <p className="mt-8 max-w-[65ch] text-base leading-relaxed text-muted">{d.futureClosing}</p>
            </section>
          </div>
        </div>
      </div>
    </article>
  );
}
