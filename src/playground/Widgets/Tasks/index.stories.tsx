import type { Meta, StoryObj } from "@storybook/react"

import { TasksInsight } from "."

const meta: Meta = {
  component: TasksInsight,
  parameters: {
    tags: ["autodocs"],
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <div className="w-[388px]">
        <Story />
      </div>
    ),
  ],
  args: {
    title: "Tasks",
    data: {
      inProgressTasks: ["Migrate to new CRM"],
      pendingTasks: [
        "Connect to Slack",
        "Write changelog",
        "Product review",
        "Final conclusions",
      ],
      overdueLabel: "Overdue",
      overdueTasks: 1,
      dueLabel: "Due",
      dueTasks: 3,
      noDueLabel: "No due",
      noDueTasks: 8,
      buttonLabel: "See 16 more",
      linkUrl: "/tasks",
      linkTitle: "Tasks",
      handleNavigate: () => {},
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const NoMoreTasks: Story = {
  args: {
    data: {
      ...meta?.args?.data,
      buttonLabel: undefined,
    },
  },
}

export const EmptyState: Story = {
  args: {
    data: {
      ...meta?.args?.data,
      inProgressTasks: [],
      pendingTasks: [],
      buttonLabel: undefined,
      overdueTasks: 0,
      dueTasks: 0,
      noDueTasks: 0,
    },
  },
}
