import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        base: {
          light: "#f8fafc", // slate-50
          dark: "#020617", // slate-950
        },
        accent: {
          DEFAULT: "#38bdf8", // soft blue
          muted: "#2dd4bf", // teal
        },
      },
    },
  },
  plugins: [],
};

export default config;
