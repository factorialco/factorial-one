import { Counter } from "@/experimental/Information/Counter"
import { Preset } from "@/experimental/OnePreset"
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
              className="rounded border border-solid border-f1-border-secondary p-3"
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

interface PresetItem {
  id: number
  name: string
  number?: number
}

export const Presets: Story = {
  args: {
    items: [
      {
        id: 1,
        name: "Draft",
        number: 10,
      },
      {
        id: 2,
        name: "Pending",
        number: 4,
      },
      {
        id: 3,
        name: "Ordered",
        number: 8,
      },
      {
        id: 4,
        name: "Partial",
        number: 12,
      },
      {
        id: 5,
        name: "Recieved",
        number: 21,
      },
      {
        id: 6,
        name: "Closed",
        number: 15,
      },
    ],
    renderListItem: (item) => {
      const preset = item as PresetItem
      return <Preset label={preset.name} number={preset.number} />
    },
    renderDropdownItem: (item) => {
      const preset = item as PresetItem
      return (
        <div className="flex justify-between rounded p-2 transition-colors hover:cursor-pointer hover:bg-f1-background-hover">
          <span className="font-medium">{preset.name}</span>
          {preset.number && <Counter value={preset.number} type="default" />}
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
