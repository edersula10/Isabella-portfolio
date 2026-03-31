import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: "#0C2418",
          secondary: "#0E2A1C",
          elevated: "#14432A",
        },
        text: {
          primary: "#E0EDE6",
          secondary: "#8AAFA0",
          muted: "#5A8A6E",
        },
        accent: "#2EAD5E",
        "accent-hover": "#3CC46F",
        "accent-secondary": "#E8638B",
        "accent-secondary-hover": "#F07BA0",
        border: "rgba(46, 173, 94, 0.15)",
      },
      fontFamily: {
        sans: ["var(--font-cormorant)", "Georgia", "serif"],
        display: ["var(--font-cormorant)", "Georgia", "serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      fontSize: {
        "display-xl": ["clamp(3rem, 8vw, 7rem)", { lineHeight: "0.95", letterSpacing: "-0.03em" }],
        "display-lg": ["clamp(2.5rem, 6vw, 5rem)", { lineHeight: "0.95", letterSpacing: "-0.02em" }],
        "display-md": ["clamp(1.75rem, 3.5vw, 3rem)", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "display-sm": ["clamp(1.25rem, 2vw, 1.75rem)", { lineHeight: "1.15", letterSpacing: "-0.01em" }],
        "body-lg": ["1.125rem", { lineHeight: "1.7" }],
        "body": ["1rem", { lineHeight: "1.7" }],
        "body-sm": ["0.875rem", { lineHeight: "1.6" }],
        "caption": ["0.75rem", { lineHeight: "1.5", letterSpacing: "0.08em" }],
      },
      spacing: {
        "section": "clamp(8rem, 15vw, 13rem)",
        "section-sm": "clamp(5rem, 10vw, 8rem)",
      },
      maxWidth: {
        container: "1200px",
        content: "720px",
      },
      transitionTimingFunction: {
        premium: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "line-grow": {
          "0%": { scaleX: "0" },
          "100%": { scaleX: "1" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "line-grow": "line-grow 1s cubic-bezier(0.16, 1, 0.3, 1) forwards",
      },
    },
  },
  plugins: [],
};
export default config;
