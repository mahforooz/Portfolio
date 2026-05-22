import Link from "next/link";

export default function NotFound() {
  return (
    <div className="layout-page layout-page-top pb-24">
      <p className="text-xs font-medium uppercase tracking-wider text-muted-2">
        404
      </p>
      <h1 className="font-display mt-3 text-hero font-semibold text-ink">
        Page not found
      </h1>
      <p className="layout-prose mt-4 text-sm">
        This page doesn&apos;t exist or has moved.
      </p>
      <Link
        href="/"
        className="focus-ring mt-10 inline-flex rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-white transition hover:opacity-90"
      >
        Back to home
      </Link>
    </div>
  );
}
