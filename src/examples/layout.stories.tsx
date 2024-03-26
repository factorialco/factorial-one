import type { Meta, StoryObj } from "@storybook/react";
import Layout from "./layout";

const meta: Meta = {
  component: Layout,
  title: "Examples / Layout",
  parameters: {
    tags: ["autodocs"],
  },
}

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};