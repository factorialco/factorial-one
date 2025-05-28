import type { Meta, StoryObj } from "@storybook/react"
import { fn } from "@storybook/test"
import { Plus } from "lucide-react"
import { OneEmptyState } from "../OneEmptyState"

const meta = {
  component: OneEmptyState,
  title: "EmptyState",
  tags: ["autodocs", "experimental"],
} satisfies Meta<typeof OneEmptyState>

export default meta
type Story = StoryObj<typeof OneEmptyState>

export const Basic: Story = {
  args: {
    title: "No items added yet",
    description: "Start by adding your first item.",
    emoji: "📄",
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
  render: () => {
    const Divider = () => (
      <div className="h-px w-80 self-center bg-f1-background-secondary" />
    )
    return (
      <div className="flex flex-col items-center gap-4">
        <OneEmptyState variant="warning" title="We couldn't load the data" />
        <Divider />
        <OneEmptyState variant="info" title="No items added yet" />
        <Divider />
        <OneEmptyState variant="critical" title="Unauthorized" />
      </div>
    )
  },
}
