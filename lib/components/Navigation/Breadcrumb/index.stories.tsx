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
    routes: [
      { title: "Employees", url: "/employees" },
      { title: "Engineers", url: "/engineers" },
    ],
    title: "Alba Horneros",
    icon: User,
  },
}
