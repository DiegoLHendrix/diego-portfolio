import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: 5173,
    strictPort: true,
    https: false, // Enables HTTPS locally
  },
  base: "/", // Ensures routing works properly in production
  build: {
    outDir: "dist", // Ensures build output goes to 'dist'
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"), // Entry point for the app
      },
    },
  },
});
