import type { Meta, StoryObj } from "@storybook/react"

import Briefcase from "@/icons/Briefcase"
import Office from "@/icons/Office"
import { IconText } from "."

const meta: Meta = {
  component: IconText,
  parameters: {
    tags: ["autodocs"],
  },
  args: {
    text: "Work location",
    icon: Office,
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}

export const Long: Story = {
  args: {
    text: "Project | Subproject",
    icon: Briefcase,
  },
}
