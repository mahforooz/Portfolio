import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";
import { finexa as d } from "@/data/finexaContent";
import { Tag } from "./Tag";

const ON_PAGE = [
  { id: "fx-overview", label: "Overview" },
  { id: "fx-role", label: "My role" },
  { id: "fx-process", label: "Design process" },
  { id: "fx-features", label: "Key features" },
  { id: "fx-prototype", label: "Final prototype" },
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

function CaseImage({
  src,
  alt,
  caption,
  width,
  height,
}: {
  src: string;
  alt: string;
  caption?: string;
  width: number;
  height: number;
}) {
  return (
    <figure className="mt-8 max-w-4xl overflow-hidden rounded-lg border border-line bg-white">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="h-auto w-full"
        sizes="(max-width: 1024px) 100vw, 896px"
      />
      {caption && (
        <figcaption className="border-t border-line px-4 py-3 text-center text-xs text-muted">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

export function FinexaCaseStudy({ project }: { project: Project }) {
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
                src="/projects/finexa-cover.png"
                alt="Finexa app open on a smartphone resting on a pink notebook, showing the home screen with available balance and payment list"
                width={1618}
                height={1080}
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
              <dt className="text-xs font-semibold uppercase tracking-wider text-muted-2">Service</dt>
              <dd className="mt-2 text-ink">{d.heroMeta.service}</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wider text-muted-2">Company</dt>
              <dd className="mt-2 text-ink">{d.heroMeta.company}</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wider text-muted-2">Date</dt>
              <dd className="mt-2 text-ink">{d.heroMeta.date}</dd>
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
            <section id="fx-overview" aria-labelledby="fx-overview-heading" className="scroll-mt-28">
              <h2 id="fx-overview-heading" className="font-display text-xl font-semibold text-ink md:text-2xl">
                Overview
              </h2>
              <p className="mt-5 max-w-[65ch] text-base leading-relaxed text-muted">{d.overviewIntro}</p>
              <BulletList items={d.overviewBullets} className="mt-4 max-w-[65ch]" />
              <CaseImage
                src="/projects/finexa-overview.png"
                alt="Finexa app screens: AI voice assistant, AI chat, home dashboard, and spending statistics"
                caption="Product overview · AI assistant, home, and statistics screens"
                width={1920}
                height={1080}
              />
            </section>

            <section id="fx-role" aria-labelledby="fx-role-heading" className="scroll-mt-28">
              <h2 id="fx-role-heading" className="font-display text-xl font-semibold text-ink md:text-2xl">
                My Role
              </h2>
              <p className="mt-5 max-w-[65ch] text-base leading-relaxed text-muted">{d.roleIntro}</p>
              <BulletList items={d.roleBullets} className="mt-4 max-w-[65ch]" />
            </section>

            <section id="fx-process" aria-labelledby="fx-process-heading" className="scroll-mt-28">
              <h2 id="fx-process-heading" className="font-display text-xl font-semibold text-ink md:text-2xl">
                Design Process
              </h2>

              <h3 className="font-display mt-10 text-lg font-semibold text-ink">Research &amp; Inspiration</h3>
              <p className="mt-5 max-w-[65ch] text-base leading-relaxed text-muted">{d.researchIntro}</p>
              <BulletList items={d.researchBullets} className="mt-4 max-w-[65ch]" />

              <h3 className="font-display mt-12 text-lg font-semibold text-ink">Key Insights</h3>
              <BulletList items={d.keyInsightsBullets} className="mt-4 max-w-[65ch]" />

              <h3 className="font-display mt-12 text-lg font-semibold text-ink">Design Opportunities</h3>
              <BulletList items={d.designOpportunitiesBullets} className="mt-4 max-w-[65ch]" />
              <CaseImage
                src="/projects/finexa-design-opportunities.png"
                alt="Research board: interview questions, HMW statements, market research, and comparative analysis of PayPal, Google Pay, and Apple Pay"
                caption="Research board · interview questions, HMW statements, and competitive analysis"
                width={2306}
                height={1408}
              />

              <h3 className="font-display mt-12 text-lg font-semibold text-ink">Sketches &amp; Early Concepts</h3>
              <p className="mt-5 max-w-[65ch] text-base leading-relaxed text-muted">{d.sketchesIntro}</p>
              <BulletList items={d.sketchesBullets} className="mt-4 max-w-[65ch]" />
              <p className="mt-6 max-w-[65ch] text-base leading-relaxed text-muted">{d.sketchesClosing}</p>

              <h3 className="font-display mt-12 text-lg font-semibold text-ink">Wireframes</h3>
              <p className="mt-5 max-w-[65ch] text-base leading-relaxed text-muted">{d.wireframesIntro}</p>
              <BulletList items={d.wireframesBullets} className="mt-4 max-w-[65ch]" />

              <h3 className="font-display mt-12 text-lg font-semibold text-ink">Iterations</h3>
              <p className="mt-5 max-w-[65ch] text-base leading-relaxed text-muted">{d.iterationsIntro}</p>
              <BulletList items={d.iterationsBullets} className="mt-4 max-w-[65ch]" />
              <CaseImage
                src="/projects/finexa-design-iterations.png"
                alt="Refined Finexa screens (home, statistics, contacts, transfer, success, AI assistant, chat) alongside the color palette and typography system"
                caption="Refined UI screens · color palette and typography system"
                width={1806}
                height={1408}
              />
            </section>

            <section id="fx-features" aria-labelledby="fx-features-heading" className="scroll-mt-28">
              <h2 id="fx-features-heading" className="font-display text-xl font-semibold text-ink md:text-2xl">
                Key Features
              </h2>
              <BulletList items={d.keyFeaturesBullets} className="mt-5 max-w-[65ch]" />
            </section>

            <section
              id="fx-prototype"
              aria-labelledby="fx-prototype-heading"
              className="scroll-mt-28 border-t border-line pt-12 md:pt-14"
            >
              <h2 id="fx-prototype-heading" className="font-display text-xl font-semibold text-ink md:text-2xl">
                Final Prototype
              </h2>
              <p className="mt-5 max-w-[65ch] text-base leading-relaxed text-muted">{d.finalPrototypeBody}</p>
              <CaseImage
                src="/projects/finexa-final-prototypes.png"
                alt="Row of final Finexa prototype screens: chat, AI chatbot, onboarding, home, statistics, contacts, and receipt"
                caption="Final prototype · complete screen flow"
                width={1092}
                height={553}
              />
            </section>
          </div>
        </div>
      </div>
    </article>
  );
}
