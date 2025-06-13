import type { Meta, StoryObj } from "@storybook/react-vite"
import { Check } from "../../../../icons/app"
import { sizes } from "../../../../ui/avatar"
import { CompanyAvatar } from "./index"

const meta: Meta<typeof CompanyAvatar> = {
  component: CompanyAvatar,
  title: "Avatars/CompanyAvatar",
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
    src: "/avatars/factorial.png",
  },
}

export const WithBadge: Story = {
  args: {
    src: "/avatars/factorial.png",
    badge: {
      type: "positive",
      icon: Check,
    },
  },
}
