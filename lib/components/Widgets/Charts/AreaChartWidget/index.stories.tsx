import type { Meta, StoryObj } from "@storybook/react"

import AreaChartStory from "@/components/Charts/AreaChart/index.stories"
import { AreaChartWidget } from "."
import { containerStoryArgs } from "../storybook-utils"

const meta = {
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
    chart: AreaChartStory.args,
  },
  decorators: [
    (Story) => (
      <div className="w-full min-w-80">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof AreaChartWidget>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
