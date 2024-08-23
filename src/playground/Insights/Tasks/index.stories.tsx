import type { Meta, StoryObj } from "@storybook/react"

import { TasksInsight } from "."

const meta: Meta = {
  component: TasksInsight,
  parameters: {
    tags: ["autodocs"],
  },
  args: {
    title: "Tasks",
    data: {
      tasks: [
        "Migrate to new CRM",
        "Connect to Slack",
        "Write changelog",
        "Product review",
        "Final conclusions for a very long text that doesnt fit",
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
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
