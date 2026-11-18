import { CinematicHero } from "@/components/CinematicHero";
import { Education } from "@/components/Education";
import { Experience } from "@/components/Experience";
import { Reveal } from "@/components/Reveal";
import { Skills } from "@/components/Skills";
import { RESUME_HREF, RESUME_LABEL } from "@/data/site";

export default function HomePage() {
  return (
    <>
      <CinematicHero />

      <section
        id="about"
        className="layout-section-y scroll-mt-20 border-t border-line bg-base"
        aria-labelledby="about-heading"
      >
        <div className="layout-page">
          <Reveal>
            <h2
              id="about-heading"
              className="font-display text-hero font-semibold text-ink"
            >
              About
            </h2>
          </Reveal>

          <p
            className="mt-6 max-w-[65ch] text-sm leading-relaxed text-black md:text-base"
            style={{ color: "#141414" }}
          >
            I study how people think, decide and learn when interacting with AI and immersive technologies. My current research examines cognitive offloading to AI chatbots and its effect on memory, understanding and critical thinking, with the aim of designing interactions that support human thinking rather than replace it. I&apos;m also interested in XR and tangible interaction as ways to study embodied and emotional experience.
          </p>

          <div className="mt-14 lg:mt-16 lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(240px,300px)] lg:items-start lg:gap-x-14 xl:gap-x-20">
            <div className="min-w-0 space-y-16 md:space-y-20">
              <Reveal>
                <Education />
              </Reveal>
              <Reveal>
                <Experience />
              </Reveal>
            </div>

            <Reveal className="mt-16 lg:mt-0">
              <aside>
                <Skills />
              </aside>
            </Reveal>
          </div>

          <Reveal className="mt-14 border-t border-line pt-10 md:mt-16">
            <p className="text-sm font-medium uppercase tracking-wider text-[#008080]">
              CV
            </p>
            <a
              href={RESUME_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring mt-3 inline-block text-base font-medium text-ink underline-offset-4 transition-colors hover:text-[#008080] hover:underline md:text-lg"
            >
              {RESUME_LABEL}
            </a>
          </Reveal>
        </div>
      </section>
    </>
  );
}
