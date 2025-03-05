/// <reference types="vitest" />
import react from "@vitejs/plugin-react"
import { consola } from "consola"
import dotenv from "dotenv"
import { spawnSync } from "node:child_process"
import path, { resolve } from "path"
import { defineConfig, Plugin } from "vite"
import dts from "vite-plugin-dts"
import { libInjectCss } from "vite-plugin-lib-inject-css"
import { buildSyncPlugin } from "./vite/build-sync.plugin"

dotenv.config({
  path: [".env.local", ".env"],
})

const extraPlugins: Plugin[] = []

/* Build sync */
const defaultCoderWorkspaceFolder =
  "/home/factorial/workspace/factorial/frontend/node_modules/@factorialco/factorial-one"

const buildSyncArg = process.argv.find((arg) => arg.startsWith("--buildSync"))
const buildSync = !!buildSyncArg
const buildSyncValue = buildSyncArg
  ? buildSyncArg.split("=")[1] || process.env.CODER_REMOTE
  : null

if (buildSync) {
  if (!buildSyncValue) {
    consola.error(
      "The buildSync flag must remote target or you can set it in the env variable CODER_REMOTE in the `.env.local` file"
    )
    process.exit(1)
  }

  const [remote, remoteFolder] = buildSyncValue.split(":")

  const target = [remote, remoteFolder || defaultCoderWorkspaceFolder]
    .filter(Boolean)
    .join(":")

  extraPlugins.push(
    {
      name: "build-tailwind",
      async closeBundle() {
        spawnSync("pnpm", ["build:tailwind"], { stdio: "inherit" })
      },
    },
    buildSyncPlugin({
      target,
    })
  )
}
/* ------------ Build sync end ------*/

if (process.env.BUILD_TYPES) {
  extraPlugins.push(
    dts({
      include: ["lib", "src"],
      exclude: ["**/*.stories.tsx"],
      rollupTypes: true,
    })
  )
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), libInjectCss(), ...extraPlugins],
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
    outDir: "dist",
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
    setupFiles: ["./vite/vitest.setup.ts"],
  },
})
