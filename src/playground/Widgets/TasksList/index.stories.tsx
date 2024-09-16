import type { Meta, StoryObj } from "@storybook/react"
import { TasksList } from "./index"

const meta: Meta<typeof TasksList> = {
  component: TasksList,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <div className="w-[348px]">
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof TasksList>

export const Default: Story = {
  args: {
    inProgressTasks: ["Migrate to new CRM"],
    pendingTasks: [
      "Connect to Slack",
      "Write changelog",
      "Product review",
      "Final conclusions",
    ],
  },
}
