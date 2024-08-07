import type { Meta, StoryObj } from "@storybook/react"

import BarChartStory from "@/components/Charts/BarChart/index.stories"
import { BarChartWidget } from "."
import { containerStoryArgs } from "../storybook-utils"

const meta = {
  component: BarChartWidget,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    ...containerStoryArgs,
    header: {
      ...containerStoryArgs.header,
      title: "A bar chart",
    },
    chart: BarChartStory.args,
  },
  decorators: [
    (Story) => (
      <div className="w-full min-w-80">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof BarChartWidget>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
