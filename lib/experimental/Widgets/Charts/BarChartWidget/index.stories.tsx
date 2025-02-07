import type { Meta } from "@storybook/react"

import { BarChartProps } from "@/components/Charts/BarChart"
import BarChartStory from "@/components/Charts/BarChart/index.stories"
import { BarChartWidget } from "."
import { containerStoryArgs, WidgetDecorator } from "../storybook-utils"

const meta = {
  title: "Widgets/Charts/BarChartWidget",
  component: BarChartWidget,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs", "alpha"],
  args: {
    ...containerStoryArgs,
    header: {
      ...containerStoryArgs.header,
      title: "A bar chart",
    },
    chart: BarChartStory.args as BarChartProps,
  },
  decorators: [WidgetDecorator],
} satisfies Meta<typeof BarChartWidget>

export default meta

export const Default = {}
