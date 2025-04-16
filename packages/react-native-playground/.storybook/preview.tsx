import React from "react";
import type { Preview } from "@storybook/react";
import { View } from "react-native";
import { withBackgrounds } from "@storybook/addon-ondevice-backgrounds";

const preview: Preview = {
  decorators: [
    withBackgrounds,
    (Story) => (
      <View style={{ flex: 1 }}>
        <Story />
      </View>
    ),
  ],
  parameters: {
    backgrounds: {
      disable: true,
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
