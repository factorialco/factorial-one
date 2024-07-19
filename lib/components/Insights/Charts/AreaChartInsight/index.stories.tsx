import type { Meta, StoryObj } from "@storybook/react"

import AreaChartStory from "@/components/Charts/AreaChart/index.stories"
import { AreaChartInsight } from "."
import { containerStoryArgs } from "../storybook-utils"

const meta = {
  component: AreaChartInsight,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    ...containerStoryArgs,
    chart: AreaChartStory.args,
  },
} satisfies Meta<typeof AreaChartInsight>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
