import { color, sizes } from "@/ui/avatar"
import type { Meta, StoryObj } from "@storybook/react"
import { TeamAvatar } from "."

const meta: Meta<typeof TeamAvatar> = {
  component: TeamAvatar,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: sizes,
    },
    color: {
      control: "select",
      options: color,
    },
  },
  args: {
    name: "Design",
    size: "medium",
    color: "viridian",
  },
}

export default meta

type Story = StoryObj<typeof TeamAvatar>

export const Default: Story = {}

export const WithImage: Story = {
  args: {
    src: "https://avatars.githubusercontent.com/u/21041797?s=48&v=4",
  },
}
