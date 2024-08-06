import type { Meta, StoryObj } from "@storybook/react"
import heart from "../../../../assets/icons/heart.svg"

import { Image } from "."

const meta = {
  component: Image,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    src: heart,
  },
} satisfies Meta<typeof Image>

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {}
