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
      inProgress: [{ text: "Migrate to new CRM" }],
      due: [],
      noDue: [
        { text: "Connect to Slack" },
        { text: "Write changelog" },
        { text: "Product review" },
        { text: "Final conclusions" },
      ],
    },
  },
}

export const WithLabels: Story = {
  args: {
    tasks: {
      inProgress: [
        {
          text: "Migrate to new CRM",
          badge: { text: "Due Sep 10", isPastDue: true },
        },
        {
          text: "Connect to Slack",
        },
      ],
      due: [],
      noDue: [
        { text: "Write changelog", badge: { text: "Due Oct 2" } },
        { text: "Product review", badge: { text: "Due Oct 21" } },
        { text: "Final conclusions", badge: { text: "Due Nov 2" } },
      ],
    },
  },
}

export const WithCounters: Story = {
  args: {
    tasks: {
      inProgress: [
        {
          text: "Migrate to new CRM",
          badge: { text: "Due Sep 10", isPastDue: true },
          counter: "2",
        },
        {
          text: "Connect to Slack",
        },
      ],
      due: [],
      noDue: [
        { text: "Write changelog", badge: { text: "Due Oct 2" }, counter: "4" },
        { text: "Product review", badge: { text: "Due Oct 21" }, counter: "1" },
        {
          text: "Final conclusions",
          badge: { text: "Due Nov 2" },
          counter: "7",
        },
      ],
    },
  },
}

export const WithLongTaskTitles: Story = {
  args: {
    tasks: {
      inProgress: [
        {
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut sem accumsan ipsum malesuada maximus id vitae libero. Maecenas iaculis felis id massa elementum tristique.",
        },
      ],
      due: [],
      noDue: [
        {
          text: "Nam et dapibus lorem. Sed tristique, metus iaculis viverra accumsan, urna purus auctor purus, quis tempor risus augue nec dui.",
        },
        {
          text: "Quisque tellus orci, tincidunt auctor imperdiet ac, molestie non nisl. Aliquam scelerisque lacus turpis, et tempor erat volutpat et.",
        },
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
