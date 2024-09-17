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
    dueTasks: [],
    noDueTasks: [
      "Connect to Slack",
      "Write changelog",
      "Product review",
      "Final conclusions",
    ],
  },
}

export const WithLongTaskTitles: Story = {
  args: {
    inProgressTasks: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut sem accumsan ipsum malesuada maximus id vitae libero. Maecenas iaculis felis id massa elementum tristique.",
    ],
    dueTasks: [],
    noDueTasks: [
      "Nam et dapibus lorem. Sed tristique, metus iaculis viverra accumsan, urna purus auctor purus, quis tempor risus augue nec dui.",
      "Quisque tellus orci, tincidunt auctor imperdiet ac, molestie non nisl. Aliquam scelerisque lacus turpis, et tempor erat volutpat et.",
    ],
  },
}
