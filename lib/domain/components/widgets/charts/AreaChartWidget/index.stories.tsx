import type { Meta, StoryObj } from "@storybook/react"

import { AreaChartProps } from "@/core/components/charts/AreaChart"
import AreaChartStory from "@/core/components/charts/AreaChart/index.stories.tsx"
import { containerStoryArgs, WidgetDecorator } from "../storybook-utils.tsx"
import { AreaChartWidget } from "./index.tsx"

const meta: Meta<typeof AreaChartWidget> = {
  title: "widgets/charts/AreaChartWidget",
  component: AreaChartWidget,
  tags: ["autodocs", "experimental"],
  parameters: {
    layout: "centered",
    chromatic: { diffThreshold: 0.5 },
  },
  args: {
    ...containerStoryArgs,
    header: {
      ...containerStoryArgs.header,
      title: "An area chart",
    },
    chart: AreaChartStory.args as AreaChartProps,
  },
  decorators: [WidgetDecorator],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithYAxis: Story = {
  args: {
    header: {
      ...containerStoryArgs.header,
      title: "An area chart",
    },
    chart: {
      ...(AreaChartStory.args as AreaChartProps),
      yAxis: {
        hide: false,
      },
    },
  },
}

export const WithComment: Story = {
  args: {
    header: {
      ...containerStoryArgs.header,
      title: "An area chart",
      comment: "44.000 $",
    },
    chart: {
      ...(AreaChartStory.args as AreaChartProps),
      yAxis: {
        hide: false,
      },
    },
  },
}

export const WithBlur: Story = {
  args: {
    canBeBlurred: true,
    header: {
      ...containerStoryArgs.header,
      title: "An area chart",
      comment: "44.000 $",
    },
    chart: {
      ...(AreaChartStory.args as AreaChartProps),
      yAxis: {
        hide: false,
      },
    },
  },
}
