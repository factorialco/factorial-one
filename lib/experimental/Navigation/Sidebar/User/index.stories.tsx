import * as Icons from "@/icons/app"
import type { Meta, StoryObj } from "@storybook/react"
import { User } from "."

const meta = {
  title: "Sidebar/User",
  component: User,
  tags: ["autodocs", "experimental", "no-sidebar"],
} satisfies Meta<typeof User>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    firstName: "Dani",
    lastName: "Moreno",
    avatarUrl: "https://github.com/dani-moreno.png",
    options: [
      { label: "Preferences", href: "/preferences", icon: Icons.Sliders },
      { label: "Notifications", href: "/notifications", icon: Icons.Bell },
      "separator",
      { label: "Logout", href: "/logout", icon: Icons.Exit, critical: true },
    ],
  },
}
