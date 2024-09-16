import type { Meta, StoryObj } from "@storybook/react"
import { Info } from "."

const meta: Meta = {
  component: Info,
  parameters: {
    tags: ["autodocs"],
  },
  args: {
    text: "Work location",
    icon: "office",
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}

export const Long: Story = {
  args: {
    text: "Project | Subproject",
    icon: "briefcase",
  },
}
