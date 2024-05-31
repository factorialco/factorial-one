// vite.config.ts
import react from "file:///Users/josepjaume/Projects/factorial-one/node_modules/@vitejs/plugin-react-swc/index.mjs";
import path, { resolve } from "path";
import { defineConfig } from "file:///Users/josepjaume/Projects/factorial-one/node_modules/vite/dist/node/index.js";
import dts from "file:///Users/josepjaume/Projects/factorial-one/node_modules/vite-plugin-dts/dist/index.mjs";
import { libInjectCss } from "file:///Users/josepjaume/Projects/factorial-one/node_modules/vite-plugin-lib-inject-css/dist/index.js";
var __vite_injected_original_dirname = "/Users/josepjaume/Projects/factorial-one";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    libInjectCss(),
    ...process.env.BUILD_TYPES ? [
      dts({
        include: ["lib"],
        exclude: ["**/*.stories.tsx"],
        rollupTypes: true,
        bundledPackages: ["class-variance-authority"]
      })
    ] : []
  ],
  resolve: {
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "./lib")
    }
  },
  build: {
    lib: {
      entry: resolve(__vite_injected_original_dirname, "lib/main.ts"),
      formats: ["es"]
    },
    minify: "terser",
    copyPublicDir: false,
    rollupOptions: {
      external: ["react", "react/jsx-runtime"]
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvam9zZXBqYXVtZS9Qcm9qZWN0cy9mYWN0b3JpYWwtb25lXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvam9zZXBqYXVtZS9Qcm9qZWN0cy9mYWN0b3JpYWwtb25lL3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy9qb3NlcGphdW1lL1Byb2plY3RzL2ZhY3RvcmlhbC1vbmUvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgcmVhY3QgZnJvbSBcIkB2aXRlanMvcGx1Z2luLXJlYWN0LXN3Y1wiXG5pbXBvcnQgcGF0aCwgeyByZXNvbHZlIH0gZnJvbSBcInBhdGhcIlxuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIlxuaW1wb3J0IGR0cyBmcm9tIFwidml0ZS1wbHVnaW4tZHRzXCJcbmltcG9ydCB7IGxpYkluamVjdENzcyB9IGZyb20gXCJ2aXRlLXBsdWdpbi1saWItaW5qZWN0LWNzc1wiXG5cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBwbHVnaW5zOiBbXG4gICAgcmVhY3QoKSxcbiAgICBsaWJJbmplY3RDc3MoKSxcbiAgICAuLi4ocHJvY2Vzcy5lbnYuQlVJTERfVFlQRVNcbiAgICAgID8gW1xuICAgICAgICAgIGR0cyh7XG4gICAgICAgICAgICBpbmNsdWRlOiBbXCJsaWJcIl0sXG4gICAgICAgICAgICBleGNsdWRlOiBbXCIqKi8qLnN0b3JpZXMudHN4XCJdLFxuICAgICAgICAgICAgcm9sbHVwVHlwZXM6IHRydWUsXG4gICAgICAgICAgICBidW5kbGVkUGFja2FnZXM6IFtcImNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eVwiXSxcbiAgICAgICAgICB9KSxcbiAgICAgICAgXVxuICAgICAgOiBbXSksXG4gIF0sXG4gIHJlc29sdmU6IHtcbiAgICBhbGlhczoge1xuICAgICAgXCJAXCI6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwiLi9saWJcIiksXG4gICAgfSxcbiAgfSxcbiAgYnVpbGQ6IHtcbiAgICBsaWI6IHtcbiAgICAgIGVudHJ5OiByZXNvbHZlKF9fZGlybmFtZSwgXCJsaWIvbWFpbi50c1wiKSxcbiAgICAgIGZvcm1hdHM6IFtcImVzXCJdLFxuICAgIH0sXG4gICAgbWluaWZ5OiBcInRlcnNlclwiLFxuICAgIGNvcHlQdWJsaWNEaXI6IGZhbHNlLFxuICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgIGV4dGVybmFsOiBbXCJyZWFjdFwiLCBcInJlYWN0L2pzeC1ydW50aW1lXCJdLFxuICAgIH0sXG4gIH0sXG59KVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUEwUyxPQUFPLFdBQVc7QUFDNVQsT0FBTyxRQUFRLGVBQWU7QUFDOUIsU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxTQUFTO0FBQ2hCLFNBQVMsb0JBQW9CO0FBSjdCLElBQU0sbUNBQW1DO0FBT3pDLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVM7QUFBQSxJQUNQLE1BQU07QUFBQSxJQUNOLGFBQWE7QUFBQSxJQUNiLEdBQUksUUFBUSxJQUFJLGNBQ1o7QUFBQSxNQUNFLElBQUk7QUFBQSxRQUNGLFNBQVMsQ0FBQyxLQUFLO0FBQUEsUUFDZixTQUFTLENBQUMsa0JBQWtCO0FBQUEsUUFDNUIsYUFBYTtBQUFBLFFBQ2IsaUJBQWlCLENBQUMsMEJBQTBCO0FBQUEsTUFDOUMsQ0FBQztBQUFBLElBQ0gsSUFDQSxDQUFDO0FBQUEsRUFDUDtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wsS0FBSyxLQUFLLFFBQVEsa0NBQVcsT0FBTztBQUFBLElBQ3RDO0FBQUEsRUFDRjtBQUFBLEVBQ0EsT0FBTztBQUFBLElBQ0wsS0FBSztBQUFBLE1BQ0gsT0FBTyxRQUFRLGtDQUFXLGFBQWE7QUFBQSxNQUN2QyxTQUFTLENBQUMsSUFBSTtBQUFBLElBQ2hCO0FBQUEsSUFDQSxRQUFRO0FBQUEsSUFDUixlQUFlO0FBQUEsSUFDZixlQUFlO0FBQUEsTUFDYixVQUFVLENBQUMsU0FBUyxtQkFBbUI7QUFBQSxJQUN6QztBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
