import type { Meta, StoryObj } from "@storybook/react"

import { DetailsItemsList } from "./index"

const meta: Meta = {
  title: "List/DetailsItemsList",
  component: DetailsItemsList,
  tags: ["autodocs", "experimental"],
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
          activatedDays: [0, 1, 2],
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
              href: "https://cdn.memegenerator.es/imagenes/memes/full/32/48/32486607.jpg",
              type: "navigate",
            },
          },
          {
            type: "team",
            name: "Engineering",
            action: {
              href: "https://cdn.memegenerator.es/imagenes/memes/full/32/48/32486607.jpg",
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
