import type { Meta, StoryObj } from "@storybook/react"

import BarChartStory from "@/components/Charts/BarChart/index.stories"
import { BarChartInsight } from "."
import { containerStoryArgs } from "../storybook-utils"

const meta = {
  component: BarChartInsight,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    ...containerStoryArgs,
    header: {
      ...containerStoryArgs.header,
      title: "A bar chart",
    },
    chart: BarChartStory.args,
  },
} satisfies Meta<typeof BarChartInsight>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
