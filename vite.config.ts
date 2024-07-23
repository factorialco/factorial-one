/// <reference types="vitest" />
import react from "@vitejs/plugin-react"
import path, { resolve } from "path"
import { defineConfig } from "vite"
import dts from "vite-plugin-dts"
import { libInjectCss } from "vite-plugin-lib-inject-css"
import svgr from "vite-plugin-svgr"
import { peerDependencies } from "./package.json"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr({
      svgrOptions: {
        ref: true,
        memo: true,
        svgo: true,
        replaceAttrValues: {
          "#FF355E": "currentColor",
          "#515164": "currentColor",
        },
      },
    }),
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
      entry: resolve(__dirname, "lib/main.ts"),
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
