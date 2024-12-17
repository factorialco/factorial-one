import { Check } from "@/icons/app"
import { sizes } from "@/ui/avatar"
import type { Meta, StoryObj } from "@storybook/react"
import { CompanyAvatar } from "."

const meta: Meta<typeof CompanyAvatar> = {
  component: CompanyAvatar,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: sizes,
    },
  },
  args: {
    name: "Factorial",
    size: "medium",
    "aria-label": "Factorial avatar",
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

type Story = StoryObj<typeof CompanyAvatar>

export const Default: Story = {}

export const WithImage: Story = {
  args: {
    src: "https://avatars.githubusercontent.com/u/21041797?s=48&v=4",
  },
}

export const WithBadge: Story = {
  args: {
    src: "https://avatars.githubusercontent.com/u/21041797?s=48&v=4",
    badge: {
      status: "positive",
      icon: Check,
    },
  },
}
