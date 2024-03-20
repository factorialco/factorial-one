import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { DatePicker } from "./";
import { ComponentProps } from "react";

const meta = {
  component: DatePicker,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    date: new Date(),
    onSelect: fn(),
  } satisfies ComponentProps<typeof DatePicker>,
} satisfies Meta<typeof DatePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
