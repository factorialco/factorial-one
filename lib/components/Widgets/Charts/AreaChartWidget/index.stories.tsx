import type { Meta } from "@storybook/react"

import { AreaChartProps } from "@/components/Charts/AreaChart"
import AreaChartStory from "@/components/Charts/AreaChart/index.stories"
import { AreaChartWidget } from "."
import { containerStoryArgs } from "../storybook-utils"

const meta: Meta<typeof AreaChartWidget> = {
  component: AreaChartWidget,
  parameters: {
    layout: "centered",
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
  decorators: [
    (Story) => (
      <div className="w-full min-w-80">
        <Story />
      </div>
    ),
  ],
}

export default meta

export const Default = {}

export const WithComment = {
  args: {
    header: {
      ...containerStoryArgs.header,
      title: "An area chart",
      comment: "A comment",
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
    hasBlur: true,
    header: {
      ...containerStoryArgs.header,
      title: "An area chart",
      comment: "A comment",
      isBlur: true,
    },
    chart: {
      ...(AreaChartStory.args as AreaChartProps),
      yAxis: {
        hide: false,
      },
    },
  },
}
