// vite.config.ts
import react from "file:///Users/josepjaume/Projects/factorial-one/node_modules/@vitejs/plugin-react/dist/index.mjs";
import { readdirSync } from "fs";
import path, { resolve } from "path";
import { defineConfig } from "file:///Users/josepjaume/Projects/factorial-one/node_modules/vite/dist/node/index.js";
import dts from "file:///Users/josepjaume/Projects/factorial-one/node_modules/vite-plugin-dts/dist/index.mjs";
import { libInjectCss } from "file:///Users/josepjaume/Projects/factorial-one/node_modules/vite-plugin-lib-inject-css/dist/index.js";
import svgr from "file:///Users/josepjaume/Projects/factorial-one/node_modules/vite-plugin-svgr/dist/index.js";

// package.json
var peerDependencies = {
  "@hookform/resolvers": "^3.5.0",
  "@radix-ui/react-accordion": "^1.1.2",
  "@radix-ui/react-avatar": "^1.0.4",
  "@radix-ui/react-checkbox": "^1.0.4",
  "@radix-ui/react-dialog": "^1.0.5",
  "@radix-ui/react-dropdown-menu": "^2.0.6",
  "@radix-ui/react-label": "^2.0.2",
  "@radix-ui/react-popover": "^1.0.7",
  "@radix-ui/react-scroll-area": "^1.0.5",
  "@radix-ui/react-select": "^2.0.0",
  "@radix-ui/react-slot": "^1.0.2",
  "@radix-ui/react-tabs": "^1.0.4",
  "@radix-ui/react-tooltip": "^1.0.7",
  "@tailwindcss/container-queries": "^0.1.1",
  "class-variance-authority": "^0.7.0",
  clsx: "^2.1.1",
  "date-fns": "^3.6.0",
  "lucide-react": "^0.383.0",
  react: "18.3.1",
  "react-day-picker": "^8.10.1",
  "react-dom": "18.3.1",
  "react-hook-form": "^7.51.5",
  recharts: "^2.12.7",
  ress: "^5.0.2",
  "tailwind-merge": "^2.3.0",
  tailwindcss: "^3.4.3",
  "tailwindcss-animate": "^1.0.7",
  typescript: "^5.5.3",
  "usehooks-ts": "^3.1.0",
  zod: "^3.23.8"
};

// vite.config.ts
var __vite_injected_original_dirname = "/Users/josepjaume/Projects/factorial-one";
var iconsPath = path.resolve(__vite_injected_original_dirname, "lib/icons");
var iconFiles = readdirSync(iconsPath).filter((file) => file.endsWith(".tsx"));
var iconPaths = iconFiles.reduce((paths, file) => {
  const fullPath = path.join(iconsPath, file);
  const iconName = `icons/${path.basename(file, ".tsx")}`;
  return { ...paths, [iconName]: fullPath };
}, {});
var vite_config_default = defineConfig({
  plugins: [
    react(),
    svgr({
      svgrOptions: {
        ref: true,
        memo: true,
        svgo: true,
        replaceAttrValues: {
          "#FF355E": "currentColor",
          "#515164": "currentColor"
        }
      }
    }),
    libInjectCss(),
    ...process.env.BUILD_TYPES ? [
      dts({
        include: ["lib"],
        exclude: ["**/*.stories.tsx"],
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
      entry: {
        ["factorial-one"]: resolve(__vite_injected_original_dirname, "lib/factorial-one.ts"),
        ...iconPaths
      },
      fileName: (_, entryName) => {
        return `${entryName}.js`;
      },
      formats: ["es"]
    },
    copyPublicDir: false,
    rollupOptions: {
      external: [...Object.keys(peerDependencies), "react/jsx-runtime"],
      output: {
        globals: {
          react: "React"
        }
      }
    }
  },
  test: {
    environment: "jsdom",
    setupFiles: ["./vitest.setup.ts"]
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiLCAicGFja2FnZS5qc29uIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL1VzZXJzL2pvc2VwamF1bWUvUHJvamVjdHMvZmFjdG9yaWFsLW9uZVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL2pvc2VwamF1bWUvUHJvamVjdHMvZmFjdG9yaWFsLW9uZS92aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvam9zZXBqYXVtZS9Qcm9qZWN0cy9mYWN0b3JpYWwtb25lL3ZpdGUuY29uZmlnLnRzXCI7Ly8vIDxyZWZlcmVuY2UgdHlwZXM9XCJ2aXRlc3RcIiAvPlxuaW1wb3J0IHJlYWN0IGZyb20gXCJAdml0ZWpzL3BsdWdpbi1yZWFjdFwiXG5pbXBvcnQgeyByZWFkZGlyU3luYyB9IGZyb20gXCJmc1wiXG5pbXBvcnQgcGF0aCwgeyByZXNvbHZlIH0gZnJvbSBcInBhdGhcIlxuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIlxuaW1wb3J0IGR0cyBmcm9tIFwidml0ZS1wbHVnaW4tZHRzXCJcbmltcG9ydCB7IGxpYkluamVjdENzcyB9IGZyb20gXCJ2aXRlLXBsdWdpbi1saWItaW5qZWN0LWNzc1wiXG5pbXBvcnQgc3ZnciBmcm9tIFwidml0ZS1wbHVnaW4tc3ZnclwiXG5pbXBvcnQgeyBwZWVyRGVwZW5kZW5jaWVzIH0gZnJvbSBcIi4vcGFja2FnZS5qc29uXCJcblxuY29uc3QgaWNvbnNQYXRoID0gcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCJsaWIvaWNvbnNcIilcbmNvbnN0IGljb25GaWxlcyA9IHJlYWRkaXJTeW5jKGljb25zUGF0aCkuZmlsdGVyKChmaWxlKSA9PiBmaWxlLmVuZHNXaXRoKFwiLnRzeFwiKSlcblxuY29uc3QgaWNvblBhdGhzID0gaWNvbkZpbGVzLnJlZHVjZSgocGF0aHMsIGZpbGUpID0+IHtcbiAgY29uc3QgZnVsbFBhdGggPSBwYXRoLmpvaW4oaWNvbnNQYXRoLCBmaWxlKVxuICBjb25zdCBpY29uTmFtZSA9IGBpY29ucy8ke3BhdGguYmFzZW5hbWUoZmlsZSwgXCIudHN4XCIpfWBcbiAgcmV0dXJuIHsgLi4ucGF0aHMsIFtpY29uTmFtZV06IGZ1bGxQYXRoIH1cbn0sIHt9KVxuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW1xuICAgIHJlYWN0KCksXG4gICAgc3Zncih7XG4gICAgICBzdmdyT3B0aW9uczoge1xuICAgICAgICByZWY6IHRydWUsXG4gICAgICAgIG1lbW86IHRydWUsXG4gICAgICAgIHN2Z286IHRydWUsXG4gICAgICAgIHJlcGxhY2VBdHRyVmFsdWVzOiB7XG4gICAgICAgICAgXCIjRkYzNTVFXCI6IFwiY3VycmVudENvbG9yXCIsXG4gICAgICAgICAgXCIjNTE1MTY0XCI6IFwiY3VycmVudENvbG9yXCIsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pLFxuICAgIGxpYkluamVjdENzcygpLFxuICAgIC4uLihwcm9jZXNzLmVudi5CVUlMRF9UWVBFU1xuICAgICAgPyBbXG4gICAgICAgICAgZHRzKHtcbiAgICAgICAgICAgIGluY2x1ZGU6IFtcImxpYlwiXSxcbiAgICAgICAgICAgIGV4Y2x1ZGU6IFtcIioqLyouc3Rvcmllcy50c3hcIl0sXG4gICAgICAgICAgICBidW5kbGVkUGFja2FnZXM6IFtcImNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eVwiXSxcbiAgICAgICAgICB9KSxcbiAgICAgICAgXVxuICAgICAgOiBbXSksXG4gIF0sXG4gIHJlc29sdmU6IHtcbiAgICBhbGlhczoge1xuICAgICAgXCJAXCI6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwiLi9saWJcIiksXG4gICAgfSxcbiAgfSxcbiAgYnVpbGQ6IHtcbiAgICBsaWI6IHtcbiAgICAgIGVudHJ5OiB7XG4gICAgICAgIFtcImZhY3RvcmlhbC1vbmVcIl06IHJlc29sdmUoX19kaXJuYW1lLCBcImxpYi9mYWN0b3JpYWwtb25lLnRzXCIpLFxuICAgICAgICAuLi5pY29uUGF0aHMsXG4gICAgICB9LFxuICAgICAgZmlsZU5hbWU6IChfLCBlbnRyeU5hbWUpID0+IHtcbiAgICAgICAgcmV0dXJuIGAke2VudHJ5TmFtZX0uanNgXG4gICAgICB9LFxuICAgICAgZm9ybWF0czogW1wiZXNcIl0sXG4gICAgfSxcbiAgICBjb3B5UHVibGljRGlyOiBmYWxzZSxcbiAgICByb2xsdXBPcHRpb25zOiB7XG4gICAgICBleHRlcm5hbDogWy4uLk9iamVjdC5rZXlzKHBlZXJEZXBlbmRlbmNpZXMpLCBcInJlYWN0L2pzeC1ydW50aW1lXCJdLFxuICAgICAgb3V0cHV0OiB7XG4gICAgICAgIGdsb2JhbHM6IHtcbiAgICAgICAgICByZWFjdDogXCJSZWFjdFwiLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICB0ZXN0OiB7XG4gICAgZW52aXJvbm1lbnQ6IFwianNkb21cIixcbiAgICBzZXR1cEZpbGVzOiBbXCIuL3ZpdGVzdC5zZXR1cC50c1wiXSxcbiAgfSxcbn0pXG4iLCAie1xuICBcIm5hbWVcIjogXCJAZmFjdG9yaWFsY28vZmFjdG9yaWFsLW9uZVwiLFxuICBcInZlcnNpb25cIjogXCIwLjAuMVwiLFxuICBcIm1haW5cIjogXCJkaXN0L2ZhY3RvcmlhbC1vbmUuanNcIixcbiAgXCJ0eXBpbmdzXCI6IFwiZGlzdC9mYWN0b3JpYWwtb25lLnJvbGx1cC5kLnRzXCIsXG4gIFwidHlwZVwiOiBcIm1vZHVsZVwiLFxuICBcImZpbGVzXCI6IFtcbiAgICBcImRpc3RcIixcbiAgICBcInN0eWxlcy5jc3NcIixcbiAgICBcImZvbnRzLmpzXCIsXG4gICAgXCJ0YWlsd2luZC5jb25maWcudHNcIixcbiAgICBcInBvc3Rjc3MuY29uZmlnLmpzXCJcbiAgXSxcbiAgXCJzaWRlRWZmZWN0c1wiOiBbXG4gICAgXCIqKi8qLmNzc1wiXG4gIF0sXG4gIFwic2NyaXB0c1wiOiB7XG4gICAgXCJkZXZcIjogXCJzdG9yeWJvb2sgZGV2IC1wIDYwMDZcIixcbiAgICBcInN0YXJ0XCI6IFwibnBtIHJ1biBkZXZcIixcbiAgICBcImJ1aWxkXCI6IFwidHNjIC0tcCAuL3RzY29uZmlnLWJ1aWxkLmpzb24gJiYgQlVJTERfVFlQRVM9dHJ1ZSB2aXRlIGJ1aWxkICYmIG5wbSBydW4gYnVpbGQ6dGFpbHdpbmQgJiYgcnVuLXAgZXh0cmFjdC10eXBlcyBjb3B5LWFzc2V0c1wiLFxuICAgIFwiZXh0cmFjdC10eXBlc1wiOiBcIm5weCBhcGktZXh0cmFjdG9yIHJ1biAtLXR5cGVzY3JpcHQtY29tcGlsZXIgbm9kZV9tb2R1bGVzL3R5cGVzY3JpcHQgJj4gL2Rldi9udWxsICBcIixcbiAgICBcImNvcHktYXNzZXRzXCI6IFwiY3AgLXIgYXNzZXRzIGRpc3RcIixcbiAgICBcImJ1aWxkOnRhaWx3aW5kXCI6IFwiTk9ERV9FTlY9cHJvZHVjdGlvbiB0YWlsd2luZGNzcyAtaSAuL3N0eWxlcy5jc3MgLW8gLi9kaXN0L3N0eWxlcy5jc3MgLS1wb3N0Y3NzIC0tbWluaWZ5XCIsXG4gICAgXCJsaW50XCI6IFwiZXNsaW50IC4gLS1leHQgdHMsdHN4IC0tcmVwb3J0LXVudXNlZC1kaXNhYmxlLWRpcmVjdGl2ZXMgLS1tYXgtd2FybmluZ3MgMFwiLFxuICAgIFwicHJldmlld1wiOiBcInZpdGUgcHJldmlld1wiLFxuICAgIFwiZ2VuZXJhdGUtaWNvbnNcIjogXCJucHggQHN2Z3IvY2xpIC0tb3V0LWRpciBsaWIvaWNvbnMgYXNzZXRzL2ljb25zXCIsXG4gICAgXCJidWlsZC1zdG9yeWJvb2tcIjogXCJzdG9yeWJvb2sgYnVpbGRcIixcbiAgICBcImJ1aWxkLXN0b3J5Ym9vazpwdWJsaWNcIjogXCJQVUJMSUNfQlVJTEQ9dHJ1ZSBzdG9yeWJvb2sgYnVpbGRcIixcbiAgICBcInRlc3Qtc3Rvcnlib29rXCI6IFwidGVzdC1zdG9yeWJvb2tcIixcbiAgICBcInByZXR0aWVyOmZvcm1hdFwiOiBcInByZXR0aWVyIC0td3JpdGUgXFxcImxpYi8qKi8qLnt0cyx0c3gsanMsbWQsbWR4LGNzcyx5YW1sfVxcXCJcIixcbiAgICBcInByZXR0aWVyOmNoZWNrOmNpXCI6IFwicHJldHRpZXIgLS1jaGVjayBcXFwibGliLyoqLyoue3RzLHRzeCxqcyxtZCxtZHgsY3NzLHlhbWx9XFxcIlwiLFxuICAgIFwic3Rvcnlib29rLWRvY3NcIjogXCJzdG9yeWJvb2sgZGV2IC0tZG9jc1wiLFxuICAgIFwidHNjXCI6IFwidHNjIC0tbm9FbWl0XCIsXG4gICAgXCJ2aXRlc3RcIjogXCJ2aXRlc3QgZGV2XCIsXG4gICAgXCJ2aXRlc3Q6Y2lcIjogXCJ2aXRlc3QgcnVuXCJcbiAgfSxcbiAgXCJwZWVyRGVwZW5kZW5jaWVzXCI6IHtcbiAgICBcIkBob29rZm9ybS9yZXNvbHZlcnNcIjogXCJeMy41LjBcIixcbiAgICBcIkByYWRpeC11aS9yZWFjdC1hY2NvcmRpb25cIjogXCJeMS4xLjJcIixcbiAgICBcIkByYWRpeC11aS9yZWFjdC1hdmF0YXJcIjogXCJeMS4wLjRcIixcbiAgICBcIkByYWRpeC11aS9yZWFjdC1jaGVja2JveFwiOiBcIl4xLjAuNFwiLFxuICAgIFwiQHJhZGl4LXVpL3JlYWN0LWRpYWxvZ1wiOiBcIl4xLjAuNVwiLFxuICAgIFwiQHJhZGl4LXVpL3JlYWN0LWRyb3Bkb3duLW1lbnVcIjogXCJeMi4wLjZcIixcbiAgICBcIkByYWRpeC11aS9yZWFjdC1sYWJlbFwiOiBcIl4yLjAuMlwiLFxuICAgIFwiQHJhZGl4LXVpL3JlYWN0LXBvcG92ZXJcIjogXCJeMS4wLjdcIixcbiAgICBcIkByYWRpeC11aS9yZWFjdC1zY3JvbGwtYXJlYVwiOiBcIl4xLjAuNVwiLFxuICAgIFwiQHJhZGl4LXVpL3JlYWN0LXNlbGVjdFwiOiBcIl4yLjAuMFwiLFxuICAgIFwiQHJhZGl4LXVpL3JlYWN0LXNsb3RcIjogXCJeMS4wLjJcIixcbiAgICBcIkByYWRpeC11aS9yZWFjdC10YWJzXCI6IFwiXjEuMC40XCIsXG4gICAgXCJAcmFkaXgtdWkvcmVhY3QtdG9vbHRpcFwiOiBcIl4xLjAuN1wiLFxuICAgIFwiQHRhaWx3aW5kY3NzL2NvbnRhaW5lci1xdWVyaWVzXCI6IFwiXjAuMS4xXCIsXG4gICAgXCJjbGFzcy12YXJpYW5jZS1hdXRob3JpdHlcIjogXCJeMC43LjBcIixcbiAgICBcImNsc3hcIjogXCJeMi4xLjFcIixcbiAgICBcImRhdGUtZm5zXCI6IFwiXjMuNi4wXCIsXG4gICAgXCJsdWNpZGUtcmVhY3RcIjogXCJeMC4zODMuMFwiLFxuICAgIFwicmVhY3RcIjogXCIxOC4zLjFcIixcbiAgICBcInJlYWN0LWRheS1waWNrZXJcIjogXCJeOC4xMC4xXCIsXG4gICAgXCJyZWFjdC1kb21cIjogXCIxOC4zLjFcIixcbiAgICBcInJlYWN0LWhvb2stZm9ybVwiOiBcIl43LjUxLjVcIixcbiAgICBcInJlY2hhcnRzXCI6IFwiXjIuMTIuN1wiLFxuICAgIFwicmVzc1wiOiBcIl41LjAuMlwiLFxuICAgIFwidGFpbHdpbmQtbWVyZ2VcIjogXCJeMi4zLjBcIixcbiAgICBcInRhaWx3aW5kY3NzXCI6IFwiXjMuNC4zXCIsXG4gICAgXCJ0YWlsd2luZGNzcy1hbmltYXRlXCI6IFwiXjEuMC43XCIsXG4gICAgXCJ0eXBlc2NyaXB0XCI6IFwiXjUuNS4zXCIsXG4gICAgXCJ1c2Vob29rcy10c1wiOiBcIl4zLjEuMFwiLFxuICAgIFwiem9kXCI6IFwiXjMuMjMuOFwiXG4gIH0sXG4gIFwiZGV2RGVwZW5kZW5jaWVzXCI6IHtcbiAgICBcIkBmYWtlci1qcy9mYWtlclwiOiBcIl44LjQuMVwiLFxuICAgIFwiQG1pY3Jvc29mdC9hcGktZXh0cmFjdG9yXCI6IFwiXjcuNDcuM1wiLFxuICAgIFwiQHN0b3J5Ym9vay9hZGRvbi1hMTF5XCI6IFwiXjguMi41XCIsXG4gICAgXCJAc3Rvcnlib29rL2FkZG9uLWVzc2VudGlhbHNcIjogXCJeOC4yLjVcIixcbiAgICBcIkBzdG9yeWJvb2svYWRkb24taW50ZXJhY3Rpb25zXCI6IFwiXjguMi41XCIsXG4gICAgXCJAc3Rvcnlib29rL2FkZG9uLWxpbmtzXCI6IFwiXjguMi41XCIsXG4gICAgXCJAc3Rvcnlib29rL2FkZG9uLXRoZW1lc1wiOiBcIl44LjIuNVwiLFxuICAgIFwiQHN0b3J5Ym9vay9hZGRvbi12aWV3cG9ydFwiOiBcIl44LjIuNVwiLFxuICAgIFwiQHN0b3J5Ym9vay9ibG9ja3NcIjogXCJeOC4yLjVcIixcbiAgICBcIkBzdG9yeWJvb2svbWFuYWdlci1hcGlcIjogXCJeOC4yLjVcIixcbiAgICBcIkBzdG9yeWJvb2svcmVhY3RcIjogXCJeOC4yLjVcIixcbiAgICBcIkBzdG9yeWJvb2svcmVhY3Qtdml0ZVwiOiBcIl44LjIuNVwiLFxuICAgIFwiQHN0b3J5Ym9vay90ZXN0XCI6IFwiXjguMi41XCIsXG4gICAgXCJAc3Rvcnlib29rL3Rlc3QtcnVubmVyXCI6IFwiXjAuMTkuMVwiLFxuICAgIFwiQHN0b3J5Ym9vay90aGVtaW5nXCI6IFwiXjguMi41XCIsXG4gICAgXCJAc3Znci9jbGlcIjogXCJeOC4xLjBcIixcbiAgICBcIkB0ZXN0aW5nLWxpYnJhcnkvcmVhY3RcIjogXCJeMTYuMC4wXCIsXG4gICAgXCJAdHlwZXMvbm9kZVwiOiBcIl4yMC4xNC4xMlwiLFxuICAgIFwiQHR5cGVzL3JlYWN0XCI6IFwiXjE4LjMuM1wiLFxuICAgIFwiQHR5cGVzL3JlYWN0LWRvbVwiOiBcIl4xOC4zLjBcIixcbiAgICBcIkB0eXBlc2NyaXB0LWVzbGludC9lc2xpbnQtcGx1Z2luXCI6IFwiXjcuMTcuMFwiLFxuICAgIFwiQHR5cGVzY3JpcHQtZXNsaW50L3BhcnNlclwiOiBcIl43LjE2LjFcIixcbiAgICBcIkB2aXRlanMvcGx1Z2luLXJlYWN0XCI6IFwiXjQuMy4xXCIsXG4gICAgXCJhdXRvcHJlZml4ZXJcIjogXCJeMTAuNC4xOFwiLFxuICAgIFwiYXhlLXBsYXl3cmlnaHRcIjogXCJeMi4wLjFcIixcbiAgICBcImVzbGludFwiOiBcIl44LjU3LjBcIixcbiAgICBcImVzbGludC1wbHVnaW4tcmVhY3QtaG9va3NcIjogXCJeNC42LjJcIixcbiAgICBcImVzbGludC1wbHVnaW4tcmVhY3QtcmVmcmVzaFwiOiBcIl4wLjQuOVwiLFxuICAgIFwiZXNsaW50LXBsdWdpbi1zdG9yeWJvb2tcIjogXCJeMC44LjBcIixcbiAgICBcImpzZG9tXCI6IFwiXjI0LjEuMVwiLFxuICAgIFwibnBtLXJ1bi1hbGxcIjogXCJeNC4xLjVcIixcbiAgICBcInBvc3Rjc3NcIjogXCJeOC40LjM5XCIsXG4gICAgXCJwb3N0Y3NzLWltcG9ydFwiOiBcIl4xNi4xLjBcIixcbiAgICBcInByZXR0aWVyXCI6IFwiXjMuMy4zXCIsXG4gICAgXCJwcmV0dGllci1wbHVnaW4tb3JnYW5pemUtaW1wb3J0c1wiOiBcIl4zLjIuNFwiLFxuICAgIFwicHJldHRpZXItcGx1Z2luLXRhaWx3aW5kY3NzXCI6IFwiXjAuNi41XCIsXG4gICAgXCJzdG9yeWJvb2tcIjogXCJeOC4yLjVcIixcbiAgICBcInR5cGVzY3JpcHRcIjogXCJeNS41LjNcIixcbiAgICBcInZpdGVcIjogXCJeNS4zLjRcIixcbiAgICBcInZpdGUtcGx1Z2luLWR0c1wiOiBcIl4zLjkuMVwiLFxuICAgIFwidml0ZS1wbHVnaW4tbGliLWluamVjdC1jc3NcIjogXCJeMi4xLjFcIixcbiAgICBcInZpdGUtcGx1Z2luLXN2Z3JcIjogXCJeNC4yLjBcIixcbiAgICBcInZpdGVzdFwiOiBcIl4yLjAuNFwiXG4gIH0sXG4gIFwiZGVwZW5kZW5jaWVzXCI6IHtcbiAgICBcIkBmb250c291cmNlL2ludGVyXCI6IFwiXjUuMC4xOVwiXG4gIH1cbn0iXSwKICAibWFwcGluZ3MiOiAiO0FBQ0EsT0FBTyxXQUFXO0FBQ2xCLFNBQVMsbUJBQW1CO0FBQzVCLE9BQU8sUUFBUSxlQUFlO0FBQzlCLFNBQVMsb0JB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
