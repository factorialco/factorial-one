import type { Meta, StoryObj } from "@storybook/react"
import ProductCard from "./index"

import Megaphone from "@/icons/app/Megaphone"
import { ComponentProps } from "react"

const meta: Meta<typeof ProductCard> = {
  title: "ProductCard",
  component: ProductCard,
  tags: ["autodocs", "experimental"],
  parameters: {
    layout: "fullscreen",
  },
  decorators: [(Story) => <Story />],
}

export default meta
type Story = StoryObj<ComponentProps<typeof ProductCard>>

export const Default: Story = {
  args: {
    isVisible: true,
    title: "Benefits",
    description:
      "Improve your team’s salary without impacting your budget through flexible compensation.",
    onClick: () => {
      alert("onClick")
    },
    onClose: () => {
      alert("onClose")
    },
    icon: Megaphone,
    dismissable: false,
  },
}

export const Dismissable: Story = {
  args: {
    ...Default.args,
    dismissable: true,
  },
}
