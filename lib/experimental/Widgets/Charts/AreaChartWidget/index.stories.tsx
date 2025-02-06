import type { Meta, StoryObj } from "@storybook/react"

import { AreaChartProps } from "@/components/Charts/AreaChart"
import AreaChartStory from "@/components/Charts/AreaChart/index.stories"
import { AreaChartWidget } from "."
import { containerStoryArgs, WidgetDecorator } from "../storybook-utils"

const meta: Meta<typeof AreaChartWidget> = {
  title: "Widgets/Charts/AreaChartWidget",
  component: AreaChartWidget,
  tags: ["autodocs", "alpha"],
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
