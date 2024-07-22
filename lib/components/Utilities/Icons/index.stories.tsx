import type { Meta, StoryObj } from "@storybook/react"

import { Icon, Icons } from "."

const meta = {
  component: Icon,
  parameters: {
    layout: "centered",
  },
  args: {
    size: "large",
    name: "files" satisfies Icons["large"],
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Icon>

export default meta
type Story = StoryObj<typeof meta>

export const Large: Story = {
  args: {
    size: "large",
    name: "files" satisfies Icons["large"],
  },
}

export const Medium: Story = {
  args: {
    size: "medium",
    name: "calculator" satisfies Icons["medium"],
  },
}

export const Small: Story = {
  args: {
    size: "small",
    name: "calendar" satisfies Icons["small"],
  },
}

export const Tiny: Story = {
  args: {
    size: "tiny",
    name: "clock" satisfies Icons["tiny"],
  },
}
