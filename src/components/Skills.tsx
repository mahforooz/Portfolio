import { skillCategories } from "@/data/skills";

export function Skills() {
  return (
    <section aria-labelledby="skills-heading" className="w-full">
      <h2
        id="skills-heading"
        className="font-display text-xl font-semibold text-ink md:text-2xl"
      >
        Skills &amp; Expertise
      </h2>

      <div className="mt-10 border-t border-line">
        {skillCategories.map((category, index) => (
          <div
            key={category.id}
            className={`py-8 ${index > 0 ? "border-t border-line" : ""}`}
          >
            <div className="flex items-center gap-3">
              <span className="h-px w-8 shrink-0 bg-[#008080]" aria-hidden />
              <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-[#008080]">
                {category.label}
              </h3>
            </div>
            <ul className="mt-5 list-none space-y-2.5 pl-11">
              {category.skills.map((skill) => (
                <li key={skill} className="text-sm leading-snug text-ink">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
