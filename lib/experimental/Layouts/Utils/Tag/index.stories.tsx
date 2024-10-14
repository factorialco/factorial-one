import type { Meta, StoryObj } from "@storybook/react"

import { fn } from "@storybook/test"
import { Tag } from "."

const meta: Meta = {
  component: Tag,
  parameters: {
    layout: "centered",
    tags: ["autodocs"],
  },
  args: {
    text: "Isabella González",
    avatar: {
      alt: "I",
    },
  },
  decorators: [
    (Story) => (
      <div className="w-64">
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}

export const Avatar: Story = {
  args: {
    avatar: {
      src: "https://github.com/dani-moreno.png",
      alt: "I",
    },
  },
}

export const Clickable: Story = {
  args: {
    onClick: fn(),
  },
}

export const Alt: Story = {
  args: {
    avatar: undefined,
  },
}
