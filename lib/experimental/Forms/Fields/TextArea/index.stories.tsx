import type { Meta, StoryObj } from "@storybook/react"
import { Textarea } from "."

const meta = {
  title: "TextArea",
  component: Textarea,
  tags: ["autodocs", "alpha"],
  args: {
    disabled: false,
    placeholder: "Placeholder text here",
  },
} satisfies Meta<typeof Textarea>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    placeholder: "Placeholder text here",
  },
}
