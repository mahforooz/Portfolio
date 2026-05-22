import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { EditorialProjectShowcase } from "@/components/projects/EditorialProjectShowcase";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Case studies: healthcare AI, service design, immersive narrative, sustainability, visualization.",
};

export default function ProjectsPage() {
  return (
    <div className="border-b border-line bg-base">
      <div className="layout-page layout-page-top pb-24 md:pb-28">
        <header className="max-w-2xl">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-wider text-muted-2">
              Selected work
            </p>
            <h1 className="font-display mt-3 text-display font-semibold text-ink">
              Projects
            </h1>
            <p className="layout-prose mt-5 text-sm md:text-base">
              Case studies from coursework and collaborations. Replace
              placeholders with images and artifacts when ready.
            </p>
          </Reveal>
        </header>

        <div className="mt-14 flex flex-col gap-10 md:mt-18 md:gap-12">
          {projects.map((p, i) => (
            <Reveal key={p.slug}>
              <EditorialProjectShowcase project={p} index={i} />
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
