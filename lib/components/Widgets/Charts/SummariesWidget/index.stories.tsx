import type { Meta, StoryObj } from "@storybook/react"

import { SummariesWidget } from "."

const meta = {
  component: SummariesWidget,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    summaries: [
      {
        value: 12,
        label: "Total",
      },
      {
        value: 20,
        label: "Count",
      },
    ],
  },
  decorators: [
    (Story) => (
      <div className="w-full min-w-80">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof SummariesWidget>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
