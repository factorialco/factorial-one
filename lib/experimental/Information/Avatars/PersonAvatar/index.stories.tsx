import { Check } from "@/icons/app"
import { sizes } from "@/ui/avatar"
import type { Meta, StoryObj } from "@storybook/react"
import { PersonAvatar } from "."

const meta: Meta<typeof PersonAvatar> = {
  component: PersonAvatar,
  tags: ["autodocs"],
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
  parameters: {
    a11y: {
      config: {
        rules: [
          {
            id: "color-contrast",
            enabled: false,
          },
        ],
      },
    },
  },
}

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
