import type { Meta, StoryObj } from "@storybook/react"
import { Menu } from "."

const meta = {
  component: Menu,
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <div className="w-72 bg-f1-background-secondary/50 p-3">
        <Story />
      </div>
    ),
  ],
  tags: ["autodocs"],
} satisfies Meta<typeof Menu>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    tree: [
      {
        title: "Root",
        items: [
          { label: "Home", icon: "Home", href: "/home", isActive: true },
          {
            label: "Inbox",
            icon: "Envelope",
            href: "/inbox",
            badge: 6,
          },
          {
            label: "Discover Factorial",
            icon: "UpgradePlan",
            href: "/discover",
          },
        ],
        isRoot: true,
      },
      {
        title: "You",
        items: [
          { label: "Me", icon: "Person", href: "/me" },
          { label: "Clock in", icon: "Clock", href: "/clock-in" },
          { label: "Time off", icon: "TimeOff", href: "/time-off" },
        ],
        isOpen: true,
      },
      {
        title: "Your company",
        items: [
          { label: "Organization", icon: "Manager", href: "/organization" },
          { label: "Calendar", icon: "Calendar", href: "/calendar" },
        ],
        isOpen: true,
      },
    ],
  },
}
