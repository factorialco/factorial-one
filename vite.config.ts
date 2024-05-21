import react from "@vitejs/plugin-react-swc"
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
    minify: "terser",
    copyPublicDir: false,
    rollupOptions: {
      external: ["react", "react/jsx-runtime"],
    },
  },
})
