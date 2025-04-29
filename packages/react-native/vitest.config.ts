import { resolve } from "path";
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "jsdom",
    server: {
      deps: {
        inline: [
          "react-native",
          "react-native-svg",
          "nativewind",
          "react-native-css-interop",
        ],
      },
    },
    globals: true,
    setupFiles: ["./vitest.setup.ts"],
  },
  resolve: {
    alias: {
      "@factorialco/factorial-one-core": resolve(__dirname, "../core/src"),
    },
  },
});
