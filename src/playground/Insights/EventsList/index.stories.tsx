import type { Meta, StoryObj } from "@storybook/react"

import { EventsList } from "."

const meta: Meta = {
  component: EventsList,
  parameters: {
    tags: ["autodocs"],
  },
  args: {
    title: "Events",
    events: [
      {
        title: "Product Review",
        length: 2,
        lengthUnit: "days",
        from: "02/07",
        until: "04-07",
        color: "orange",
        isPending: false,
      },
      {
        title: "Retrospective",
        length: 1,
        lengthUnit: "day",
        from: "06-07",
        until: "06-07",
        color: "green",
        isPending: false,
      },
      {
        title: "Team Building",
        length: 3,
        lengthUnit: "days",
        from: "10-07",
        until: "13-07",
        color: "blue",
        isPending: false,
      },
    ],
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
