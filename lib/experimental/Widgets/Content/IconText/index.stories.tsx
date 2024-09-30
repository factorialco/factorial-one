import type { Meta, StoryObj } from "@storybook/react"
import { IconText } from "."

const meta: Meta = {
  component: IconText,
  parameters: {
    tags: ["autodocs"],
  },
  args: {
    texts: ["Work location"],
    icon: "office",
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}

export const Long: Story = {
  args: {
    texts: ["Project", "Subproject"],
    icon: "briefcase",
  },
}
