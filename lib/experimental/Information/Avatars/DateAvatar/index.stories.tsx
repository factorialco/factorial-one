import type { Meta, StoryObj } from "@storybook/react"
import { DateAvatar } from "."

const meta: Meta<typeof DateAvatar> = {
  component: DateAvatar,
  tags: ["autodocs"],
}

export default meta

type Story = StoryObj<typeof DateAvatar>

export const Default: Story = {
  args: {
    date: new Date(2024, 0, 15),
  },
}
