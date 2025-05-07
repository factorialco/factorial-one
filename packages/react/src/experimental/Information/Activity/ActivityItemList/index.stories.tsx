import {
  Folder as FolderIcon,
  Money as MoneyIcon,
  PalmTree as PalmTreeIcon,
} from "@/icons/app"
import type { Meta, StoryObj } from "@storybook/react"
import { ActivityItemList } from "./index"

const meta: Meta<typeof ActivityItemList> = {
  decorators: [
    (Story) => (
      <div className="w-[440px]">
        <Story />
      </div>
    ),
  ],
  component: ActivityItemList,
  title: "Information/Activity/ActivityItemList",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs", "experimental", "no-sidebar"],
}

export default meta

type Story = StoryObj<typeof ActivityItemList>

const ITEMS = new Array(10).fill(null).map((_, index) => ({
  id: index.toString(),
  title: `Activity Item ${index + 1}`,
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  category: (() => {
    const categories = ["Time off", "Documents", "Payroll"]
    return categories[index % categories.length]
  })(),
  icon: (() => {
    const icons = [PalmTreeIcon, FolderIcon, MoneyIcon]
    return icons[index % icons.length]
  })(),
  createdAt: (() => {
    const today = new Date()

    const groups = [
      today, // today
      new Date(today.getTime() - 24 * 60 * 60 * 1000), // yesterday
      new Date(today.getTime() - 5 * 24 * 60 * 60 * 1000), // last week
      new Date(today.getTime() - 20 * 24 * 60 * 60 * 1000), // last month
      new Date(today.getTime() - 60 * 24 * 60 * 60 * 1000), // other
    ]

    return groups[index % groups.length]
  })(),
  isUnread: index === 0,
  onClick: () => {},
}))

export const Default: Story = {
  args: {
    items: ITEMS,
  },
}

export const Skeleton: Story = {
  args: {},
  render: () => <ActivityItemList.Skeleton />,
}
