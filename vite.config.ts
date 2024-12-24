import { defineConfig } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react";

export default defineConfig(({ command }) => {
  const isProduction = command === "build";

  if (isProduction) {
    // Library build configuration
    return {
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
    };
  }

  // Development/demo configuration
  return {
    plugins: [react()],
    server: {
      open: true, // automatically open browser
    },
  };
});
