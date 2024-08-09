import type { Meta, StoryObj } from "@storybook/react"

import { PerformanceInsight } from "."

const meta: Meta = {
  component: PerformanceInsight,
  parameters: {
    tags: ["autodocs"],
  },
  args: {
    title: "Performance",
    subtitle: "3,5 - Meets expectations",
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
