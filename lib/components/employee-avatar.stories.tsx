import type { Meta, StoryObj } from "@storybook/react"

import { sizes } from "@/foundations/avatar"

import { EmployeeAvatar } from "./employee-avatar"

const meta = {
  component: EmployeeAvatar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    size: "medium",
  },
  argTypes: {
    size: {
      control: {
        type: "select",
      },
      options: sizes,
    },
  },
} satisfies Meta<typeof EmployeeAvatar>

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {
  args: {
    firstName: "Dani",
    lastName: "Moreno",
    job: "Product Designer",
    image: "https://github.com/dani-moreno.png",
  },
}
