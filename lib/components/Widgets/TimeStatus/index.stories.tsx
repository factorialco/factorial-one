import type { Meta, StoryObj } from "@storybook/react"

import { TimeStatus } from "."

const meta: Meta = {
  component: TimeStatus,
  parameters: {
    tags: ["autodocs"],
  },
  args: {
    time: "05:34",
    status: "in",
    statusText: "Clocked in",
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}

export const Out: Story = {
  args: {
    status: "out",
    statusText: "Clocked out",
  },
}

export const Break: Story = {
  args: {
    status: "break",
    statusText: "In a break",
  },
}
