import type { Meta, StoryObj } from "@storybook/react"

import { InsightsDashboard } from "."
import { AreaChartInsight } from "../Types/AreaChartInsight"

import AreaInsightsStoriesMeta from "../Types/AreaChartInsight/index.stories"

const meta = {
  component: InsightsDashboard,
  tags: ["autodocs"],
  args: {
    children: (
      <>
        {Array.from({ length: 9 }).map((_, i) => (
          <AreaChartInsight {...AreaInsightsStoriesMeta.args} key={i} />
        ))}
      </>
    ),
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
