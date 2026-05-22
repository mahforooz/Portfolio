type TagProps = {
  children: React.ReactNode;
  variant?: "default" | "dark";
};

const variants = {
  default:
    "border-line bg-surface text-muted border",
  dark: "border-white/15 bg-white/10 text-zinc-200 border",
};

export function Tag({ children, variant = "default" }: TagProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs ${variants[variant]}`}
    >
      {children}
    </span>
  );
}
