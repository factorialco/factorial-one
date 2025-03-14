import {
  Home as HomeIcon,
  Office as OfficeIcon,
  Suitcase as SuitcaseIcon,
} from "@/icons/app"
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
  title: "Home/ClockInControls",
  component: ClockInControls,
  tags: ["autodocs", "experimental"],
  args: {
    labels: defaultLabels,
    locations: [
      {
        id: "1",
        name: "Home",
        icon: HomeIcon,
      },
      {
        id: "2",
        name: "Business Trip",
        icon: SuitcaseIcon,
      },
      {
        id: "3",
        name: "Office",
        icon: OfficeIcon,
      },
    ],
    locationId: "1",
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
    remainingMinutes: 4 * 60 + 39,
    data: [
      {
        from: new Date("2024-03-20T09:02:00"),
        to: new Date("2024-03-20T12:23:00"),
        variant: "clocked-in",
      },
    ],
    locationId: undefined,
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

export const WithDisabledSelectors: Story = {
  args: {
    ...ClockedOut.args,
    locationSelectorDisabled: true,
  },
}

export const WithHiddenLocationAndProject: Story = {
  args: {
    ...ClockedOut.args,
    canShowLocation: false,
  },
}
