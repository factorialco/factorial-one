import type { Meta, StoryObj } from "@storybook/react"
import { User } from "."

const meta = {
  component: User,
  tags: ["autodocs"],
} satisfies Meta<typeof User>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    firstName: "Dani",
    lastName: "Moreno",
    avatarUrl: "https://github.com/dani-moreno.png",
    options: [
      { label: "Preferences", href: "/preferences" },
      { label: "Notifications", href: "/notifications" },
      { label: "Logout", href: "/logout" },
    ],
  },
}
