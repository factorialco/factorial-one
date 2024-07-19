import type { Meta, StoryObj } from "@storybook/react"

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
    chart: {
      dataConfig: {
        desktop: {
          label: "Desktop",
          color: "hsl(var(--chart-1))",
        },
        mobile: {
          label: "Mobile",
          color: "hsl(var(--chart-2))",
        },
      },
      xAxis: {
        hide: false,
        tickFormatter: (value: string) => value.slice(0, 3),
      },
      data: [
        { label: "January", values: { desktop: 186, mobile: 120 } },
        { label: "February", values: { desktop: 305, mobile: 180 } },
        { label: "March", values: { desktop: 237, mobile: 150 } },
        { label: "April", values: { desktop: 73, mobile: 90 } },
        { label: "May", values: { desktop: 209, mobile: 160 } },
        { label: "June", values: { desktop: 214, mobile: 200 } },
      ],
    },
  },
} satisfies Meta<typeof LineChartInsight>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
