import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import copy from "rollup-plugin-copy";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    copy({
      targets: [
        // { src: "src/assets/*", dest: "dist/assets" },
        { src: "data.json", dest: "dist" },
      ],
      verbose: true,
      copyOnce: true,
    }),
  ],
});
