import type { Meta, StoryObj } from "@storybook/react"
import { Tabs } from "."

const tabItems = [
  { label: "Overview", href: "/", exactMatch: true },
  { label: "Courses", href: "/courses" },
  { label: "Categories", href: "/categories" },
  { label: "Catalog", href: "/catalog" },
  { label: "Requests", href: "/requests" },
]

const meta = {
  component: Tabs,
  tags: ["autodocs"],
  argTypes: {
    secondary: {
      control: "boolean",
    },
  },
} satisfies Meta<typeof Tabs>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    tabs: tabItems,
    secondary: false,
  },
}

export const Secondary: Story = {
  args: {
    tabs: tabItems,
    secondary: true,
  },
}

export const Skeleton: Story = {
  args: {
    tabs: [],
  },
  render: ({ secondary }) => <Tabs.Skeleton secondary={secondary} />,
}
