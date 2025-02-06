import type { Meta } from "@storybook/react"

import { VerticalBarChartProps } from "@/components/Charts/VerticalBarChart"
import BarChartStory from "@/components/Charts/VerticalBarChart/index.stories"
import { VerticalBarChartWidget } from "."
import { containerStoryArgs, WidgetDecorator } from "../storybook-utils"

const meta = {
  title: "Widgets/Charts/VerticalBarChartWidget",
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
    chart: BarChartStory.args as VerticalBarChartProps,
  },
  decorators: [WidgetDecorator],
} satisfies Meta<typeof VerticalBarChartWidget>

export default meta

export const Default = {}
