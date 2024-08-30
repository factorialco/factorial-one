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
    variant: "neutral",
    hasDot: false,
  },
} satisfies Meta<typeof Badge>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render(props) {
    return <Badge {...props}>Home</Badge>
  },
}

export const Alt: Story = {
  args: {
    variant: "name",
    text: "Foundations Squad",
    avatar: { alt: "F" },
  },
}

export const Avatar: Story = {
  args: {
    variant: "name",
    text: "Foundations Squad",
    avatar: { src: "https://github.com/dani-moreno.png", alt: "F" },
  },
}

export const Neutral: Story = {
  args: {
    variant: "neutral",
    text: "Neutral",
  },
}

export const Destructive: Story = {
  args: {
    variant: "destructive",
    text: "Destructive",
  },
}

export const Positive: Story = {
  args: {
    variant: "positive",
    text: "Positive",
  },
}

export const Warning: Story = {
  args: {
    variant: "warning",
    text: "Warning",
  },
}

export const Info: Story = {
  args: {
    variant: "info",
    text: "Info",
  },
}
