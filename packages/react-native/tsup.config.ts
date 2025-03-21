import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm", "cjs"],
  dts: true,
  clean: true,
  minify: false,
  sourcemap: true,
  external: ["react", "react-native", "@factorialco/factorial-one-core"],
  esbuildOptions(options) {
    options.jsx = "automatic";
    return options;
  },
  treeshake: true,
  splitting: false,
});
