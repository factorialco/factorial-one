import type { Meta } from "@storybook/react"

import AreaChartStory from "@/core/components/charts/AreaChart/index.stories.tsx"
import { LineChartProps } from "@/core/components/charts/LineChart"
import { containerStoryArgs, WidgetDecorator } from "../storybook-utils.tsx"
import { LineChartWidget } from "./index.tsx"

const meta = {
  title: "widgets/charts/LineChartWidget",
  component: LineChartWidget,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs", "experimental"],
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
