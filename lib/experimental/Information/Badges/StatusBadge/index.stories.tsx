import * as Icons from "@/icons/app"
import type { Meta, StoryObj } from "@storybook/react"
import { StatusBadge } from "."

const meta: Meta<typeof StatusBadge> = {
  component: StatusBadge,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
}

export default meta

type Story = StoryObj<typeof StatusBadge>

export const Default: Story = {
  args: {
    status: "neutral",
    icon: Icons.Placeholder,
    size: "md",
  },
}
