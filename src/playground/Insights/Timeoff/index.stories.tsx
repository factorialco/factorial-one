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
          color: "royalblue",
        },
      ],
      currentAndUpcoming: [
        {
          title: "Medical leave",
          length: 5,
          lengthUnit: "days",
          from: "15-07",
          until: "22-07",
          color: "pink",
        },
        {
          title: "Parental leave",
          length: 43,
          lengthUnit: "days",
          from: "15-07",
          until: "22-09",
          color: "violet",
        },
        {
          title: "Time off",
          length: 5,
          lengthUnit: "days",
          from: "15-07",
          until: "22-07",
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

export const Empty: Story = {
  args: {
    data: {
      ...meta?.args?.data,
      requested: [],
      currentAndUpcoming: [],
      cta: undefined,
    },
  },
}

export const NoExtraEvents: Story = {
  args: {
    data: {
      ...meta?.args?.data,
      cta: undefined,
    },
  },
}
