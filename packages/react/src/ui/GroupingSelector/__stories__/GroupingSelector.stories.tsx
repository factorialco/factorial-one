import { GroupingDefinition, GroupingState } from "@/hooks/datasource"
import type { Meta, StoryObj } from "@storybook/react-vite"
import { useState } from "react"
import { GroupingSelector } from "../GroupingSelector"

// Mock record type for the examples
type MockRecord = {
  id: string
  name: string
  department: string
  status: "active" | "inactive"
  startDate: Date
  salary: number
}

// Mock grouping definitions for the stories
const mockGroupingDefinition: GroupingDefinition<MockRecord> = {
  mandatory: false,
  groupBy: {
    department: {
      name: "Department",
      label: (groupId) => groupId,
    },
    status: {
      name: "Status",
      label: (groupId) => groupId,
    },
  },
}

const mandatoryGroupingDefinition: GroupingDefinition<MockRecord> = {
  mandatory: true,
  groupBy: {
    department: {
      name: "Department",
      label: (groupId) => groupId,
    },
    status: {
      name: "Status",
      label: (groupId) => groupId,
    },
  },
}

const ExampleComponent = ({
  grouping,
  currentGrouping: initialGrouping,
  hideLabel,
  hideDirection,
}: {
  grouping?: GroupingDefinition<MockRecord>
  currentGrouping?: GroupingState<MockRecord, GroupingDefinition<MockRecord>>
  hideLabel?: boolean
  hideDirection?: boolean
}) => {
  const [currentGrouping, setCurrentGrouping] = useState(initialGrouping)

  return (
    <div className="border-gray-200 w-80 rounded-lg border">
      <GroupingSelector<MockRecord, GroupingDefinition<MockRecord>>
        grouping={grouping}
        currentGrouping={currentGrouping}
        onGroupingChange={(value) => setCurrentGrouping(value)}
        hideLabel={hideLabel}
        hideDirection={hideDirection}
      />
      <div className="border-gray-200 bg-gray-50 border-t p-3 text-sm">
        <strong>Current State:</strong>
        <pre className="mt-1 text-xs">
          {JSON.stringify(currentGrouping, null, 2)}
        </pre>
      </div>
    </div>
  )
}

const meta = {
  title: "Components/GroupingSelector",
  component: ExampleComponent,
  parameters: {
    docs: {
      description: {
        component: [
          "The `GroupingSelector` component is an internal component used to render group header controls in data collections and tables. It allows users to <strong>select how data should be grouped</strong> and the <strong>direction of grouping</strong> (ascending or descending).",
          "This component is typically used within data collection views where users need to organize and group records by different field criteria. When a user selects a grouping field, the data will be organized into groups based on that field's values.",
          "The component supports both mandatory and optional grouping scenarios. In mandatory mode, users must always have a grouping selected, while in optional mode, users can choose to remove grouping entirely.",
          "The grouping direction toggle (ascending/descending) can be hidden when not needed, and the label can also be hidden for more compact layouts.",
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
      description: "Hide the 'Group by' label",
    },
    hideDirection: {
      control: "boolean",
      description: "Hide the direction toggle button",
    },
  },
} satisfies Meta<typeof ExampleComponent>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    grouping: mockGroupingDefinition,
    currentGrouping: {
      field: "department",
      order: "asc",
    },
  },
}

export const NoGroupingSelected: Story = {
  args: {
    grouping: mockGroupingDefinition,
    currentGrouping: undefined,
  },
}

export const DescendingOrder: Story = {
  args: {
    grouping: mockGroupingDefinition,
    currentGrouping: {
      field: "status",
      order: "desc",
    },
  },
}

export const HiddenLabel: Story = {
  args: {
    grouping: mockGroupingDefinition,
    currentGrouping: {
      field: "department",
      order: "asc",
    },
    hideLabel: true,
  },
}

export const HiddenDirection: Story = {
  args: {
    grouping: mockGroupingDefinition,
    currentGrouping: {
      field: "department",
      order: "asc",
    },
    hideDirection: true,
  },
}

export const CompactLayout: Story = {
  args: {
    grouping: mockGroupingDefinition,
    currentGrouping: {
      field: "status",
      order: "asc",
    },
    hideLabel: true,
    hideDirection: true,
  },
}

export const MandatoryGrouping: Story = {
  args: {
    grouping: mandatoryGroupingDefinition,
    currentGrouping: {
      field: "department",
      order: "asc",
    },
  },
}

export const NoGroupingDefinition: Story = {
  args: {
    grouping: undefined,
    currentGrouping: undefined,
  },
}

export const SingleGroupingOption: Story = {
  args: {
    grouping: {
      mandatory: true,
      groupBy: {
        department: {
          name: "Department",
          label: (groupId) => groupId,
        },
      },
    },
    currentGrouping: {
      field: "department",
      order: "asc",
    },
  },
}
