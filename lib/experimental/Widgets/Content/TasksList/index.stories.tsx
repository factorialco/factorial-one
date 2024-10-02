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
    tasks: {
      inProgress: ["Migrate to new CRM"],
      due: [],
      noDue: [
        "Connect to Slack",
        "Write changelog",
        "Product review",
        "Final conclusions",
      ],
    },
  },
}

export const WithLongTaskTitles: Story = {
  args: {
    tasks: {
      inProgress: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut sem accumsan ipsum malesuada maximus id vitae libero. Maecenas iaculis felis id massa elementum tristique.",
      ],
      due: [],
      noDue: [
        "Nam et dapibus lorem. Sed tristique, metus iaculis viverra accumsan, urna purus auctor purus, quis tempor risus augue nec dui.",
        "Quisque tellus orci, tincidunt auctor imperdiet ac, molestie non nisl. Aliquam scelerisque lacus turpis, et tempor erat volutpat et.",
      ],
    },
  },
}

export const EmptyState: Story = {
  args: {
    emptyMessage: "No tasks assigned",
    tasks: {
      inProgress: [],
      due: [],
      noDue: [],
    },
  },
}
