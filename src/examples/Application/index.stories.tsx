import type { Meta, StoryObj } from "@storybook/react"

import { Application } from "."

const meta: Meta = {
  component: Application,
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
