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
  render(props) {
    return <Badge {...props}>Home</Badge>
  },
}

export const Neutral: Story = {
  args: {
    variant: "neutral",
    children: "Neutral",
  },
}

export const Destructive: Story = {
  args: {
    variant: "destructive",
    children: "Destructive",
  },
}

export const Positive: Story = {
  args: {
    variant: "positive",
    children: "Positive",
  },
}

export const Warning: Story = {
  args: {
    variant: "warning",
    children: "Warning",
  },
}

export const Info: Story = {
  args: {
    variant: "info",
    children: "Info",
  },
}
