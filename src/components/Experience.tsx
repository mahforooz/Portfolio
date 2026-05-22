import { experienceEntries } from "@/data/experience";

export function Experience() {
  return (
    <section aria-labelledby="experience-heading">
      <h2
        id="experience-heading"
        className="font-display text-xl font-semibold text-ink md:text-2xl"
      >
        Experience
      </h2>
      <ol className="mt-10 list-none space-y-10 border-t border-line pt-10">
        {experienceEntries.map((job) => (
          <li key={job.id}>
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <p className="text-lg font-medium text-[#008080] md:text-xl">
                {job.title}
              </p>
              <p className="text-xs text-muted-2">
                {job.dateRange}
                <span className="mx-2 text-line">·</span>
                {job.durationLabel}
              </p>
            </div>
            <p className="mt-2 text-sm text-ink">
              {job.company}
              <span className="text-muted"> · </span>
              {job.employmentType}
            </p>
            <p className="mt-1 text-sm text-muted">
              {job.location}
              <span className="opacity-80"> · </span>
              {job.workMode}
            </p>
            {job.description ? (
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted">
                {job.description}
              </p>
            ) : null}
            {job.skillsHighlight ? (
              <p className="mt-3 text-sm text-muted">{job.skillsHighlight}</p>
            ) : null}
          </li>
        ))}
      </ol>
    </section>
  );
}
