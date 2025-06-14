import React from "react";
import { View } from "react-native";
import type { Meta, StoryObj } from "@storybook/react";
import { CompanyAvatar } from "@factorialco/factorial-one-react-native";
import { Check } from "@factorialco/factorial-one-react-native/src/icons/app";

export const sizes = ["xsmall", "small", "medium", "large", "xlarge"] as const;

const meta: Meta<typeof CompanyAvatar> = {
  component: CompanyAvatar,
  title: "Components/Avatars/CompanyAvatar",
  tags: ["autodocs", "experimental"],
  argTypes: {
    size: {
      control: "select",
      options: sizes,
    },
  },
  args: {
    name: "Factorial One",
    size: "medium",
  },
  decorators: [
    (Story) => (
      <View className="flex-1 items-center justify-center">
        <Story />
      </View>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof CompanyAvatar>;

export const Default: Story = {};

export const WithImage: Story = {
  args: {
    src: "https://avatars.githubusercontent.com/u/21041797?s=48&v=4",
  },
};

export const WithBadge: Story = {
  args: {
    badge: {
      type: "positive",
      icon: Check,
    },
  },
};
