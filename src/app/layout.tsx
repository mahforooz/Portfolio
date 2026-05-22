import type { Metadata } from "next";
import { DM_Sans, Syne } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { Footer } from "@/components/Footer";
import { PageTransition } from "@/components/PageTransition";

const display = Syne({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const sans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Mahtab Foroozandeh, Interaction Design",
    template: "%s, Mahtab Foroozandeh",
  },
  description:
    "Interaction Design student exploring HCI, immersive environments, and human-centered technology.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body className="relative flex min-h-screen flex-col">
        <a
          href="#main-content"
          className="fixed left-4 top-4 z-[100] -translate-y-24 rounded-md bg-ink px-3 py-2 text-sm font-medium text-white opacity-0 transition focus:translate-y-0 focus:opacity-100 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-accent"
        >
          Skip to content
        </a>
        <SiteHeader />
        <PageTransition>
          <main
            id="main-content"
            className="relative z-10 flex-1 text-[#141414]"
            style={{ color: "#141414" }}
          >
            {children}
          </main>
        </PageTransition>
        <Footer />
      </body>
    </html>
  );
}
