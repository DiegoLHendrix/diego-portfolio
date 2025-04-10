// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./index.html", // Add your main HTML file for Tailwind to scan
    "./src/**/*.{html,js,jsx,ts,tsx}", // Ensure Tailwind scans all files within the src folder
  ],
  darkMode: "class", // Enable dark mode with the class strategy
  theme: {
    extend: {
      colors: {
        primaryBlue: "rgb(2 117 216)", // Main color of blue
      },
    },
  },
  plugins: [],
};

export default config;
