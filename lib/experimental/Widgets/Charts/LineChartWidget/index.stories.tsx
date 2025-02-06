import type { Meta } from "@storybook/react"

import AreaChartStory from "@/components/Charts/AreaChart/index.stories"
import { LineChartProps } from "@/components/Charts/LineChart"
import { LineChartWidget } from "."
import { containerStoryArgs, WidgetDecorator } from "../storybook-utils"

const meta = {
  title: "Widgets/Charts/LineChartWidget",
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
  decorators: [WidgetDecorator],
} satisfies Meta<typeof LineChartWidget>

export default meta

export const Default = {}
