import type { Meta, StoryObj } from "@storybook/react-vite"
import { Check } from "../../../../icons/app"
import { sizes } from "../../../../ui/avatar"
import { TeamAvatar } from "./index"

const meta: Meta<typeof TeamAvatar> = {
  component: TeamAvatar,
  title: "Avatars/TeamAvatar",
  tags: ["autodocs", "experimental"],
  argTypes: {
    size: {
      control: "select",
      options: sizes,
    },
  },
  args: {
    name: "Design",
    size: "medium",
  },
}

export default meta

type Story = StoryObj<typeof TeamAvatar>

export const Default: Story = {}

export const WithImage: Story = {
  args: {
    src: "/avatars/team01.jpg",
  },
}

export const WithBadge: Story = {
  args: {
    badge: {
      type: "positive",
      icon: Check,
    },
  },
}
