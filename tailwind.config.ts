import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FAF8F5",
        "background-alt": "#F5F0E8",
        foreground: "#1C1917",
        muted: "#6B5B4F",
        accent: "#8B7355",
        "accent-soft": "#C4B5A0",
        warm: "#E8DFD4",
        border: "#E8E2DA",
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-source-sans)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        container: "1200px",
      },
      boxShadow: {
        "elevation-1":
          "0 2px 4px rgba(28,25,23,0.06), 0 4px 8px rgba(28,25,23,0.04)",
        "elevation-2":
          "0 8px 24px rgba(28,25,23,0.08), 0 4px 12px rgba(28,25,23,0.04)",
        "elevation-3":
          "0 16px 48px rgba(28,25,23,0.12), 0 8px 24px rgba(28,25,23,0.06)",
        "elevation-hover":
          "0 24px 56px rgba(28,25,23,0.14), 0 12px 28px rgba(28,25,23,0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
