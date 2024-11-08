import type { Meta, StoryObj } from "@storybook/react"

import { DetailsItemsList } from "."

const meta: Meta = {
  component: DetailsItemsList,
  parameters: {
    tags: ["autodocs"],
  },
  args: {
    title: "Details",
    details: [
      {
        title: "Legal entity",
        content: {
          type: "item",
          text: "Everyday Software SL",
          action: {
            type: "copy",
          },
        },
      },
      {
        title: "Workable days",
        content: {
          type: "weekdays",
          activatedDays: ["Monday", "Tuesday", "Wednesday"],
        },
        spacingAtTheBottom: true,
      },
      {
        title: "Teams",
        content: [
          {
            type: "team",
            name: "Management",
            action: {
              href: "https://google.com",
              type: "navigate",
            },
          },
          {
            type: "team",
            name: "Engineering",
            action: {
              href: "https://google.com",
              type: "navigate",
            },
          },
        ],
      },
    ],
  },
} satisfies Meta<typeof DetailsItemsList>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
