import { registerRootComponent } from "expo";
import { ExpoRoot } from "expo-router";
import StorybookUIRoot from "./.storybook";

// Flag to control whether to show Storybook or your app
// Set to true to enable Storybook, false to run the normal app
// You can implement a more sophisticated toggle mechanism later
const SHOW_STORYBOOK = true;

// https://docs.expo.dev/router/reference/troubleshooting/#expo_router_app_root-not-defined

// Must be exported or Fast Refresh won't update the context
export function App() {
  const ctx = require.context("./app");
  return <ExpoRoot context={ctx} />;
}

// Register the app or Storybook based on the flag
registerRootComponent(SHOW_STORYBOOK ? StorybookUIRoot : App);
