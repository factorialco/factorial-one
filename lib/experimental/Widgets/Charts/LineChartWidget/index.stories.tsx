import type { Meta } from "@storybook/react"

import AreaChartStory from "@/components/Charts/AreaChart/index.stories"
import { LineChartProps } from "@/components/Charts/LineChart"
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
    chart: AreaChartStory.args as LineChartProps,
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

export const Default = {}
