import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "About",
  description:
    "Interaction Design student at Emily Carr, HCI, immersive systems, and research.",
};

export default function AboutPage() {
  return (
    <div className="border-b border-line bg-base">
      <div className="layout-page layout-page-top pb-24">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-wider text-muted-2">
            About
          </p>
          <h1 className="font-display mt-3 text-display font-semibold text-ink">
            Profile
          </h1>
          <p className="layout-prose mt-8 text-sm md:text-base">
            I&apos;m an Interaction Design student at Emily Carr University of
            Art + Design. My work sits at the intersection of UX research,
            immersive and interactive systems, and emerging technology, always
            with a focus on how people experience digital products and
            environments.
          </p>
        </Reveal>
        <Reveal className="mt-12 flex flex-wrap gap-4">
          <Link
            href="/contact"
            className="focus-ring inline-flex rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-white transition hover:opacity-90"
          >
            Get in touch
          </Link>
          <Link
            href="/projects"
            className="focus-ring inline-flex rounded-full border border-line bg-white px-5 py-2.5 text-sm font-medium text-ink shadow-sm transition hover:border-accent/30 hover:text-accent"
          >
            View projects
          </Link>
        </Reveal>
      </div>
    </div>
  );
}
