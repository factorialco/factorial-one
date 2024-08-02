import type { Meta, StoryObj } from "@storybook/react"

import { Link } from "."

const meta = {
  component: Link,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    children: "This is a link",
    href: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    target: "_blank",
  },
} satisfies Meta<typeof Link>

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {}
