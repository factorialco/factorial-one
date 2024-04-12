import type { Meta, StoryObj } from "@storybook/react"

import { Badge } from "./badge"

const meta = {
  component: Badge,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {},
} satisfies Meta<typeof Badge>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => {
    return <Badge>Home</Badge>
  },
}

export const Neutral: Story = {
  render: () => {
    return <Badge variant="neutral">Rejected</Badge>
  },
}

export const Destructive: Story = {
  render: () => {
    return <Badge variant="destructive">Rejected</Badge>
  },
}

export const Positive: Story = {
  render: () => {
    return <Badge variant="positive">Completed</Badge>
  },
}

export const Warning: Story = {
  render: () => {
    return <Badge variant="warning">Review</Badge>
  },
}

export const Info: Story = {
  render: () => {
    return <Badge variant="info">In progress</Badge>
  },
}
