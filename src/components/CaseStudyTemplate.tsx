import type { Project } from "@/data/projects";
import { EndlessJourneyCaseStudy } from "./EndlessJourneyCaseStudy";
import { FTSPCaseStudy } from "./FTSPCaseStudy";
import { HealthSyncCaseStudy } from "./HealthSyncCaseStudy";
import { PersustainCaseStudy } from "./PersustainCaseStudy";
import { Tag } from "./Tag";

const sectionOrder = [
  { key: "problem" as const, title: "Problem" },
  { key: "process" as const, title: "Process" },
  { key: "keyInsights" as const, title: "Key Insights" },
  { key: "designDevelopment" as const, title: "Design / Development" },
  { key: "finalOutcome" as const, title: "Final Outcome" },
  { key: "reflection" as const, title: "Reflection" },
];

type CaseStudyTemplateProps = {
  project: Project;
};

export function CaseStudyTemplate({ project }: CaseStudyTemplateProps) {
  if (project.slug === "persustain-ai") {
    return <PersustainCaseStudy project={project} />;
  }

  if (project.slug === "the-endless-journey") {
    return <EndlessJourneyCaseStudy project={project} />;
  }

  if (project.slug === "healthsync-ai") {
    return <HealthSyncCaseStudy project={project} />;
  }

  if (project.slug === "financial-transition-support-program-ftsp") {
    return <FTSPCaseStudy project={project} />;
  }

  return (
    <article className="layout-page layout-page-top pb-28">
      <header className="border-b border-line pb-12 md:pb-14">
        <p className="text-xs font-medium uppercase tracking-wider text-muted-2">
          Case study
        </p>
        <h1 className="font-display mt-4 text-display font-semibold text-ink">
          {project.title}
        </h1>
        <div className="mt-6 flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>
        <p className="mt-8 max-w-3xl text-base leading-relaxed text-muted md:text-lg">
          {project.summary}
        </p>
      </header>

      <div className="mt-14 grid gap-14 lg:grid-cols-3 lg:gap-16">
        <div className="space-y-10 lg:col-span-2">
          <section aria-labelledby="overview-heading">
            <h2
              id="overview-heading"
              className="text-sm font-semibold text-ink"
            >
              Overview
            </h2>
            <p className="mt-3 text-base leading-relaxed text-muted">
              {project.overview}
            </p>
          </section>
          <section aria-labelledby="role-heading">
            <h2 id="role-heading" className="text-sm font-semibold text-ink">
              My role
            </h2>
            <p className="mt-3 text-base leading-relaxed text-muted">
              {project.myRole}
            </p>
          </section>
          <section aria-labelledby="research-heading">
            <h2
              id="research-heading"
              className="text-sm font-semibold text-ink"
            >
              Research / design process
            </h2>
            <p className="mt-3 text-base leading-relaxed text-muted">
              {project.researchProcess}
            </p>
          </section>
        </div>

        <aside className="lg:col-span-1">
          <div className="sticky top-28 rounded-2xl border border-line bg-surface p-6 shadow-sm">
            <p className="text-xs font-medium text-muted-2">Preview</p>
            <div className="mt-4 aspect-[4/3] w-full rounded-lg border border-dashed border-line bg-white">
              <div className="flex h-full items-center justify-center p-4 text-center text-xs text-muted-2">
                Add images or embeds
              </div>
            </div>
          </div>
        </aside>
      </div>

      <div className="mt-20 space-y-16">
        {sectionOrder.map((s, index) => (
          <section
            key={s.key}
            aria-labelledby={`section-${s.key}`}
            className="max-w-3xl border-t border-line pt-12 first:border-0 first:pt-0"
          >
            <p className="text-xs font-medium text-muted-2">
              {String(index + 1).padStart(2, "0")}
            </p>
            <h2
              id={`section-${s.key}`}
              className="font-display mt-2 text-xl font-semibold text-ink md:text-2xl"
            >
              {s.title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted">
              {project.sections[s.key]}
            </p>
          </section>
        ))}
      </div>
    </article>
  );
}
