import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        court: {
          bg: "#080b12",
          panel: "#101726",
          panelSoft: "#151e31",
          line: "#26324a",
          accent: "#5da9ff",
          success: "#45d483",
          danger: "#ff6f6f",
          warning: "#ffb454"
        }
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(93,169,255,0.35), 0 8px 30px rgba(0,0,0,0.45)"
      }
    }
  },
  plugins: []
};

export default config;
