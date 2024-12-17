import type { Meta, StoryObj } from "@storybook/react"
import { EmojiBadge } from "."

const meta: Meta<typeof EmojiBadge> = {
  component: EmojiBadge,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof EmojiBadge>

export const Default: Story = {
  args: {
    emoji: "🍆",
  },
}
