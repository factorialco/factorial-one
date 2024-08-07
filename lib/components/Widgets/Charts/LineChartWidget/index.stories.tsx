import type { Meta, StoryObj } from "@storybook/react"

import AreaChartStory from "@/components/Charts/AreaChart/index.stories"
import { LineChartWidget } from "."
import { containerStoryArgs } from "../storybook-utils"

const meta = {
  component: LineChartWidget,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    ...containerStoryArgs,
    header: {
      ...containerStoryArgs.header,
      title: "A line chart",
    },
    chart: AreaChartStory.args,
  },
  decorators: [
    (Story) => (
      <div className="w-full min-w-80">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof LineChartWidget>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
