import type { Meta, StoryObj } from "@storybook/react"

import { Details } from "."

const meta: Meta = {
  component: Details,
  parameters: {
    tags: ["autodocs"],
  },
  args: {
    details: [
      {
        title: "Email",
        content: "alicia.keys@factorial.co",
      },
      {
        title: "Phone",
        content: "(120) 687-3123",
      },
      {
        title: "Legal entity",
        content: "Everyday Software SL",
      },
      {
        title: "Start date",
        content: "01/01/2023",
      },
      {
        title: "Contract type",
        content: "Full time",
      },
    ],
    activatedDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
