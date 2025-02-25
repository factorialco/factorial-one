import type { Meta } from "@storybook/react"

import { VerticalBarChartProps } from "@/core/components/charts/VerticalBarChart"
import BarChartStory from "@/core/components/charts/VerticalBarChart/index.stories.tsx"
import { containerStoryArgs, WidgetDecorator } from "../storybook-utils.tsx"
import { VerticalBarChartWidget } from "./index.tsx"

const meta = {
  title: "widgets/charts/VerticalBarChartWidget",
  component: VerticalBarChartWidget,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs", "experimental"],
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
