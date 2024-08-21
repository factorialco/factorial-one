import type { Meta, StoryObj } from "@storybook/react"

import { EmptyState } from "."

const meta: Meta = {
  component: EmptyState,
  parameters: {
    tags: ["autodocs"],
  },
  args: {
    title: "Performance",
    content: "See how Hugo's performance evolved over time",
    buttons: [
      { label: "Try it for free", variant: "destructive" },
      { label: "Book a demo", variant: "outline" },
    ],
    variant: "performance",
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
