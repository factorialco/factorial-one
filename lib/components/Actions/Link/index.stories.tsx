import type { Meta, StoryObj } from "@storybook/react"

import { ComponentProps } from "react"
import { Link } from "."

const meta = {
  component: Link,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    children: "This is a link",
    href: "/",
  },
} satisfies Meta<ComponentProps<typeof Link>>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
export const TargetBlank: Story = {
  args: {
    target: "_blank",
    children: "This link opens in a new tab",
  },
}

export const AsText: Story = {
  args: {
    variant: "text",
  },
}
