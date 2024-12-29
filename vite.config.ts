import { defineConfig } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [
    react({
      babel: {
        presets: ["jotai/babel/preset"],
      },
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, "lib/main.ts"),
      name: "fhirpath-jotai",
      fileName: (format) => `fhirpath-jotai.${format}.js`,
    },
    rollupOptions: {
      external: ["react"],
      output: {
        globals: {
          react: "React",
        },
      },
    },
  },
});
