import { ButtonInternal } from "@/components/Actions/Button/internal"
import type { Meta, StoryObj } from "@storybook/react"
import { useState } from "react"
import { Preset } from "../../experimental/OnePreset"
import { VerticalOverflowList } from "./index"

const meta = {
  title: "Components/VerticalOverflowList",
  component: VerticalOverflowList,
  tags: ["autodocs", "internal"],
  argTypes: {
    items: {
      description: "The items to display in the list.",
    },
    renderListItem: {
      description:
        "What to render as a list item (items outside of the overflow list).",
    },
    renderOverflowIndicator: {
      description:
        "What to render as the overflow indicator. If not provided, the default overflow indicator will be displayed.",
    },
    className: {
      description: "Additional styling for the container.",
    },
    gap: {
      description: "The gap between items in pixels.",
    },
  },
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
          <div className="flex w-32 flex-col gap-1 pt-4">
            <label
              htmlFor="container-width"
              className="text-sm font-medium text-f1-foreground-secondary"
            >
              Test width
            </label>
            <input
              id="container-width"
              type="range"
              min="180"
              max="1000"
              value={containerWidth}
              onChange={(e) => setContainerWidth(Number(e.target.value))}
            />
          </div>
        </>
      )
    },
  ],
} satisfies Meta<typeof VerticalOverflowList>

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
        status: "Completed",
        dueDate: "2025-12-01",
      },
      {
        id: 2,
        name: "Review design mockups",
        status: "In progress",
        dueDate: "2025-12-05",
      },
      {
        id: 3,
        name: "Design proposal",
        status: "Pending",
        dueDate: "2025-12-10",
      },
      {
        id: 4,
        name: "Fix reported bugs",
        status: "Failed",
        dueDate: "2025-12-03",
      },
      {
        id: 5,
        name: "Prepare presentation",
        status: "Pending",
        dueDate: "2025-12-15",
      },
      {
        id: 6,
        name: "Client meeting",
        status: "Pending",
        dueDate: "2025-12-07",
      },
      {
        id: 7,
        name: "Team retrospective",
        status: "Pending",
        dueDate: "2025-12-20",
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
  },
  render: (args) => {
    return (
      <div className="w-full">
        <VerticalOverflowList {...args} />
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
      {
        id: 7,
        name: "Deleted",
        number: 3,
      },
    ],
    renderListItem: (item) => {
      const preset = item as PresetItem
      return <Preset label={preset.name} number={preset.number} />
    },
  },
  render: (args) => {
    return (
      <div className="w-full">
        <VerticalOverflowList {...args} />
      </div>
    )
  },
}

export const WithCustomOverflowIndicator: Story = {
  args: {
    ...Presets.args,
    renderOverflowIndicator: () => (
      <ButtonInternal label="Action" variant="ghost" size="sm" />
    ),
  },
}
