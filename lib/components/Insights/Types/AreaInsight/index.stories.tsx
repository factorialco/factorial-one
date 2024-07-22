import type { Meta, StoryObj } from "@storybook/react"

import { AreaInsight, AreaProps } from "."

const Component = AreaInsight

const dataConfig = {
  score: {
    label: "Score",
  },
}

const meta = {
  component: Component,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    xAxis: {
      hide: false,
    },
    yAxis: {
      hide: false,
      tickCount: 3,
    },
    data: [
      { label: "Q1 24", values: { score: 1.2 } },
      { label: "Q2 24", values: { score: 1.7 } },
      { label: "Q3 24", values: { score: 2.1 } },
      { label: "Q4 24", values: { score: 3 } },
      { label: "Q1 25", values: { score: 3.4 } },
      { label: "Q2 25", values: { score: 4.2 } },
      { label: "Q3 25", values: { score: 4.9 } },
    ],
    dataConfig,
    header: {
      title: "3,5 - Meets expectations",
      description: "Performance evolution",
    },
    showLegend: true,
  } satisfies AreaProps<typeof dataConfig>,
} satisfies Meta<typeof Component>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
