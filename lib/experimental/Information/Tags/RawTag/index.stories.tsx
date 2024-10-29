import Placeholder from "@/icons/Placeholder"
import type { Meta, StoryObj } from "@storybook/react"

import { RawTag } from "."

const meta: Meta = {
  component: RawTag,
  parameters: {
    layout: "centered",
    tags: ["autodocs"],
  },
  args: {
    text: "Label",
    icon: Placeholder,
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const DefaultRawTag: Story = {}

export const NoIconTag: Story = {
  args: {
    icon: undefined,
  },
}
