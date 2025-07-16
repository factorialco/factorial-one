import type { Meta, StoryObj } from "@storybook/react-vite"
import { useState } from "react"
import { GroupHeader } from "../GroupHeader"

// Interactive wrapper component for stories that need state management
const InteractiveGroupHeader = (props: Parameters<typeof GroupHeader>[0]) => {
  const [open, setOpen] = useState(props.open ?? false)
  const [selected, setSelected] = useState<true | false | "indeterminate">(
    props.select ?? false
  )

  return (
    <GroupHeader
      {...props}
      open={open}
      onOpenChange={setOpen}
      select={selected}
      onSelectChange={(checked) => setSelected(checked ? true : false)}
    />
  )
}

// Async data simulation
const createAsyncLabel = (label: string, delay = 1000) =>
  new Promise<string>((resolve) => {
    setTimeout(() => resolve(label), delay)
  })

const createAsyncCount = (count: number, delay = 800) =>
  new Promise<number>((resolve) => {
    setTimeout(() => resolve(count), delay)
  })

const meta = {
  title: "Components/GroupHeader",
  component: GroupHeader,
  parameters: {
    docs: {
      description: {
        component: [
          "The `GroupHeader` component is used to render a group header with optional collapsible functionality, selection controls, and item counts",
          "It supports both synchronous and asynchronous data for labels and item counts, with loading states displayed as skeletons",
          "The component can be configured to show expand/collapse controls, selection checkboxes, and item counters",
          "Perfect for use in data collections, grouped lists, and hierarchical data structures where items need to be organized and managed in groups",
        ]
          .map((text) => `<p>${text}.</p>`)
          .join(""),
      },
    },
  },
  tags: ["autodocs", "internal"],
  argTypes: {
    label: {
      description:
        "The label text for the group header. Can be a string or Promise for async loading",
      control: { type: "text" },
    },
    itemCount: {
      description:
        "The number of items in the group. Can be a number, Promise, or undefined",
      control: { type: "number" },
    },
    open: {
      description: "Whether the group is expanded or collapsed",
      control: { type: "boolean" },
    },
    showOpenChange: {
      description: "Whether to show the expand/collapse chevron toggle",
      control: { type: "boolean" },
    },
    selectable: {
      description: "Whether to show selection checkbox",
      control: { type: "boolean" },
    },
    select: {
      description:
        "Selection state: true (selected), false (unselected), or 'indeterminate' (partially selected)",
      control: { type: "select", options: [true, false, "indeterminate"] },
    },
    className: {
      description: "Additional CSS classes to apply",
      control: { type: "text" },
    },
  },
} satisfies Meta<typeof GroupHeader>

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {
  args: {
    label: "Basic Group",
    itemCount: 12,
  },
}

export const WithExpandCollapse: Story = {
  render: (args) => <InteractiveGroupHeader {...args} />,
  args: {
    label: "Collapsible Group",
    itemCount: 8,
    showOpenChange: true,
    open: false,
  },
}

export const WithSelection: Story = {
  render: (args) => <InteractiveGroupHeader {...args} />,
  args: {
    label: "Selectable Group",
    itemCount: 15,
    selectable: true,
    select: false,
  },
}

export const FullyInteractive: Story = {
  render: (args) => <InteractiveGroupHeader {...args} />,
  args: {
    label: "Interactive Group",
    itemCount: 25,
    showOpenChange: true,
    selectable: true,
    open: true,
    select: false,
  },
}

export const WithIndeterminateSelection: Story = {
  args: {
    label: "Partially Selected Group",
    itemCount: 20,
    selectable: true,
    select: "indeterminate",
  },
}

export const SelectedState: Story = {
  args: {
    label: "Selected Group",
    itemCount: 10,
    selectable: true,
    select: true,
    showOpenChange: true,
    open: true,
  },
}

export const WithoutItemCount: Story = {
  args: {
    label: "Group Without Count",
    itemCount: undefined,
    showOpenChange: true,
  },
}

export const AsyncLabel: Story = {
  args: {
    label: createAsyncLabel("Async Loaded Group"),
    itemCount: 18,
    showOpenChange: true,
  },
}

export const AsyncItemCount: Story = {
  args: {
    label: "Group with Async Count",
    itemCount: createAsyncCount(42),
    selectable: true,
  },
}

export const FullyAsync: Story = {
  args: {
    label: createAsyncLabel("Fully Async Group", 1200),
    itemCount: createAsyncCount(33, 1500),
    showOpenChange: true,
    selectable: true,
  },
}

export const LongLabel: Story = {
  args: {
    label:
      "This is a very long group label that might wrap to multiple lines or get truncated",
    itemCount: 156,
    showOpenChange: true,
    selectable: true,
  },
}

export const ZeroItems: Story = {
  args: {
    label: "Empty Group",
    itemCount: 0,
    showOpenChange: true,
    selectable: true,
  },
}

export const LargeItemCount: Story = {
  args: {
    label: "Large Dataset",
    itemCount: 99999,
    showOpenChange: true,
    selectable: true,
  },
}
