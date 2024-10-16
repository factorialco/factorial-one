import type { Meta, StoryObj } from "@storybook/react"

import { fn } from "@storybook/test"
import { DataItem } from "."

const meta: Meta = {
  component: DataItem,
  parameters: {
    layout: "centered",
    tags: ["autodocs"],
  },
  args: {
    text: "fake.employee@factorial.co",
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

export const Navigable: Story = {
  args: {
    text: "Isabella Gonzalez",
    onClick: fn(),
  },
}

export const NavigableWithAvatar: Story = {
  args: {
    text: "Isabella Gonzalez",
    avatar: {
      src: "https://github.com/dani-moreno.png",
      alt: "I",
    },
    onClick: fn(),
  },
}

export const NavigableWithAlt: Story = {
  args: {
    text: "Isabella Gonzalez",
    avatar: {
      alt: "I",
    },
    onClick: fn(),
  },
}

export const NavigableWithAutoAlt: Story = {
  args: {
    text: "Isabella Gonzalez",
    avatar: {},
    onClick: fn(),
  },
}
