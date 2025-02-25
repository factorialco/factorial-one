import { sizes } from "@/core/internal/avatar.tsx"
import { Check } from "@/icons/app"
import type { Meta, StoryObj } from "@storybook/react"
import { CompanyAvatar } from "./index.tsx"

const meta: Meta<typeof CompanyAvatar> = {
  component: CompanyAvatar,
  title: "avatars/CompanyAvatar",
  tags: ["autodocs", "experimental"],
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
      type: "positive",
      icon: Check,
    },
  },
}
