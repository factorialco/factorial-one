import type { Meta, StoryObj } from "@storybook/react-vite"
import { useState } from "react"
import { SelectWithDirection } from "../SelectWithDirection"

// Mock options for the examples
const sortingOptions = [
  { label: "Name", value: "name" },
  { label: "Department", value: "department" },
  { label: "Status", value: "status" },
  { label: "Start Date", value: "startDate" },
  { label: "Salary", value: "salary" },
]

const groupingOptions = [
  { label: "Department", value: "department" },
  { label: "Status", value: "status" },
  { label: "Location", value: "location" },
  { label: "Role", value: "role" },
]

const ExampleComponent = ({
  options = sortingOptions,
  initialValue,
  hideLabel,
  hideDirection,
  label = "Sort by",
  className,
}: {
  options?: { label: string; value: string }[]
  initialValue?: { selected: string; direction: "asc" | "desc" } | undefined
  hideLabel?: boolean
  hideDirection?: boolean
  label?: string
  className?: string
}) => {
  const [value, setValue] = useState(initialValue)

  return (
    <div className="w-80">
      <div className="border-gray-200 rounded-lg border">
        <div className="p-4">
          <SelectWithDirection
            label={label}
            options={options}
            value={value}
            onChange={setValue}
            hideLabel={hideLabel}
            hideDirection={hideDirection}
            className={className}
          />
        </div>
        <div className="border-gray-200 bg-gray-50 border-t p-3 text-sm">
          <strong>Current State:</strong>
          <pre className="mt-1 text-xs">{JSON.stringify(value, null, 2)}</pre>
        </div>
      </div>
    </div>
  )
}

const meta = {
  title: "Components/SelectWithDirection",
  component: ExampleComponent,
  parameters: {
    docs: {
      description: {
        component: [
          "The `SelectWithDirection` component is an internal component used to render a selector with a value and a direction, commonly used in grouping or sorting sections.",
          "This component allows users to <strong>select a field</strong> from a dropdown and toggle the <strong>direction</strong> (ascending or descending) with an arrow button. It's particularly useful in data collections, tables, and other scenarios where users need to control how data is organized.",
          "The component combines a select dropdown with a direction toggle button that appears when a value is selected. The direction button shows an up arrow for ascending order and a down arrow for descending order.",
          "Both the label and direction button can be hidden when needed for more compact layouts or when direction control is not required.",
        ]
          .map((text) => `<p>${text}</p>`)
          .join(""),
      },
    },
  },
  tags: ["autodocs", "internal"],
  argTypes: {
    hideLabel: {
      control: "boolean",
      description: "Hide the field label",
    },
    hideDirection: {
      control: "boolean",
      description: "Hide the direction toggle button",
    },
    label: {
      control: "text",
      description: "Label text for the select field",
    },
    options: {
      control: "object",
      description: "Array of options with label and value",
    },
  },
} satisfies Meta<typeof ExampleComponent>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    options: sortingOptions,
    initialValue: {
      selected: "name",
      direction: "asc",
    },
    label: "Sort by",
  },
}

export const NoSelection: Story = {
  args: {
    options: sortingOptions,
    initialValue: undefined,
    label: "Sort by",
  },
}

export const DescendingOrder: Story = {
  args: {
    options: sortingOptions,
    initialValue: {
      selected: "salary",
      direction: "desc",
    },
    label: "Sort by",
  },
}

export const GroupingExample: Story = {
  args: {
    options: groupingOptions,
    initialValue: {
      selected: "department",
      direction: "asc",
    },
    label: "Group by",
  },
}

export const HiddenLabel: Story = {
  args: {
    options: sortingOptions,
    initialValue: {
      selected: "status",
      direction: "asc",
    },
    label: "Sort by",
    hideLabel: true,
  },
}

export const HiddenDirection: Story = {
  args: {
    options: sortingOptions,
    initialValue: {
      selected: "name",
      direction: "asc",
    },
    label: "Sort by",
    hideDirection: true,
  },
}

export const CompactLayout: Story = {
  args: {
    options: sortingOptions,
    initialValue: {
      selected: "department",
      direction: "desc",
    },
    label: "Sort by",
    hideLabel: true,
    hideDirection: true,
  },
}

export const SingleOption: Story = {
  args: {
    options: [{ label: "Name", value: "name" }],
    initialValue: {
      selected: "name",
      direction: "asc",
    },
    label: "Sort by",
  },
}

export const ManyOptions: Story = {
  args: {
    options: [
      { label: "Employee Name", value: "name" },
      { label: "Department", value: "department" },
      { label: "Job Title", value: "title" },
      { label: "Status", value: "status" },
      { label: "Start Date", value: "startDate" },
      { label: "End Date", value: "endDate" },
      { label: "Salary", value: "salary" },
      { label: "Location", value: "location" },
      { label: "Manager", value: "manager" },
      { label: "Performance Rating", value: "rating" },
    ],
    initialValue: {
      selected: "salary",
      direction: "desc",
    },
    label: "Sort by",
  },
}

export const FilteringExample: Story = {
  args: {
    options: [
      { label: "Priority", value: "priority" },
      { label: "Due Date", value: "dueDate" },
      { label: "Created Date", value: "createdDate" },
      { label: "Assignee", value: "assignee" },
    ],
    initialValue: {
      selected: "priority",
      direction: "desc",
    },
    label: "Order by",
  },
}
