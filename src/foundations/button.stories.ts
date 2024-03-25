import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Button, sizes, variants } from "./button";
import { Mail } from "lucide-react";

const meta = {
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: {
        type: "select",
      },
      options: variants,
    },
    size: {
      control: {
        type: "select",
      },
      options: sizes,
    },
  },
  args: {
    variant: "primary",
    size: "default",
    onClick: fn(),
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { children: "A test button" },
};