import { experienceGroups, recognitionEntries } from "@/data/experience";

export function Experience() {
  return (
    <section aria-labelledby="experience-heading">
      <h2
        id="experience-heading"
        className="font-display text-xl font-semibold text-ink md:text-2xl"
      >
        Experience
      </h2>

      <div className="mt-10 space-y-14 border-t border-line pt-10">
        {experienceGroups.map((group) => (
          <div key={group.id}>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 shrink-0 bg-[#008080]" aria-hidden />
              <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-[#008080]">
                {group.label}
              </h3>
            </div>
            <ol className="mt-8 list-none space-y-10">
              {group.entries.map((job) => (
                <li key={job.id}>
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                    <p className="text-lg font-medium text-[#008080] md:text-xl">
                      {job.title}
                    </p>
                    <p className="shrink-0 text-xs text-muted-2">
                      {job.dateRange}
                    </p>
                  </div>
                  <p className="mt-2 text-sm text-ink">
                    {job.company}
                    {job.context ? (
                      <>
                        <span className="text-muted"> · </span>
                        <span className="text-muted">{job.context}</span>
                      </>
                    ) : null}
                  </p>
                  {job.supervisor ? (
                    <p className="mt-1 text-sm text-muted">{job.supervisor}</p>
                  ) : null}
                  {job.highlights?.length ? (
                    <ul className="mt-4 max-w-2xl list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted marker:text-[#008080]">
                      {job.highlights.map((h) => (
                        <li key={h}>{h}</li>
                      ))}
                    </ul>
                  ) : null}
                </li>
              ))}
            </ol>
          </div>
        ))}

        <div>
          <div className="flex items-center gap-3">
            <span className="h-px w-8 shrink-0 bg-[#008080]" aria-hidden />
            <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-[#008080]">
              Exhibition &amp; Service
            </h3>
          </div>
          <ul className="mt-8 list-none space-y-8">
            {recognitionEntries.map((r) => (
              <li key={r.id}>
                <p className="text-xs font-medium uppercase tracking-wider text-muted-2">
                  {r.label}
                </p>
                <p className="mt-1 text-base font-medium text-ink">{r.title}</p>
                <p className="mt-1 max-w-2xl text-sm leading-relaxed text-muted">
                  {r.detail}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
