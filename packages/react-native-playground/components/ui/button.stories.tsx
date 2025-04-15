import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Text } from "react-native";
import { Button } from "./button";

const meta = {
  title: "UI/Button",
  component: Button,
  argTypes: {
    variant: {
      options: [
        "default",
        "destructive",
        "outline",
        "secondary",
        "ghost",
        "link",
      ],
      control: { type: "select" },
    },
    size: {
      options: ["default", "sm", "lg", "icon"],
      control: { type: "select" },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <Text>Default Button</Text>,
  },
};

export const Primary: Story = {
  args: {
    variant: "default",
    children: <Text>Primary Button</Text>,
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: <Text>Secondary Button</Text>,
  },
};

export const Destructive: Story = {
  args: {
    variant: "destructive",
    children: <Text>Destructive Button</Text>,
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
    children: <Text>Outline Button</Text>,
  },
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
    children: <Text>Ghost Button</Text>,
  },
};

export const Link: Story = {
  args: {
    variant: "link",
    children: <Text>Link Button</Text>,
  },
};

export const Small: Story = {
  args: {
    size: "sm",
    children: <Text>Small Button</Text>,
  },
};

export const Large: Story = {
  args: {
    size: "lg",
    children: <Text>Large Button</Text>,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: <Text>Disabled Button</Text>,
  },
};
