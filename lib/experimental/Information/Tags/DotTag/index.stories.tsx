import type { Meta, StoryObj } from "@storybook/react"

import { DotTag } from "."

const meta: Meta = {
  component: DotTag,
  title: "Tag/DotTag",
  tags: ["autodocs", "alpha"],
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
