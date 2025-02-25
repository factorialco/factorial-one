import type { Meta } from "@storybook/react"

import { BarChartProps } from "@/core/components/charts/BarChart"
import BarChartStory from "@/core/components/charts/BarChart/index.stories.tsx"
import { containerStoryArgs, WidgetDecorator } from "../storybook-utils.tsx"
import { BarChartWidget } from "./index.tsx"

const meta = {
  title: "widgets/charts/BarChartWidget",
  component: BarChartWidget,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs", "experimental"],
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
