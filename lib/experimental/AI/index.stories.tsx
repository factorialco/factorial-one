import type { Meta, StoryObj } from "@storybook/react"
import { AIBox } from "."

const meta: Meta<typeof AIBox> = {
  title: "AIBox",
  component: AIBox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof AIBox>

export const Default: Story = {}
