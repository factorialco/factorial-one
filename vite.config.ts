/// <reference types="vitest" />
import react from "@vitejs/plugin-react"
import { readdirSync } from "fs"
import path, { resolve } from "path"
import { defineConfig } from "vite"
import dts from "vite-plugin-dts"
import { libInjectCss } from "vite-plugin-lib-inject-css"
import svgr from "vite-plugin-svgr"
import { peerDependencies } from "./package.json"

const iconsPath = path.resolve(__dirname, "lib/icons")
const iconFiles = readdirSync(iconsPath).filter((file) => file.endsWith(".tsx"))

const iconPaths = iconFiles.reduce((paths, file) => {
  const fullPath = path.join(iconsPath, file)
  const iconName = `icons/${path.basename(file, ".tsx")}`
  return { ...paths, [iconName]: fullPath }
}, {})

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
        ...iconPaths,
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
