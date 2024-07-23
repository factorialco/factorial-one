import type { StoryObj } from "@storybook/react"

import { Icon } from "."

const meta = {
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof meta>

export const Large: Story = {
  render: () => <Icon size="large" name="replace" />,
}

export const Medium: Story = {
  render: () => <Icon size="medium" name="ai" />,
}

export const Small: Story = {
  render: () => <Icon size="small" name="calendar" />,
}

export const Tiny: Story = {
  render: () => <Icon size="tiny" name="person" />,
}
