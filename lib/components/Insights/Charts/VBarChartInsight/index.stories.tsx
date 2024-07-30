import type { Meta, StoryObj } from "@storybook/react"

import BarChartStory from "@/components/Charts/VerticalBarChart/index.stories"
import { VerticalBarChartInsight } from "."
import { containerStoryArgs } from "../storybook-utils"

const meta = {
  component: VerticalBarChartInsight,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    ...containerStoryArgs,
    header: {
      ...containerStoryArgs.header,
      title: "A VBar chart",
    },
    chart: BarChartStory.args,
  },
} satisfies Meta<typeof VerticalBarChartInsight>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
