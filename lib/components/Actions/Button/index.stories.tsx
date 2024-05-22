import type { Meta, StoryObj } from "@storybook/react"
import { fn } from "@storybook/test"

import { Button } from "."

const meta = {
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    variant: "default",
    size: "default",
    onClick: fn(),
    children: <>Click me</>,
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    variant: "default",
  },
}

export const Secondary: Story = {
  args: {
    variant: "secondary",
  },
}

export const Positive: Story = {
  args: {
    variant: "positive",
  },
}

export const Destructive: Story = {
  args: {
    variant: "destructive",
  },
}

export const Ghost: Story = {
  args: {
    variant: "ghost",
  },
}

export const Outline: Story = {
  args: {
    variant: "outline",
  },
}
