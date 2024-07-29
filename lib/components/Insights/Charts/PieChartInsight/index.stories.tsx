import type { Meta, StoryObj } from "@storybook/react"

import { PieChartInsight } from "."
import { containerStoryArgs } from "../storybook-utils"

const meta = {
  component: PieChartInsight,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    ...containerStoryArgs,
    header: {
      ...containerStoryArgs.header,
      title: "A pie chart",
    },
    chart: {
      dataConfig: {
        january: {
          label: "January",
          color: "hsl(var(--chart-1))",
        },
        february: {
          label: "February",
          color: "hsl(var(--chart-2))",
        },
        march: {
          label: "March",
          color: "hsl(var(--chart-3))",
        },
        april: {
          label: "April",
          color: "hsl(var(--chart-4))",
        },
        may: {
          label: "May",
          color: "hsl(var(--chart-5))",
        },
        june: {
          label: "June",
          color: "hsl(var(--chart-6))",
        },
      },
      data: [
        { label: "january", value: 186 },
        { label: "february", value: 305 },
        { label: "march", value: 237 },
        { label: "april", value: 73 },
        { label: "may", value: 209 },
        { label: "june", value: 214 },
      ],
    },
  },
} satisfies Meta<typeof PieChartInsight>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
