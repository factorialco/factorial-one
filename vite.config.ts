/// <reference types="vitest" />
import react from "@vitejs/plugin-react"
import path, { resolve } from "path"
import { defineConfig } from "vite"
import dts from "vite-plugin-dts"
import { libInjectCss } from "vite-plugin-lib-inject-css"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    libInjectCss(),
    ...(process.env.BUILD_TYPES
      ? [
          dts({
            include: ["lib", "src"],
            exclude: ["**/*.stories.tsx"],
            rollupTypes: true,
          }),
        ]
      : []),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./lib"),
      "~": path.resolve(__dirname, "./"),
    },
  },
  build: {
    lib: {
      entry: {
        ["factorial-one"]: resolve(__dirname, "lib/factorial-one.ts"),
        ["experimental"]: resolve(__dirname, "lib/experimental/exports.ts"),
      },
      fileName: (_, entryName) => {
        return `${entryName}.js`
      },
      formats: ["es"],
    },
    outDir: "dist/lib",
    copyPublicDir: false,
    rollupOptions: {
      external: ["react/jsx-runtime", "react", "react-dom"],
      maxParallelFileOps: 100, // Workaround to fix rebuild https://github.com/vitejs/vite/issues/19410#issuecomment-2661835482
      output: {
        globals: {
          react: "React",
        },
      },
    },
  },
  test: {
    environment: "jsdom",
    setupFiles: ["./vitest.setup.ts"],
  },
})
