import { Check } from "@/icons/app"
import { sizes } from "@/ui/avatar"
import type { Meta, StoryObj } from "@storybook/react-vite"
import { F0AvatarTeam } from "../F0AvatarTeam"

const meta: Meta<typeof F0AvatarTeam> = {
  component: F0AvatarTeam,
  title: "Avatars/AvatarTeam",
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

type Story = StoryObj<typeof F0AvatarTeam>

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
