/// <reference types="vitest" />
import react from "@vitejs/plugin-react"
import path, { resolve } from "path"
import { defineConfig } from "vite"
import dts from "vite-plugin-dts"
import { libInjectCss } from "vite-plugin-lib-inject-css"
import { peerDependencies } from "./package.json"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    libInjectCss(),
    ...(process.env.BUILD_TYPES
      ? [
          dts({
            include: ["lib"],
            exclude: ["**/*.stories.tsx"],
            rollupTypes: true,
            bundledPackages: ["class-variance-authority"],
          }),
        ]
      : []),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./lib"),
    },
  },
  build: {
    lib: {
      entry: {
        ["factorial-one"]: resolve(__dirname, "lib/factorial-one.ts"),
      },
      fileName: (_, entryName) => {
        return `${entryName}.js`
      },
      formats: ["es"],
    },
    copyPublicDir: false,
    rollupOptions: {
      external: [...Object.keys(peerDependencies), "react/jsx-runtime"],
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
