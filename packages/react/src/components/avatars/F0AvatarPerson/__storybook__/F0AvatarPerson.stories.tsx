import { Check } from "@/icons/app"
import type { Meta, StoryObj } from "@storybook/react-vite"
import { getBaseAvatarArgTypes } from "../../BaseAvatar/__stories__/utils"
import { F0AvatarPerson } from "../F0AvatarPerson"

const meta: Meta<typeof F0AvatarPerson> = {
  component: F0AvatarPerson,
  title: "Avatars/AvatarPerson",
  tags: ["autodocs"],
  argTypes: {
    ...getBaseAvatarArgTypes([
      "size",
      "aria-label",
      "aria-labelledby",
      "badge",
    ]),
  },
} satisfies Meta<typeof F0AvatarPerson>

export default meta

type Story = StoryObj<typeof F0AvatarPerson>

export const Default: Story = {
  args: {
    firstName: "Dani",
    lastName: "Moreno",
    size: "md",
  },
}

export const WithImage: Story = {
  args: {
    ...Default.args,
    src: "/avatars/person04.jpg",
  },
}

export const WithBadge: Story = {
  args: {
    ...Default.args,
    badge: {
      type: "positive",
      icon: Check,
    },
  },
}

export const WithBadgeTooltip: Story = {
  args: {
    ...Default.args,
    badge: {
      type: "positive",
      icon: Check,
      tooltip: "This is a tooltip",
    },
  },
}
