import { defineConfig } from "tsup"

export default defineConfig({
  entry: {
    "factorial-one": "lib/factorial-one.ts",
    experimental: "lib/experimental/exports.ts",
  },
  format: ["esm"],
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: true,
  outDir: "dist_test",
  tsconfig: "tsconfig-build.json",
})
