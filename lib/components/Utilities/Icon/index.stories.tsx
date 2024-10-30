import type { Meta, StoryObj } from "@storybook/react"

import { LogoAvatar } from "@/icons/app"
import { ComponentProps } from "react"
import { Icon } from "."

const meta = {
  component: Icon,
  parameters: {
    layout: "centered",
  },
  args: {
    size: "md",
    icon: LogoAvatar,
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
