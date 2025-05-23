import { ArrowCycle } from "@/icons/app"
import type { Meta, StoryObj } from "@storybook/react"
import { fn } from "@storybook/test"
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
    title: "We couldn't load the data",
    description:
      "Something went wrong while processing the data. Please try again.",
    icon: "🚨",
    actions: [
      {
        label: "Retry",
        onClick: fn(),
        variant: "outline",
        icon: ArrowCycle,
      },
    ],
  },
}
