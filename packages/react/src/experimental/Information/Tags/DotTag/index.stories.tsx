import type { Meta, StoryObj } from "@storybook/react-vite"

import { DotTag } from "./index"

const meta: Meta = {
  component: DotTag,
  title: "Tag/DotTag",
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
