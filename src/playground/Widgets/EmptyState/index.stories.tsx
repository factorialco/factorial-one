import type { Meta, StoryObj } from "@storybook/react"

import { EmptyState } from "."

const meta: Meta = {
  component: EmptyState,
  parameters: {
    tags: ["autodocs"],
  },
  args: {
    title: "Performance",
    content: "See how Hugo's performance evolved over time",
    buttonLabel: "Try it for free",
    buttonVariant: "promote",
    icon: "area-graph",
  },
  decorators: [
    (Story) => (
      <div className="w-[386px]">
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof meta>

export const PerformanceEmptyState: Story = {}

export const SalaryEmptyState: Story = {
  args: {
    title: "Salary",
    content: "See how Hugo’s salary evolved over time",
    buttonLabel: "Add info",
    buttonVariant: "default",
    icon: "cash",
  },
}
