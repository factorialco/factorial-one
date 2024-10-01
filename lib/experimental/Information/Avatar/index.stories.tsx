import type { Meta, StoryObj } from "@storybook/react"

import { Avatar } from "."

const meta = {
  component: Avatar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    size: "medium",
    src: "https://github.com/dani-moreno.png",
    alt: "DM",
  },
  argTypes: {
    size: {
      control: {
        type: "select",
      },
    },
  },
} satisfies Meta<typeof Avatar>

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {
  render({ size, src, alt }) {
    return <Avatar size={size} src={src} alt={alt} />
  },
}

export const Fallback: Story = {
  render({ size, alt }) {
    return <Avatar size={size} alt={alt} />
  },
}
