type SectionHeaderProps = {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  align?: "left" | "center";
  dark?: boolean;
};

export function SectionHeader({
  title,
  subtitle,
  eyebrow,
  align = "left",
  dark = false,
}: SectionHeaderProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "";
  const titleColor = dark ? "text-white" : "text-ink";
  const subColor = dark ? "text-zinc-400" : "text-muted";

  return (
    <header className={`max-w-2xl space-y-3 ${alignClass}`}>
      {eyebrow ? (
        <p
          className={`text-[11px] font-semibold uppercase tracking-[0.2em] ${
            dark ? "text-zinc-500" : "text-muted"
          }`}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2 className={`font-semibold text-hero ${titleColor}`}>{title}</h2>
      {subtitle ? (
        <p className={`text-base leading-relaxed md:text-lg ${subColor}`}>
          {subtitle}
        </p>
      ) : null}
    </header>
  );
}
