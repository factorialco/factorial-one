import type { Meta, StoryObj } from "@storybook/react-vite"
import { DateAvatar } from "./index"

const meta: Meta<typeof DateAvatar> = {
  component: DateAvatar,
  title: "Avatars/DateAvatar",
  tags: ["autodocs", "experimental"],
}

export default meta

type Story = StoryObj<typeof DateAvatar>

// Fixed date for the example stories
const exampleDate = new Date(2024, 11, 13, 20, 0)

export const Default: Story = {
  args: {
    date: exampleDate,
  },
}
