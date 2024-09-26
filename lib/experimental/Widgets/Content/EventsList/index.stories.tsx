import type { Meta, StoryObj } from "@storybook/react"

import { EventsList } from "."

const meta: Meta = {
  component: EventsList,
  parameters: {
    layout: "centered",
    tags: ["autodocs"],
  },
  args: {
    title: "Events",
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
  decorators: [
    (Story) => (
      <div className="w-64">
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}

export const NoTitle: Story = {
  args: {
    title: undefined,
  },
}
