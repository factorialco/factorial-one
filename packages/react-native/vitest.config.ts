import { resolve } from "path"
import { defineConfig } from "vitest/config"

export default defineConfig({
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: ["./vitest.setup.ts"],
  },
  resolve: {
    alias: {
      "@factorialco/factorial-one-core": resolve(__dirname, "../core/src"),
    },
  },
})
