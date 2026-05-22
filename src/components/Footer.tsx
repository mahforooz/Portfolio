import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-line bg-base">
      <div className="layout-page flex flex-col gap-6 py-12 md:flex-row md:items-center md:justify-between">
        <p className="text-sm text-muted">
          <Link
            href="/"
            className="focus-ring rounded-sm font-medium text-ink transition hover:text-accent"
          >
            Mahtab Foroozandeh
          </Link>
          {" · "}Interaction design
        </p>
        <nav
          className="flex flex-wrap gap-x-8 gap-y-3 text-sm text-muted"
          aria-label="Footer"
        >
          <Link className="focus-ring rounded-sm hover:text-ink" href="/about">
            About
          </Link>
          <Link
            className="focus-ring rounded-sm hover:text-ink"
            href="/projects"
          >
            Projects
          </Link>
          <Link
            className="focus-ring rounded-sm hover:text-ink"
            href="/research"
          >
            Research
          </Link>
          <Link
            className="focus-ring rounded-sm hover:text-ink"
            href="/contact"
          >
            Contact
          </Link>
        </nav>
      </div>
    </footer>
  );
}
