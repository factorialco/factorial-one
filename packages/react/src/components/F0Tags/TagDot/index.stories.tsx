import type { Meta, StoryObj } from "@storybook/react-vite"

import { F0TagDot } from "./index"

const meta: Meta = {
  component: F0TagDot,
  title: "Tag/TagDot",
  tags: ["autodocs", "experimental"],
  parameters: {
    layout: "centered",
  },
  args: {
    text: "Label",
    color: "viridian",
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const DefaultDotTag: Story = {}

export const CustomColorDotTag: Story = {
  args: {
    color: undefined,
    customColor: "#f00",
  },
}
