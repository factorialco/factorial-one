import type { Meta, StoryObj } from "@storybook/react"
import { Navigation } from "./index"

const meta: Meta<typeof Navigation> = {
  component: Navigation,
  tags: ["autodocs"],
}

export default meta

type Story = StoryObj<typeof Navigation>

export const Default: Story = {
  args: {
    current: 1,
    total: 5,
    onPrevious: () => console.log("Previous clicked"),
    onNext: () => console.log("Next clicked"),
  },
}
