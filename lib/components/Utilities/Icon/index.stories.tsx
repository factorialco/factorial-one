import type { Meta, StoryObj } from "@storybook/react"

import AddAvatar from "@/icons/AddAvatar"
import { ComponentProps } from "react"
import { Icon } from "."

const meta = {
  component: Icon,
  parameters: {
    layout: "centered",
  },
  args: {
    size: "xl",
    icon: AddAvatar,
    color: "primary",
  },
  tags: ["autodocs"],
} satisfies Meta<ComponentProps<typeof Icon>>

export default meta
type Story = StoryObj<typeof meta>

export const Example: Story = {}

export const Large: Story = {
  args: {
    size: "lg",
  },
}

export const Tertiary: Story = {
  args: {
    color: "tertiary",
  },
}
