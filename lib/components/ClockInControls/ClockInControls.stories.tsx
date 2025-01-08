import type { Meta, StoryObj } from "@storybook/react"
import { ClockInControls } from "./ClockInControls"

const meta: Meta<typeof ClockInControls> = {
  title: "Components/ClockInControls",
  component: ClockInControls,
  tags: ["autodocs"],
  render: (args) => (
    <div className="w-[350px]">
      <ClockInControls {...args} />
    </div>
  ),
}

export default meta
type Story = StoryObj<typeof ClockInControls>

export const ClockedOut: Story = {
  args: {
    status: "clocked-out",
    remainingTimeText: "Remaining time 08:00",
  },
}

export const ClockedIn: Story = {
  args: {
    status: "clocked-in",
    remainingTimeText: "Remaining time 04:39",
    data: [
      {
        from: new Date("2024-03-20T09:02:00"),
        to: new Date("2024-03-20T12:23:00"),
        variant: "clocked-in",
      },
    ],
  },
}

export const OnBreak: Story = {
  args: {
    status: "on-break",
    remainingTimeText: "Remaining time 04:39",
    data: [
      {
        from: new Date("2024-03-20T09:02:00"),
        to: new Date("2024-03-20T12:00:00"),
        variant: "clocked-in",
      },
      {
        from: new Date("2024-03-20T12:00:00"),
        to: new Date("2024-03-20T12:34:00"),
        variant: "break",
      },
    ],
  },
}

export const WithOvertime: Story = {
  args: {
    status: "clocked-in",
    overtimeText: "Overtime 00:17",
    remainingMinutes: -17,
    data: [
      {
        from: new Date("2024-03-20T09:02:00"),
        to: new Date("2024-03-20T12:00:00"),
        variant: "clocked-in",
      },
      {
        from: new Date("2024-03-20T12:00:00"),
        to: new Date("2024-03-20T12:45:00"),
        variant: "break",
      },
      {
        from: new Date("2024-03-20T12:45:00"),
        to: new Date("2024-03-20T18:17:00"),
        variant: "clocked-in",
      },
    ],
  },
}
