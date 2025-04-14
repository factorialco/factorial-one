import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { View } from "react-native";
import { ExampleComponent } from "@factorialco/factorial-one-react-native";

const meta: Meta<typeof ExampleComponent> = {
  title: "Design System/ExampleComponent",
  component: ExampleComponent,
  parameters: {
    notes: "A simple example component from the Factorial One Design System",
  },
  argTypes: {
    text: { control: "text" },
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
  args: {},
};

export const CustomText: Story = {
  args: {
    text: "Hello from Factorial One Storybook!",
  },
};
