import { sizes } from "@/ui/avatar"
import type { Meta, StoryObj } from "@storybook/react"
import { UserAvatar } from "."

const meta: Meta<typeof UserAvatar> = {
  component: UserAvatar,
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

type Story = StoryObj<typeof UserAvatar>

export const Default: Story = {}

export const WithImage: Story = {
  args: {
    src: "https://github.com/dani-moreno.png",
  },
}
