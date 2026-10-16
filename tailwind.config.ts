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
        cream: "#F3EEE4",
        ivory: "#FAF7F1",
        sand: "#E6DCCB",
        ink: "#14110E",
        muted: "#5C564E",
        stone: "#8A8378",
        gold: "#B08A2C",
        "gold-soft": "#C9A85A",
        "gold-deep": "#8A6A1C",
        espresso: "#1B1713",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "ui-serif", "Georgia", "serif"],
      },
      maxWidth: {
        page: "1440px",
        copy: "40rem",
      },
      letterSpacing: {
        kicker: "0.18em",
      },
      transitionTimingFunction: {
        apple: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      boxShadow: {
        soft: "0 30px 80px -40px rgba(20, 17, 14, 0.35)",
      },
    },
  },
  plugins: [],
};

export default config;
