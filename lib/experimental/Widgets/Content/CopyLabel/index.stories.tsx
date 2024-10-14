import type { Meta, StoryObj } from "@storybook/react"

import { CopyLabel } from "."

const meta: Meta = {
  component: CopyLabel,
  parameters: {
    layout: "centered",
    tags: ["autodocs"],
  },
  args: {
    text: "josep.rey@factorial.co",
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

export const Phone: Story = {
  args: {
    text: "(120) 687-3123",
  },
}
