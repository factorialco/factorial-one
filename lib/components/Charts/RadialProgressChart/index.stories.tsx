import type { Meta, StoryObj } from "@storybook/react"
import { RadialProgressChart } from "."

const meta = {
  component: RadialProgressChart,
  tags: ["autodocs"],
  args: {
    value: 75,
  },
  decorators: [
    (Story) => (
      <div className="max-w-80">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof RadialProgressChart>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithOverview: Story = {
  args: {
    value: 75,
    overview: { number: 75, label: "Completed" },
  },
}
