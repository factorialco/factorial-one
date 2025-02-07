import type { Meta, StoryObj } from "@storybook/react"

import { DetailsItemsList } from "."

const meta: Meta = {
  title: "DetailsItemsList",
  component: DetailsItemsList,
  tags: ["autodocs", "alpha"],
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
        title: "Manager",
        content: {
          type: "person",
          firstName: "Saul",
          lastName: "Dominguez",
          avatarUrl: "https://github.com/sauldom102.png",
          action: {
            type: "navigate",
            href: "",
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
