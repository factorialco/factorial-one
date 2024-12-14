import type { Meta, StoryObj } from "@storybook/react"
import { Tabs } from "."

const tabItems = [
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

const tabMultipleItems = [
  { label: "Overview", href: "/overview", index: true },
  { label: "Profile", href: "/profile" },
  { label: "Personal Information", href: "/personal-information" },
  { label: "Contracts", href: "/contracts" },
  { label: "Competencies", href: "/competencies" },
  { label: "Time planning", href: "/time-planning" },
  { label: "Language classes", href: "/language-classes" },
  { label: "Growth plans", href: "/growth-plans" },
  { label: "Performance reviews", href: "/performance-reviews" },
  { label: "CX AM Career Path", href: "/cx-am-career-path" },
  {
    label: "CX Customer Care Career Path",
    href: "/cx-customer-care-career-path",
  },
  {
    label: "CX Engagement Agent Career Path",
    href: "/cx-engagement-agent-career-path",
  },
]

const tabMultipleItemsSecondary = [
  { label: "All", href: "/profile", index: true },
  { label: "Work information", href: "/profile/work-information" },
  { label: "Workplaces", href: "/profile/workplaces" },
  { label: "Time off", href: "/profile/time-off" },
  { label: "Teams", href: "/profile/teams" },
  { label: "Custom fields", href: "/profile/custom-fields" },
  {
    label: "Face recognition settings",
    href: "/profile/face-recognition-settings",
  },
  {
    label: "Identification documents",
    href: "/profile/identification-documents",
  },
  { label: "Personal situation", href: "/profile/personal-situation" },
  { label: "Fiscal residence", href: "/profile/fiscal-residence" },
  { label: "Emergency contact", href: "/profile/emergency-contact" },
  { label: "Bank information", href: "/profile/bank-information" },
]

export const MultipleTabs: Story = {
  args: {
    tabs: [],
  },
  parameters: {
    currentPath: "/profile",
  },
  render: () => (
    <div>
      <Tabs tabs={tabMultipleItems} />
      <Tabs secondary tabs={tabMultipleItemsSecondary} />
    </div>
  ),
}
