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
        "primary-dark": "#d87d4a",
        "primary-light": "#fbaf85",
        "slate-dark": "#101010",
        "slate-medium": "#f1f1f1",
        "slate-light": "#fafafa",
      },
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
      },
      backgroundImage: {
        "hero-lg": "url('/assets/hero-desktop.jpg')",
        "hero-md": "url('/assets/hero-tablet.jpg')",
        hero: "url('/assets/hero-sm.jpg')",
      },
    },
  },
  plugins: [],
};
export default config;
