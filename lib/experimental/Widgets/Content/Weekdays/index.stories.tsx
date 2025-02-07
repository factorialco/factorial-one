import type { Meta, StoryObj } from "@storybook/react"

import { Weekdays } from "."

const meta: Meta = {
  title: "Widgets/Content/Weekdays",
  component: Weekdays,
  tags: ["autodocs", "alpha"],
  parameters: {
    layout: "centered",
  },
  args: {
    activatedDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
