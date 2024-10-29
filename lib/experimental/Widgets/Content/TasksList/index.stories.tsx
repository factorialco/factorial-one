import type { Meta, StoryObj } from "@storybook/react"
import { fn } from "@storybook/test"
import { TasksList, TasksListProps } from "./index"

const meta: Meta<TasksListProps> = {
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
type Story = StoryObj<TasksListProps>

export const Default: Story = {
  args: {
    tasks: {
      inProgress: [{ id: 1, text: "Migrate to new CRM" }],
      due: [],
      noDue: [
        { id: 2, text: "Connect to Slack" },
        { id: 3, text: "Write changelog" },
        { id: 4, text: "Product review" },
        { id: 5, text: "Final conclusions" },
      ],
    },
  },
}

export const WithLabels: Story = {
  args: {
    tasks: {
      inProgress: [
        {
          id: 1,
          text: "Migrate to new CRM",
          badge: { text: "Due Sep 10", isPastDue: true },
        },
        { id: 2, text: "Connect to Slack" },
      ],
      due: [],
      noDue: [
        { id: 3, text: "Write changelog", badge: { text: "Due Oct 2" } },
        { id: 4, text: "Product review", badge: { text: "Due Oct 21" } },
        { id: 5, text: "Final conclusions", badge: { text: "Due Nov 2" } },
      ],
    },
  },
}

export const WithCounters: Story = {
  args: {
    onClickTask: fn(),
    hideIcons: true,
    tasks: {
      inProgress: [
        {
          id: 1,
          text: "Migrate to new CRM",
          badge: { text: "Due Sep 10", isPastDue: true },
          counter: 2,
        },
        { id: 2, text: "Connect to Slack" },
      ],
      due: [],
      noDue: [
        {
          id: 1,
          text: "Write changelog",
          badge: { text: "Due Oct 2" },
          counter: 4,
        },
        {
          id: 2,
          text: "Product review",
          badge: { text: "Due Oct 21" },
          counter: 1,
        },
        {
          id: 3,
          text: "Final conclusions",
          badge: { text: "Due Nov 2" },
          counter: 7,
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
          id: 1,
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut sem accumsan ipsum malesuada maximus id vitae libero. Maecenas iaculis felis id massa elementum tristique.",
        },
      ],
      due: [],
      noDue: [
        {
          id: 2,
          text: "Nam et dapibus lorem. Sed tristique, metus iaculis viverra accumsan, urna purus auctor purus, quis tempor risus augue nec dui.",
        },
        {
          id: 3,
          text: "Quisque tellus orci, tincidunt auctor imperdiet ac, molestie non nisl. Aliquam scelerisque lacus turpis, et tempor erat volutpat et.",
        },
      ],
    },
  },
}

export const LongList: Story = {
  args: {
    tasks: {
      inProgress: [{ id: 1, text: "Migrate to new CRM" }],
      due: [],
      noDue: [
        { id: 1, text: "Connect to Slack" },
        { id: 2, text: "Sync GitHub Repo" },
        { id: 3, text: "Write Release Notes" },
        { id: 4, text: "Plan Product Roadmap" },
        { id: 5, text: "Summarize Key Insights" },
        { id: 6, text: "Coordinate with Design Team" },
        { id: 7, text: "Draft User Manual" },
        { id: 8, text: "Evaluate Competitor Features" },
        { id: 9, text: "Discuss Closing Remarks" },
        { id: 10, text: "Organize Files on Drive" },
        { id: 11, text: "Update README File" },
        { id: 12, text: "Analyze User Feedback" },
        { id: 13, text: "Prepare Demo Presentation" },
        { id: 14, text: "Review Code Quality" },
        { id: 15, text: "Schedule Team Meeting" },
        { id: 16, text: "Run Performance Tests" },
        { id: 17, text: "Define Project Milestones" },
        { id: 18, text: "Research New Tools" },
        { id: 19, text: "Set Up Continuous Integration" },
        { id: 20, text: "Finalize Release Checklist" },
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
