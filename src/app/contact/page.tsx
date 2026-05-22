import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { RESUME_HREF, RESUME_LABEL } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Open to volunteer research assistant opportunities and interdisciplinary projects.",
};

const TEAL = "#008080";

function IconCircle({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full"
      style={{ backgroundColor: "rgba(0, 128, 128, 0.12)" }}
    >
      {children}
    </span>
  );
}

function MailIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
    >
      <path
        d="M4 6.5A2.5 2.5 0 0 1 6.5 4h11A2.5 2.5 0 0 1 20 6.5v11a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 4 17.5v-11Z"
        stroke={TEAL}
        strokeWidth="1.5"
      />
      <path
        d="m5 7.5 7 5 7-5"
        stroke={TEAL}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
    >
      <rect
        x="4"
        y="4"
        width="16"
        height="16"
        rx="3"
        stroke={TEAL}
        strokeWidth="1.5"
      />
      <path
        d="M8 11v5M8 8v.01M12 16v-3.5c0-1.1.9-2 2-2s2 .9 2 2V16"
        stroke={TEAL}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function DesignIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
    >
      <path
        d="M12 3 4 9l8 12 8-12-8-6Z"
        stroke={TEAL}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M4 9h16"
        stroke={TEAL}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
    >
      <path
        d="M12 4v10m0 0 4-4m-4 4-4-4"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 18h14"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ContactLinkCard({
  href,
  label,
  detail,
  icon,
  external = false,
}: {
  href: string;
  label: string;
  detail: string;
  icon: React.ReactNode;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="group focus-ring flex w-full items-center gap-4 rounded-2xl border border-line bg-white p-5 text-[#141414] shadow-sm transition hover:border-[#008080]/30 hover:shadow-md"
      style={{ color: "#141414" }}
    >
      <IconCircle>{icon}</IconCircle>
      <div className="min-w-0 text-left">
        <p
          className="text-base font-semibold md:text-lg"
          style={{ color: "#141414" }}
        >
          {label}
        </p>
        <p
          className="mt-0.5 text-sm font-medium underline-offset-4 transition-colors group-hover:text-[#008080] group-hover:underline md:text-base"
          style={{ color: "#2A2A2A" }}
        >
          {detail}
        </p>
      </div>
    </a>
  );
}

export default function ContactPage() {
  return (
    <div className="border-b border-line bg-base">
      <div className="layout-page layout-page-top flex min-h-[70vh] flex-col items-center justify-center pb-24 pt-16 md:pb-28 md:pt-20">
        <Reveal className="w-full max-w-lg text-center">
          <h1 className="font-display text-[clamp(2rem,5vw,2.75rem)] font-semibold tracking-tight text-ink">
            Let&apos;s Connect
          </h1>
          <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-muted md:text-lg">
            Currently open to research collaborations, volunteer research
            opportunities, and interdisciplinary creative technology projects.
          </p>
        </Reveal>

        <Reveal className="mt-10 w-full max-w-lg space-y-4">
          <ContactLinkCard
            href="mailto:mahforooz81@gmail.com"
            label="Email"
            detail="mahforooz81@gmail.com"
            icon={<MailIcon />}
          />

          <ContactLinkCard
            href="https://www.linkedin.com/in/mahtab-foroozandeh/"
            label="LinkedIn"
            detail="Connect professionally"
            icon={<LinkedInIcon />}
            external
          />

          <ContactLinkCard
            href="https://mahtabportfolio.framer.website"
            label="Design works"
            detail="Additional selected works and visual explorations"
            icon={<DesignIcon />}
            external
          />
        </Reveal>

        <Reveal className="mt-6 w-full max-w-lg">
          <a
            href={RESUME_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring flex w-full items-center justify-center gap-2.5 rounded-2xl px-6 py-4 text-base font-semibold text-white transition hover:opacity-90 md:text-lg"
            style={{ backgroundColor: TEAL }}
          >
            <DownloadIcon />
            {RESUME_LABEL}
          </a>
        </Reveal>
      </div>
    </div>
  );
}
