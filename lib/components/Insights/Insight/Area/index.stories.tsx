import type { Meta, StoryObj } from "@storybook/react"

import { AreaInsight } from "."

const meta = {
  component: AreaInsight,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    header: {
      title: "Area Insight",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    footer: {
      trend: "Increased by 12%",
      time: "Since last month",
    },
    chartData: [
      { month: "Jan", mobile: 4000, desktop: 2400 },
      { month: "Feb", mobile: 3000, desktop: 1398 },
      { month: "Mar", mobile: 2000, desktop: 9800 },
      { month: "Apr", mobile: 2780, desktop: 3908 },
      { month: "May", mobile: 1890, desktop: 4800 },
      { month: "Jun", mobile: 2390, desktop: 3800 },
      { month: "Jul", mobile: 3490, desktop: 4300 },
      { month: "Aug", mobile: 3490, desktop: 4300 },
      { month: "Sep", mobile: 3490, desktop: 4300 },
      { month: "Oct", mobile: 3490, desktop: 4300 },
      { month: "Nov", mobile: 3490, desktop: 4300 },
      { month: "Dec", mobile: 3490, desktop: 4300 },
    ],
    config: {
      desktop: {
        label: "Desktop",
        color: "hsl(var(--chart-1))",
      },
      mobile: {
        label: "Mobile",
        color: "hsl(var(--chart-2))",
      },
    },
  },
} satisfies Meta<typeof AreaInsight>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
