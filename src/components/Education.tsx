import { educationEntries } from "@/data/education";

export function Education() {
  return (
    <section aria-labelledby="education-heading">
      <h2
        id="education-heading"
        className="font-display text-xl font-semibold text-ink md:text-2xl"
      >
        Education
      </h2>
      <ol className="mt-10 list-none space-y-10 border-t border-line pt-10">
        {educationEntries.map((entry) => (
          <li key={entry.id}>
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <p className="font-medium text-[#008080]">{entry.title}</p>
              <p className="text-xs text-muted-2">{entry.dateRange}</p>
            </div>
            <p className="mt-2 text-sm text-ink">{entry.institution}</p>
            {entry.details ? (
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted">
                {entry.details}
              </p>
            ) : null}
          </li>
        ))}
      </ol>
    </section>
  );
}
