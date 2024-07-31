import type { Meta, StoryObj } from "@storybook/react"

import { User } from "@/icons"
import { Breadcrumb } from "."

const meta = {
  component: Breadcrumb,
  tags: ["autodocs"],
} satisfies Meta<typeof Breadcrumb>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    route: "Employees",
    title: "Alba Horneros",
    icon: User,
  },
}
