import type { Meta, StoryObj } from "@storybook/react"

import { DetailsItem } from "."

const meta: Meta = {
  component: DetailsItem,
  parameters: {
    tags: ["autodocs"],
  },
  args: {
    title: "Email",
    content: "alicia.keys@factorial.co",
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
