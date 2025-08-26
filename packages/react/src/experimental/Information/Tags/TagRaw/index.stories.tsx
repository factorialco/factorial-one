import type { Meta, StoryObj } from "@storybook/react-vite"
import { Ai } from "../../../../icons/app"

import { TagRaw } from "./index"

const meta: Meta = {
  component: TagRaw,
  title: "Tag/TagRaw",
  tags: ["autodocs", "experimental"],
  parameters: {
    layout: "centered",
  },
  args: {
    text: "Label",
    icon: Ai,
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

export const IconTag: Story = {
  args: {
    text: undefined,
  },
}
