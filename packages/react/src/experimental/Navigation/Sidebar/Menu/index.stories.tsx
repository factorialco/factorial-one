import type { Meta, StoryObj } from "@storybook/react"
import * as Icons from "../../../../icons/app"
import { Menu } from "./index"

const meta = {
  title: "Sidebar/Menu",
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
  tags: ["autodocs", "experimental", "no-sidebar"],
} satisfies Meta<typeof Menu>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    tree: [
      {
        id: 1,
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
            icon: Icons.Sparkles,
            href: "/discover",
          },
        ],
        isRoot: true,
        isSortable: false,
      },
      {
        id: 2,
        title: "You",
        items: [
          { label: "Me", icon: Icons.Person, href: "/me" },
          { label: "Clock in", icon: Icons.Clock, href: "/clock-in" },
          { label: "Time off", icon: Icons.PalmTree, href: "/time-off" },
        ],
        isOpen: true,
        isSortable: true,
      },
      {
        id: 3,
        title: "Your company",
        items: [
          { label: "Organization", icon: Icons.People, href: "/organization" },
          { label: "Calendar", icon: Icons.Calendar, href: "/calendar" },
        ],
        isOpen: true,
        isSortable: true,
      },
    ],
    onCollapse: (category, isOpen) => {
      console.log(
        `Category "${category.title}" is now ${isOpen ? "open" : "closed"}`
      )
    },
    onSort: (categories) => {
      console.log("Categories sorted:", categories)
    },
  },
}
