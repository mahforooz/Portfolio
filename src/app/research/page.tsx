import type { Metadata } from "next";
import { ResearchMap } from "@/components/ResearchMap";
import { MethodsField } from "@/components/MethodsField";

const questions = [
  "How do immersive environments shape attention, emotion, and interaction?",
  "How can digital systems become more intuitive and human-centered?",
  "How might spatial interfaces change the way people understand information?",
  "How can design research support more meaningful emerging technology experiences?",
];

export const metadata: Metadata = {
  title: "Research",
  description:
    "Research interests in HCI, UX research, XR, AI, and interactive systems.",
};

export default function ResearchPage() {
  return (
    <div id="research-page" className="text-black">
      <section className="border-b border-line bg-[#FAFAF9]">
        <div className="layout-page layout-page-top pb-16 md:pb-20 lg:pb-24">
          <p
            data-muted="true"
            className="text-xs font-medium uppercase tracking-wider"
            style={{ color: "#8A8580" }}
          >
            Research
          </p>
          <h1
            className="font-display mt-3 text-[clamp(2.75rem,6vw,4.5rem)] font-semibold leading-tight tracking-tight"
            style={{ color: "#141414" }}
          >
            Interests
          </h1>
          <p
            className="mt-5 max-w-[65ch] text-sm leading-relaxed md:text-base"
            style={{ color: "#141414" }}
          >
            People, digital systems, immersive environments, and emerging
            technologies.
          </p>

          <div className="mt-12">
            <ResearchMap />
          </div>

          <div className="mt-16 grid gap-12 border-t border-line pt-16 md:grid-cols-2 md:gap-14">
            <div>
              <h2 className="research-section-title font-display text-xl font-semibold md:text-2xl">
                Statement
              </h2>
              <p
                className="mt-4 text-sm leading-relaxed md:text-base"
                style={{ color: "#141414" }}
              >
                I&apos;m interested in how people experience digital systems,
                immersive environments, and emerging technologies, especially
                HCI, interactive systems, and cognition in digital experiences.
              </p>
            </div>
            <div>
              <h2 className="research-section-title font-display text-xl font-semibold md:text-2xl">
                Current exploration
              </h2>
              <p
                className="mt-4 text-sm leading-relaxed md:text-base"
                style={{ color: "#141414" }}
              >
                How immersive digital environments influence emotional
                engagement, interaction, and user experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-[#FAFAF9]">
        <div className="layout-page layout-section-y">
          <h2
            className="font-display text-[clamp(2.25rem,5vw,3.75rem)] font-semibold leading-tight tracking-tight"
            style={{ color: "#141414" }}
          >
            Questions
          </h2>
          <ul className="mt-8 space-y-5 text-sm leading-relaxed md:text-base">
            {questions.map((q) => (
              <li
                key={q}
                className="flex gap-3 border-l-2 border-[#069494]/30 pl-5"
                style={{ color: "#141414" }}
              >
                {q}
              </li>
            ))}
          </ul>

          <div className="mt-20">
            <MethodsField />
          </div>
        </div>
      </section>
    </div>
  );
}
