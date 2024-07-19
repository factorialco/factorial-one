import type { Meta, StoryObj } from "@storybook/react"

import AreaChartStory from "@/components/Charts/AreaChart/index.stories"
import { LineChartInsight } from "."
import { containerStoryArgs } from "../storybook-utils"

const meta = {
  component: LineChartInsight,
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
    chart: AreaChartStory.args,
  },
} satisfies Meta<typeof LineChartInsight>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
