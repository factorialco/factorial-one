import type { Meta, StoryObj } from "@storybook/react"
import { fn } from "@storybook/test"
import { Plus } from "lucide-react"
import { EmptyState } from "../OneEmptyState"

const meta = {
  component: EmptyState,
  title: "EmptyState",
  tags: ["autodocs", "experimental"],
} satisfies Meta<typeof EmptyState>

export default meta
type Story = StoryObj<typeof EmptyState>

export const Basic: Story = {
  args: {
    title: "No items added yet",
    description: "Start by adding your first item.",
    icon: "📄",
    actions: [
      {
        label: "New item",
        onClick: fn(),
        variant: "outline",
        icon: Plus,
      },
    ],
  },
}

export const WithAlert: Story = {
  render: (args) => {
    const Divider = () => (
      <div className="h-px w-80 self-center bg-f1-background-secondary" />
    )
    return (
      <div className="flex flex-col items-center gap-4">
        <EmptyState
          {...args}
          icon={{ type: "warning" }}
          title="We couldn't load the data"
        />
        <Divider />
        <EmptyState
          {...args}
          icon={{ type: "info" }}
          title="No items added yet"
        />
        <Divider />
        <EmptyState
          {...args}
          icon={{ type: "critical" }}
          title="Unauthorized"
        />
      </div>
    )
  },
}
