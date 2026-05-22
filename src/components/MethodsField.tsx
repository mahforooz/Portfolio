const groups: {
  id: string;
  label: string;
  items: string[];
  accent: string;
}[] = [
  {
    id: "research",
    label: "Research",
    items: [
      "User Interviews",
      "Heuristic Evaluation",
      "Journey Mapping",
      "Co-design",
      "Usability Testing",
    ],
    accent: "bg-[#E6F2F0] border-[#E7E5E4]",
  },
  {
    id: "design",
    label: "Design",
    items: [
      "Figma",
      "Service Design",
      "Prototyping",
      "Information Architecture",
    ],
    accent: "bg-[#E8F4F4] border-[#E7E5E4]",
  },
  {
    id: "technical",
    label: "Technical",
    items: [
      "Python",
      "Processing",
      "Unity",
      "Arduino",
      "Firebase",
      "HTML / CSS / JS",
    ],
    accent: "bg-[#E8F0F0] border-[#E7E5E4]",
  },
];

export function MethodsField() {
  return (
    <div>
      <h2 className="research-section-title font-display text-xl font-semibold md:text-2xl">
        Methods &amp; tools
      </h2>
      <p className="mt-2 max-w-xl text-sm" style={{ color: "#141414" }}>
        Toolkit refined through studio work and coursework.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {groups.map((g) => (
          <div key={g.id} className={`rounded-xl border p-6 ${g.accent}`}>
            <p
              data-muted="true"
              className="text-sm font-medium uppercase tracking-wide md:text-base"
              style={{ color: "#8A8580" }}
            >
              {g.label}
            </p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {g.items.map((item) => (
                <li key={item} style={{ color: "#141414" }}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
