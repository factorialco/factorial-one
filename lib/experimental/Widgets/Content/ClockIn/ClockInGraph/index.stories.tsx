import type { Meta, StoryObj } from "@storybook/react"
import { ClockInGraph } from "."

const meta: Meta<typeof ClockInGraph> = {
  title: "Widgets/Content/ClockIn/ClockInGraph",
  component: ClockInGraph,
  tags: ["autodocs"],
  args: {
    remainingMinutes: 60 * 4 + 39,
    data: [],
  },
}

export default meta
type Story = StoryObj<typeof ClockInGraph>

export const Default: Story = {}

export const Empty: Story = {
  args: {},
}

export const WithSomeProgress: Story = {
  args: {
    data: [
      {
        from: new Date("2024-03-20T09:00:00"),
        to: new Date("2024-03-20T12:00:00"),
        variant: "clocked-in",
      },
      {
        from: new Date("2024-03-20T12:00:00"),
        to: new Date("2024-03-20T13:45:00"),
        variant: "break",
      },
    ],
  },
}

export const WithConsecutiveBreaks: Story = {
  args: {
    data: [
      {
        from: new Date("2024-03-20T09:00:00"),
        to: new Date("2024-03-20T12:00:00"),
        variant: "clocked-in",
      },
      {
        from: new Date("2024-03-20T12:00:00"),
        to: new Date("2024-03-20T13:00:00"),
        variant: "break",
      },
      {
        from: new Date("2024-03-20T13:00:00"),
        to: new Date("2024-03-20T13:45:00"),
        variant: "break",
      },
    ],
  },
}

export const WithAlternatingEntries: Story = {
  args: {
    data: [
      {
        from: new Date("2024-03-20T09:00:00"),
        to: new Date("2024-03-20T11:00:00"),
        variant: "clocked-in",
      },
      {
        from: new Date("2024-03-20T11:00:00"),
        to: new Date("2024-03-20T11:30:00"),
        variant: "break",
      },
      {
        from: new Date("2024-03-20T11:30:00"),
        to: new Date("2024-03-20T13:00:00"),
        variant: "clocked-in",
      },
      {
        from: new Date("2024-03-20T13:00:00"),
        to: new Date("2024-03-20T13:45:00"),
        variant: "break",
      },
    ],
  },
}

export const WithAlternatingEntriesAndFinalClockedIn: Story = {
  args: {
    data: [
      {
        from: new Date("2024-03-20T09:00:00"),
        to: new Date("2024-03-20T11:00:00"),
        variant: "clocked-in",
      },
      {
        from: new Date("2024-03-20T11:00:00"),
        to: new Date("2024-03-20T11:30:00"),
        variant: "break",
      },
      {
        from: new Date("2024-03-20T11:30:00"),
        to: new Date("2024-03-20T13:00:00"),
        variant: "clocked-in",
      },
      {
        from: new Date("2024-03-20T13:00:00"),
        to: new Date("2024-03-20T13:45:00"),
        variant: "break",
      },
      {
        from: new Date("2024-03-20T13:45:00"),
        to: new Date("2024-03-20T15:30:00"),
        variant: "clocked-in",
      },
    ],
  },
}

export const WithoutRemainingMinutes: Story = {
  args: {
    remainingMinutes: undefined,
    data: [
      {
        from: new Date("2024-03-20T09:00:00"),
        to: new Date("2024-03-20T11:00:00"),
        variant: "clocked-in",
      },
      {
        from: new Date("2024-03-20T11:00:00"),
        to: new Date("2024-03-20T11:30:00"),
        variant: "break",
      },
      {
        from: new Date("2024-03-20T11:30:00"),
        to: new Date("2024-03-20T13:00:00"),
        variant: "clocked-in",
      },
    ],
  },
}

export const WithOvertime: Story = {
  args: {
    remainingMinutes: -17,
    data: [
      {
        from: new Date("2024-03-20T08:02:00"),
        to: new Date("2024-03-20T11:02:00"),
        variant: "clocked-in",
      },
      {
        from: new Date("2024-03-20T12:02:00"),
        to: new Date("2024-03-20T13:02:00"),
        variant: "break",
      },
      {
        from: new Date("2024-03-20T13:02:00"),
        to: new Date("2024-03-20T18:17:00"),
        variant: "clocked-in",
      },
    ],
  },
}
