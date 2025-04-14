import { registerRootComponent } from "expo";
import { ExpoRoot } from "expo-router";
import React from "react";
import "./global.css";

// Storybook integration
let AppEntryPoint;

if (process.env.EXPO_PUBLIC_STORYBOOK === "true") {
  const StorybookUI = require("./.ondevice").default;
  AppEntryPoint = () => <StorybookUI />;
} else {
  // https://docs.expo.dev/router/reference/troubleshooting/#expo_router_app_root-not-defined
  // Must be exported or Fast Refresh won't update the context
  AppEntryPoint = function App() {
    const ctx = require.context("./app");
    return <ExpoRoot context={ctx} />;
  };
}

export function App() {
  return <AppEntryPoint />;
}

registerRootComponent(App);
