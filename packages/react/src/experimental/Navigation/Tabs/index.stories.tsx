import type { Meta, StoryObj } from "@storybook/react"
import { TabItem, Tabs } from "./index"

const tabItems: TabItem[] = [
  { label: "Overview", href: "/", index: true },
  { label: "Courses", href: "/courses" },
  { label: "Categories", href: "/categories" },
  { label: "Catalog", href: "/catalog" },
  { label: "Requests", href: "/requests" },
]

const secondaryTabItems = [
  { label: "All", href: "/courses", index: true },
  { label: "Courses", href: "/courses/new" },
  { label: "Activity", href: "/courses/activity" },
]

const meta: Meta<typeof Tabs> = {
  title: "Navigation/Tabs",
  component: Tabs,
  tags: ["autodocs", "experimental"],
  argTypes: {
    secondary: {
      control: "boolean",
    },
    embedded: {
      control: "boolean",
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    tabs: tabItems,
    secondary: false,
  },
}

export const Piled: Story = {
  args: {
    tabs: [],
  },
  parameters: {
    currentPath: "/courses",
  },
  render: () => (
    <div>
      <Tabs tabs={tabItems} />
      <Tabs secondary tabs={secondaryTabItems} />
    </div>
  ),
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

export const SingleTab: Story = {
  args: {
    tabs: [],
  },
  render: () => (
    <div>
      <Tabs tabs={[{ label: "Overview", href: "/" }]} secondary={false} />
      <Tabs tabs={[{ label: "Overview", href: "/" }]} secondary={true} />
    </div>
  ),
}

export const Embedded: Story = {
  args: {
    tabs: tabItems,
    embedded: true,
  },
}
