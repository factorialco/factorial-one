import * as Icons from "@/icons/animated"
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
          {
            label: "Home",
            icon: Icons.HomeAnimated,
            href: "/",
            exactMatch: true,
          },
          {
            label: "Inbox",
            icon: Icons.HomeAnimated,
            href: "/inbox",
            badge: 6,
          },
          {
            label: "Discover Factorial",
            icon: Icons.RocketAnimated,
            href: "/discover",
          },
        ],
        isRoot: true,
      },
      {
        title: "You",
        items: [
          { label: "Me", icon: Icons.PersonAnimated, href: "/me" },
          {
            label: "Clock in",
            icon: Icons.ClockAnimated,
            href: "/clock-in",
          },
          {
            label: "Time off",
            icon: Icons.PalmTreeAnimated,
            href: "/time-off",
          },
          {
            label: "Tasks",
            icon: Icons.CheckCircleAnimated,
            href: "/tasks",
          },
          {
            label: "My documents",
            icon: Icons.FolderUserAnimated,
            href: "/my-documents",
          },
        ],
        isOpen: true,
      },
      {
        title: "Your company",
        items: [
          {
            label: "Performance",
            icon: Icons.GraphAnimated,
            href: "/performance",
          },
          {
            label: "Finance",
            icon: Icons.MoneyBagAnimated,
            href: "/finance",
          },
          {
            label: "Software",
            icon: Icons.DesktopAnimated,
            href: "/software",
          },
          {
            label: "Settings",
            icon: Icons.SettingsAnimated,
            href: "/settings",
          },
        ],
        isOpen: true,
      },
    ],
  },
}
