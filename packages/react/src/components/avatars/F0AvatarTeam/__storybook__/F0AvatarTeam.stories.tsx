import { Check } from "@/icons/app"
import type { Meta, StoryObj } from "@storybook/react-vite"
import { getBaseAvatarArgTypes } from "../../BaseAvatar/__stories__/utils"
import { F0AvatarTeam } from "../F0AvatarTeam"

const meta: Meta<typeof F0AvatarTeam> = {
  component: F0AvatarTeam,
  title: "Avatars/AvatarTeam",
  tags: ["autodocs"],
  argTypes: {
    ...getBaseAvatarArgTypes([
      "size",
      "aria-label",
      "aria-labelledby",
      "badge",
    ]),
  },
  args: {
    name: "Design",
    size: "md",
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
