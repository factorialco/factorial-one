import type { Meta, StoryObj } from "@storybook/react"

import { InsightsDashboard } from "."
import { AreaInsight } from "../Types"

import AreaInsightsStoriesMeta from "../Types/Area/index.stories"

const meta = {
  component: InsightsDashboard,
  tags: ["autodocs"],
  args: {
    header: {
      title: "Some insights you can see below",
      description:
        "One can write a small description to further clarify what you're seeing. If the description is long enough, it will wrap before hitting the end of the container.",
    },
    children: (
      <>
        {Array.from({ length: 9 }).map((_, i) => (
          <AreaInsight {...AreaInsightsStoriesMeta.args} key={i} />
        ))}
      </>
    ),
  },
} satisfies Meta<typeof InsightsDashboard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
