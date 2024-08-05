import type { Meta, StoryObj } from "@storybook/react"

import { Badge } from "."

const meta = {
  component: Badge,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    text: "Foundations Squad",
    variant: "name",
    hasAvatar: true,
  },
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
    text: "Neutral",
    hasAvatar: false,
  },
}

export const Destructive: Story = {
  args: {
    variant: "destructive",
    text: "Destructive",
    hasAvatar: false,
  },
}

export const Positive: Story = {
  args: {
    variant: "positive",
    text: "Positive",
    hasAvatar: false,
  },
}

export const Warning: Story = {
  args: {
    variant: "warning",
    text: "Warning",
    hasAvatar: false,
  },
}

export const Info: Story = {
  args: {
    variant: "info",
    text: "Info",
    hasAvatar: false,
  },
}
