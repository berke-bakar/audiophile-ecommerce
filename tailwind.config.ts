import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./sanity/schemaTypes/**.tsx",
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
    },
  },
  plugins: [],
  safelist: [],
};
export default config;
