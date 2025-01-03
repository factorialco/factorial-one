import type { Meta, StoryObj } from "@storybook/react"
import Checkbox from "."

const meta = {
  component: Checkbox,
  tags: ["autodocs"],
  args: {},
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: "Checkbox",
  },
}
