import type { Meta, StoryObj } from "@storybook/react"

import BarChartStory from "@/components/Charts/VBarChart/index.stories"
import { VBarChartInsight } from "."
import { containerStoryArgs } from "../storybook-utils"

const meta = {
  component: VBarChartInsight,
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
} satisfies Meta<typeof VBarChartInsight>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
