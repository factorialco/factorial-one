import type { Meta, StoryObj } from "@storybook/react"
import { useState } from "react"
import { OverflowList } from "./overflow-list"

const meta = {
  title: "Components/OverflowList",
  component: OverflowList,
  tags: ["autodocs", "internal"],
  decorators: [
    (Story) => {
      const [containerWidth, setContainerWidth] = useState(640)
      return (
        <>
          <div className="w-full gap-4">
            <div
              className="rounded bg-f1-background-tertiary p-3"
              style={{ width: `${containerWidth}px` }}
            >
              <Story />
            </div>
          </div>
          <div className="w-full pt-4">
            <input
              type="range"
              min="100"
              max="1000"
              value={containerWidth}
              onChange={(e) => setContainerWidth(Number(e.target.value))}
            />
          </div>
        </>
      )
    },
  ],
} satisfies Meta<typeof OverflowList>

export default meta
type Story = StoryObj<typeof meta>

// Define the task type
interface Task {
  id: number
  name: string
  status: string
  dueDate: string
}

export const Default: Story = {
  args: {
    items: [
      {
        id: 1,
        name: "Complete project proposal",
        status: "completed",
        dueDate: "2023-12-01",
      },
      {
        id: 2,
        name: "Review design mockups",
        status: "in-progress",
        dueDate: "2023-12-05",
      },
      {
        id: 3,
        name: "Slow",
        status: "pending",
        dueDate: "2023-12-10",
      },
      {
        id: 4,
        name: "Fix reported bugs",
        status: "failed",
        dueDate: "2023-12-03",
      },
      {
        id: 5,
        name: "Prepare presentation",
        status: "pending",
        dueDate: "2023-12-15",
      },
      {
        id: 6,
        name: "Client meeting",
        status: "in-progress",
        dueDate: "2023-12-07",
      },
      {
        id: 7,
        name: "Team retrospective",
        status: "pending",
        dueDate: "2023-12-20",
      },
    ],
    renderListItem: (item) => {
      const task = item as Task
      return (
        <div className="flex items-center gap-2 overflow-hidden whitespace-nowrap px-2 py-1">
          <span className="truncate font-medium">{task.name}</span>
        </div>
      )
    },
    renderDropdownItem: (item) => {
      const task = item as Task
      return (
        <div className="flex flex-col py-1">
          <span className="font-medium">{task.name}</span>
          <div className="flex justify-between text-xs text-f1-foreground-secondary">
            <span className="capitalize">{task.status.replace("-", " ")}</span>
            <span>Due: {task.dueDate}</span>
          </div>
        </div>
      )
    },
    gap: 8,
  },
  render: (args) => {
    return (
      <div className="w-full">
        <OverflowList {...args} />
      </div>
    )
  },
}
