import type { Meta, StoryObj } from "@storybook/react"

import { AlertCircle, Circle } from "@/icons"
import { ComponentProps } from "react"
import { IndicatorsList } from "."

const taskCategories = [
  {
    label: "Overdue",
    count: 1,
    icon: AlertCircle,
    color: "text-layout-foreground",
  },
  {
    label: "Due",
    count: 3,
    icon: Circle,
    color: "text-intermediate",
  },
]

const meta = {
  component: IndicatorsList,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    items: taskCategories,
  },
  decorators: [
    (Story) => (
      <div className="w-80">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<ComponentProps<typeof IndicatorsList>>

export default meta
type Story = StoryObj<typeof meta>

export const TwoElements: Story = {}

export const ThreeElements: Story = {
  args: {
    items: taskCategories.concat({
      label: "No due",
      count: 5,
      icon: Circle,
      color: "text-input-hover",
    }),
  },
}
