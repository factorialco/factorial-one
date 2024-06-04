import type { Meta, StoryObj } from "@storybook/react"
import { Textarea } from "."

const meta = {
  component: Textarea,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    disabled: false,
    placeholder: "Placeholder text here",
    rows: 10,
    cols: 50,
  },
  argTypes: {
    value: {
      control: { rows: 20, cols: 50 },
    },
  },
} satisfies Meta<typeof Textarea>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    placeholder: "Placeholder text here",
  },
}
