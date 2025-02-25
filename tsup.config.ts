import { defineConfig } from "tsup"

export default defineConfig({
  entry: {
    "factorial-one": "lib/factorial-one.ts",
    experimental: "lib/experimental/index.ts",
  },
  format: ["esm"],
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: true,
  outDir: "dist",
  tsconfig: "tsconfig-build.json",
  external: ["react/jsx-runtime", "react", "react-dom"],
})
