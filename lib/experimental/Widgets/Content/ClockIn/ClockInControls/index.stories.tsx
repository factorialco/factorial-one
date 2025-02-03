import DenyIcon from "@/icons/app/Deny"
import HomeIcon from "@/icons/app/Home"
import SaladIcon from "@/icons/app/Salad"
import TimerIcon from "@/icons/app/Timer"
import type { Meta, StoryObj } from "@storybook/react"
import { ClockInControls } from "."

const defaultLabels = {
  clockedOut: "Clocked out",
  clockedIn: "Clocked in",
  onBreak: "On a break",
  clockIn: "Clock in",
  clockOut: "Clock out",
  break: "Break",
  resume: "Resume",
  remainingTime: "Remaining time",
  overtime: "Overtime",
  selectLocation: "Select location",
  selectProject: "Select project",
}

const meta: Meta<typeof ClockInControls> = {
  title: "Components/ClockInControls",
  component: ClockInControls,
  tags: ["autodocs"],
  args: {
    labels: defaultLabels,
    location: {
      name: "Home",
      icon: HomeIcon,
    },
    projectName: "Bolt’s project",
  },
  render: (args) => (
    <div className="max-w-[350px]">
      <ClockInControls {...args} />
    </div>
  ),
}

export default meta
type Story = StoryObj<typeof ClockInControls>

export const ClockedOut: Story = {
  args: {
    remainingMinutes: 8 * 60,
    data: [],
  },
}

export const ClockedIn: Story = {
  args: {
    remainingMinutes: 4 * 60 + 39,
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
    remainingMinutes: 4 * 60 + 39,
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

export const Collapsed: Story = {
  render: (args) => (
    <div className="max-w-[300px]">
      <ClockInControls {...args} />
    </div>
  ),
}

export const WithNoLocationOrProject: Story = {
  args: {
    location: undefined,
    projectName: undefined,
  },
}

export const WithLongProjectName: Story = {
  args: {
    projectName: "Bolt’s project with a very long name",
  },
}

export const ClockedOutWithSomeTime: Story = {
  args: {
    remainingMinutes: 320,
    data: [
      {
        from: new Date("2024-03-20T09:02:00"),
        to: new Date("2024-03-20T12:00:00"),
        variant: "clocked-in",
      },
      {
        from: new Date("2024-03-20T12:00:00"),
        to: new Date("2024-03-20T12:00:00"),
        variant: "clocked-out",
      },
    ],
  },
}

export const WithBreakTypes: Story = {
  args: {
    ...ClockedIn.args,
    breakTypes: [
      {
        id: "1",
        name: "Manual",
        description: "This is a description",
        icon: TimerIcon,
      },
      {
        id: "2",
        name: "Lunch time · 30 min",
        description: "30 min",
        icon: SaladIcon,
      },
      {
        id: "3",
        name: "Unpaid",
        icon: DenyIcon,
      },
    ],
    onChangeBreakTypeId: () => {},
  },
}
