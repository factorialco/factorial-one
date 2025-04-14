import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { View } from "react-native";
import { ExampleComponent } from "../components/ExampleComponent";

const meta: Meta<typeof ExampleComponent> = {
  title: "UI/ExampleComponent",
  component: ExampleComponent,
  parameters: {
    notes:
      "A simple example component that displays text and handles press events",
  },
  argTypes: {
    text: { control: "text" },
    backgroundColor: { control: "color" },
    onPress: { action: "pressed" },
  },
  decorators: [
    (Story) => (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          padding: 16,
        }}
      >
        <Story />
      </View>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof ExampleComponent>;

export const Default: Story = {
  args: {
    text: "Example Button",
    backgroundColor: "#3498db",
  },
};

export const Red: Story = {
  args: {
    text: "Red Button",
    backgroundColor: "#e74c3c",
  },
};

export const Green: Story = {
  args: {
    text: "Green Button",
    backgroundColor: "#2ecc71",
  },
};
