import type { Meta, StoryObj } from "@storybook/react"
import { Timesheet } from "."

const meta = {
  component: Timesheet,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="w-full min-w-72 max-w-96">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Timesheet>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    header: {
      title: "Timesheet",
      subtitle: "July",
      link: {
        title: "View all",
        url: "/",
      },
    },
    workedHours: 40,
    plannedHours: 90,
    workedHoursLabel: "Worked / Planned hours",
    balance: 9,
    maxBalance: 50,
    balanceLabel: "Balance",
  },
}

export const WithOvertime: Story = {
  args: {
    ...Default.args,
    workedHours: 120,
  },
}
