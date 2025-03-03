import type { Meta, StoryObj } from "@storybook/react"
import { AIBox } from "."

const meta: Meta<typeof AIBox> = {
  title: "AI/Popover",
  component: AIBox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    hiddenBorder: {
      control: "boolean",
      defaultValue: true,
    },
  },
}

export default meta
type Story = StoryObj<typeof AIBox>

export const Default: Story = {}
