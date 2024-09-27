import type { Meta, StoryObj } from "@storybook/react"

import { VerticalSeparator } from "."

const meta: Meta = {
  component: VerticalSeparator,
  parameters: {
    tags: ["autodocs"],
  },
  decorators: [
    (Story) => (
      <div className="flex flex-row">
        <div className="flex h-60 w-40 items-center justify-center bg-f1-background-critical">
          <p>left side</p>
        </div>
        <Story />
        <div className="flex h-60 w-40 items-center justify-center bg-f1-background-info">
          <p>right side</p>
        </div>
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
