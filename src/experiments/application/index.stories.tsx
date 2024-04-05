import type { Meta, StoryObj } from "@storybook/react"

import Layout from "."

const meta: Meta = {
  component: Layout,
  parameters: {
    tags: ["autodocs"],
    a11y: {
      skipCi: true,
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
