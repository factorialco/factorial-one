import EllipsisHorizontal from "@/icons/EllipsisHorizontal"
import Settings from "@/icons/Settings"

import type { Meta, StoryObj } from "@storybook/react"
import Header from "."

const meta: Meta<typeof Header> = {
  component: Header,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Header>

export const Default: Story = {
  args: {
    module: {
      name: "Module",
      href: "/module",
    },
    tree: [
      { label: "Submodule", href: "/module/submodule" },
      { label: "Page", href: "/module/submodule/page" },
    ],
    actions: [
      {
        label: "Settings",
        icon: Settings,
        onClick: () => console.log("Settings clicked"),
      },
      {
        label: "More options",
        icon: EllipsisHorizontal,
        onClick: () => console.log("More clicked"),
      },
    ],
  },
}

export const FirstLevel: Story = {
  args: {
    module: {
      name: "Module",
      href: "/module",
    },
  },
}
