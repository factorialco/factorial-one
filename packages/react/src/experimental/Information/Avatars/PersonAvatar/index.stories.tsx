import type { Meta, StoryObj } from "@storybook/react"
import { Check } from "../../../../icons/app"
import { sizes } from "../../../../ui/avatar"
import { PersonAvatar } from "./index"

const meta: Meta<typeof PersonAvatar> = {
  component: PersonAvatar,
  title: "Avatars/PersonAvatar",
  tags: ["autodocs", "experimental"],
  argTypes: {
    size: {
      control: "select",
      options: sizes,
    },
  },
  args: {
    firstName: "Dani",
    lastName: "Moreno",
    size: "medium",
  },
} satisfies Meta<typeof PersonAvatar>

export default meta

type Story = StoryObj<typeof PersonAvatar>

export const Default: Story = {}

export const WithImage: Story = {
  args: {
    src: "https://github.com/dani-moreno.png",
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
