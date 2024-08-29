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
            subtitle: "(2 days)",
            description: "02/07 - 04/07",
            color: "orange",
            isPending: false,
          },
          {
            title: "Retrospective",
            subtitle: "(1 day)",
            description: "06/07 - 06/07",
            color: "green",
            isPending: false,
          },
          {
            title: "Team Building",
            subtitle: "(3 days)",
            description: "10/07 - 12/07",
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
            subtitle: "(2 days)",
            description: "02/07 - 04/07",
            color: "lightblue",
            isPending: false,
          },
          {
            title: "Retrospective",
            subtitle: "(1 day)",
            description: "06/07 - 06/07",
            color: "beige",
            isPending: false,
          },
          {
            title: "Team Building",
            subtitle: "(3 days)",
            description: "10/07 - 12/07",
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
