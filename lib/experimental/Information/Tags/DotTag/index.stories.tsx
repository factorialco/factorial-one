import type { Meta, StoryObj } from "@storybook/react"

import { DotTag } from "."

const meta: Meta = {
  component: DotTag,
  title: "Tag/DotTag",
  parameters: {
    layout: "centered",
    tags: ["autodocs"],
  },
  args: {
    text: "Label",
    color: "viridian",
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const DefaultDotTag: Story = {}
