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
      requested: [
        {
          title: "Time off",
          length: 5,
          lengthUnit: "days",
          from: "15-07",
          until: "22-07",
          color: "red",
        },
      ],
      currentAndUpcoming: [
        {
          title: "Vacation",
          length: 5,
          lengthUnit: "days",
          from: "2024-01-10",
          until: "2024-01-15",
          color: "blue",
        },
        {
          title: "Sick leave",
          length: 1,
          lengthUnit: "days",
          from: "2024-01-20",
          until: "2024-01-20",
          color: "green",
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
