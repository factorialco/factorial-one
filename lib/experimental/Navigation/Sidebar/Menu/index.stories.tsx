import * as Icons from "@/icons/app"
import type { Meta, StoryObj } from "@storybook/react"
import { Menu } from "."

const meta = {
  component: Menu,
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <div className="w-[240px] bg-f1-background-tertiary p-3">
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
          { label: "Home", icon: Icons.Home, href: "/", exactMatch: true },
          {
            label: "Inbox",
            icon: Icons.Envelope,
            href: "/inbox",
            badge: 6,
          },
          {
            label: "Discover Factorial",
            icon: Icons.UpgradePlan,
            href: "/discover",
          },
        ],
        isRoot: true,
      },
      {
        title: "You",
        items: [
          { label: "Me", icon: Icons.Person, href: "/me" },
          { label: "Clock in", icon: Icons.Clock, href: "/clock-in" },
          { label: "Time off", icon: Icons.TimeOff, href: "/time-off" },
        ],
        isOpen: true,
      },
      {
        title: "Your company",
        items: [
          { label: "Organization", icon: Icons.Manager, href: "/organization" },
          { label: "Calendar", icon: Icons.Calendar, href: "/calendar" },
        ],
        isOpen: true,
      },
    ],
  },
}
