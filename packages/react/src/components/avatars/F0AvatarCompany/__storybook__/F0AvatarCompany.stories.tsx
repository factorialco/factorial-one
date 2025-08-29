import { sizes } from "@/ui/avatar"
import type { Meta, StoryObj } from "@storybook/react-vite"
import { F0AvatarCompany } from "../F0AvatarCompany"

const meta: Meta<typeof F0AvatarCompany> = {
  component: F0AvatarCompany,
  title: "Avatars/AvatarCompany",
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

type Story = StoryObj<typeof F0AvatarCompany>

export const Default: Story = {}

export const WithImage: Story = {
  args: {
    src: "/avatars/factorial.png",
  },
}

export const WithModuleBadge: Story = {
  args: {
    src: "/avatars/factorial.png",
    badge: {
      type: "module",
      module: "inbox",
    },
  },
}
