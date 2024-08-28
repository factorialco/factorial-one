import type { Meta, StoryObj } from "@storybook/react"

import { EventsListGroup } from "."

const meta: Meta = {
  component: EventsListGroup,
  parameters: {
    tags: ["autodocs"],
  },
  args: {
    eventsGroup: [
      {
        title: "First Events",
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
      {
        title: "Second Events",
        events: [
          {
            title: "Product Review",
            length: 2,
            lengthUnit: "days",
            from: "02/07",
            until: "04-07",
            color: "lightblue",
            isPending: false,
          },
          {
            title: "Retrospective",
            length: 1,
            lengthUnit: "day",
            from: "06-07",
            until: "06-07",
            color: "beige",
            isPending: false,
          },
          {
            title: "Team Building",
            length: 3,
            lengthUnit: "days",
            from: "10-07",
            until: "13-07",
            color: "grey",
            isPending: false,
          },
        ],
      },
    ],
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
