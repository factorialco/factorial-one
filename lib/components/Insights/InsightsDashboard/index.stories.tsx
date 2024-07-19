import type { Meta, StoryObj } from "@storybook/react"

import { InsightsDashboard } from "."
import { AreaChartInsight } from "../Charts/AreaChartInsight"

import AreaInsightsStoriesMeta from "../Charts/AreaChartInsight/index.stories"
import { LineChartInsight } from "../Charts/LineChartInsight"
import LineInsightsStoriesMeta from "../Charts/LineChartInsight/index.stories"

const renderInsight = (index: number) => {
  const InsightComponents = [
    () => <AreaChartInsight {...AreaInsightsStoriesMeta.args} />,
    () => <LineChartInsight {...LineInsightsStoriesMeta.args} />,
  ]

  const Component = InsightComponents[index % InsightComponents.length]
  return <Component />
}

const meta = {
  component: InsightsDashboard,
  tags: ["autodocs"],
  args: {
    children: <>{Array.from({ length: 9 }).map((_, i) => renderInsight(i))}</>,
  },
} satisfies Meta<typeof InsightsDashboard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
export const WithTitle: Story = {
  args: {
    header: {
      title: "Some insights you can see below",
      description:
        "One can write a small description to further clarify what you're seeing. If the description is long enough, it will wrap before hitting the end of the container.",
    },
  },
}

export const Small: Story = {
  args: {
    tileSize: "sm",
  },
}

export const Large: Story = {
  args: {
    tileSize: "lg",
  },
}
