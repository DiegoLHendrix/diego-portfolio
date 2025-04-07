// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./index.html", // Add your main HTML file for Tailwind to scan
    "./src/**/*.{html,js,jsx,ts,tsx}", // Ensure Tailwind scans all files within the src folder
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary-color)",
      },
    },
  },
  plugins: [],
};

export default config;
