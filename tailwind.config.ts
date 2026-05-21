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
        /** ~60% — primary brand */
        navy: "#1A3B5D",
        /** Brand accent #C5226F — CTA fill only (.btn-cta: white text on accent). */
        accent: "#C5226F",
        /** ~30% — light areas (pure white + subtle tint for separation) */
        surface: "#FFFFFF",
        surfaceMuted: "#F4F6F8",
        /** Supporting text — same hue family as navy, lighter than main */
        muted: "#3A5670",
      },
      fontFamily: {
        sans: ["var(--font-plus-jakarta)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 12px 40px -12px rgba(26, 59, 93, 0.22)",
        soft: "0 4px 24px -8px rgba(26, 59, 93, 0.14)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "200% 0" },
          "100%": { backgroundPosition: "-200% 0" },
        },
        "wa-pulse": {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(37, 211, 102, 0.45)" },
          "50%": { boxShadow: "0 0 0 12px rgba(37, 211, 102, 0)" },
        },
      },
      animation: {
        marquee: "marquee 40s linear infinite",
        float: "float 3s ease-in-out infinite",
        shimmer: "shimmer 2.5s linear infinite",
        "wa-pulse": "wa-pulse 2.2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
