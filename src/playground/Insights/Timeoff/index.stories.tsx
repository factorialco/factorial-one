import type { Meta, StoryObj } from "@storybook/react"

import { TimeOffInsight } from "."

const meta: Meta = {
  component: TimeOffInsight,
  parameters: {
    tags: ["autodocs"],
  },
  args: {
    data: {
      title: "Time off",
      subtitle: "2024",
      requestedTitle: "Requested",
      currentAndUpcomingTitle: "Current and upcoming",
      requested: [
        {
          title: "Time off",
          subtitle: "(5 days)",
          description: "15/07 - 22/07",
          color: "royalblue",
        },
      ],
      currentAndUpcoming: [
        {
          title: "Medical leave",
          subtitle: "(5 days)",
          description: "15/07 - 22/07",
          color: "pink",
        },
        {
          title: "Parental leave",
          subtitle: "(43 days)",
          description: "15/07 - 22/09",
          color: "violet",
        },
        {
          title: "Time off",
          subtitle: "(5 days)",
          description: "15/07 - 22/07",
          color: "royalblue",
        },
      ],
      cta: "See 5 more",
      link: "/timeoff",
      onNavigate: () => {},
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}

export const NoExtraEvents: Story = {
  args: {
    data: {
      ...meta?.args?.data,
      cta: undefined,
    },
  },
}
