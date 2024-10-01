import type { Meta, StoryObj } from "@storybook/react"

import { ComponentProps } from "react"
import { Link } from "."

const meta = {
  component: Link,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    target: {
      control: "select",
      options: [undefined, "_blank", "_self", "_parent", "_top"],
    },
  },
  args: {
    children: "This is a link",
    href: "/foo",
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
