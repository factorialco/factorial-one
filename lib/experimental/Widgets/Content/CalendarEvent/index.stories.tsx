import type { Meta, StoryObj } from "@storybook/react"

import { Building, Coffee, Comment, Pin, Replace } from "@/icons/app"
import { CalendarEvent } from "."

const meta: Meta = {
  component: CalendarEvent,
  parameters: {
    layout: "centered",
    tags: ["autodocs"],
  },
  args: {
    label: "Overtime",
    title: "Shift name",
    subtitle: "Subtitle",
    description: "14:00 - 20:00",
    color: "orange",
    isPending: false,
    tags: [
      {
        label: "Break",
        description: "10:00 AM",
        icon: Coffee,
      },
      {
        label: "Extra info",
        description: "Some extra info about the shift",
        icon: Comment,
      },
      {
        label: "Office",
        description: "Pere IV Office",
        icon: Building,
      },
      {
        label: "Workplace",
        description: "Barcelona",
        icon: Pin,
      },
    ],
    action: {
      title: "Swap shift",
      icon: Replace,
      onClick: () => {},
    },
    fromDate: new Date(2024, 6, 15),
    toDate: new Date(2024, 6, 22),
  },
  decorators: [
    (Story) => (
      <div className="w-96">
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}

export const NoBackground: Story = {
  args: {
    showBackground: false,
  },
}
