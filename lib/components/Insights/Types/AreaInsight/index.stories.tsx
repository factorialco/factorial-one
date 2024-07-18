import type { Meta, StoryObj } from "@storybook/react"

import AreaChartStory from "@/components/Charts/Area/index.stories"
import { AreaInsight } from "."
import ContainerStory from "../../Container/index.stories"

const meta = {
  component: AreaInsight,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    ...ContainerStory.args,
    chart: AreaChartStory.args,
  },
} satisfies Meta<typeof AreaInsight>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
