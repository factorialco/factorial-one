import type { Meta } from "@storybook/react"

import { AreaChartProps } from "@/components/Charts/AreaChart"
import AreaChartStory from "@/components/Charts/AreaChart/index.stories"
import { AreaChartWidget } from "."
import { containerStoryArgs, WidgetDecorator } from "../storybook-utils"

const meta: Meta<typeof AreaChartWidget> = {
  component: AreaChartWidget,
  parameters: {
    layout: "centered",
    chromatic: { diffThreshold: 0.5 },
  },
  tags: ["autodocs"],
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

export const Default = {}

export const WithYAxis = {
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

export const WithComment = {
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

export const WithBlur = {
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
