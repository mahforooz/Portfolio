import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        base: "#FAFAF9",
        surface: "#F3F2EF",
        "surface-2": "#EEEDEA",
        ink: "#141414",
        muted: "#5C5C5C",
        "muted-2": "#8A8580",
        accent: "#069494",
        "accent-muted": "#0AA8A8",
        "accent-soft": "#E5F5F5",
        "accent-dim": "rgba(6, 148, 148, 0.12)",
        "blue-soft": "#E8F4F4",
        sage: "#E6F2F0",
        lavender: "#E8F0F0",
        "warm-gray": "#F5F4F1",
        line: "#E7E5E4",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
      },
      fontSize: {
        mega: [
          "clamp(3rem, 11vw, 7.25rem)",
          { lineHeight: "0.96", letterSpacing: "-0.03em" },
        ],
        display: [
          "clamp(2.25rem, 5vw, 3.75rem)",
          { lineHeight: "1.08", letterSpacing: "-0.025em" },
        ],
        hero: [
          "clamp(1.875rem, 3.5vw, 2.75rem)",
          { lineHeight: "1.12", letterSpacing: "-0.02em" },
        ],
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
      },
      maxWidth: {
        content: "72rem",
        narrow: "40rem",
        editorial: "65rem",
      },
      transitionDuration: {
        400: "400ms",
      },
      keyframes: {
        "glow-breathe": {
          "0%, 100%": { opacity: "0.72" },
          "50%": { opacity: "1" },
        },
      },
      animation: {
        "glow-breathe": "glow-breathe 14s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
