import type { Meta, StoryObj } from "@storybook/react"

import BarChartStory from "@/components/Charts/VerticalBarChart/index.stories"
import { VerticalBarChartWidget } from "."
import { containerStoryArgs } from "../storybook-utils"

const meta = {
  component: VerticalBarChartWidget,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    ...containerStoryArgs,
    header: {
      ...containerStoryArgs.header,
      title: "A Vertical Bar Chart",
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
} satisfies Meta<typeof VerticalBarChartWidget>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
