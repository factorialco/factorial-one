import React from "react";
import { withBackgrounds } from "@storybook/addon-ondevice-backgrounds";
import { SafeAreaProvider } from "react-native-safe-area-context";

export const decorators = [
  withBackgrounds,
  (Story) => (
    <SafeAreaProvider>
      <Story />
    </SafeAreaProvider>
  ),
];

export const parameters = {
  backgrounds: [
    { name: "light", value: "white", default: true },
    { name: "dark", value: "black" },
  ],
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
