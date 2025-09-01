import type { Meta, StoryObj } from "@storybook/react-vite"
import { F0AvatarDate } from "../F0AvatarDate"

const meta: Meta<typeof F0AvatarDate> = {
  component: F0AvatarDate,
  title: "Avatars/AvatarDate",
  tags: ["autodocs"],
}

export default meta

type Story = StoryObj<typeof F0AvatarDate>

// Fixed date for the example stories
const exampleDate = new Date(2024, 11, 13, 20, 0)

export const Default: Story = {
  args: {
    date: exampleDate,
  },
}
