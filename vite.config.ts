import react from "@vitejs/plugin-react-swc";
import * as path from "path";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    react(),
  ],
  build: {
    outDir: "dist",
  },
  // base: "/bzd/",
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
  },
  server: {
    port: 9094,
    open: true,
  },
  preview: {
    port: 8084,
    open: true,
  },
});
