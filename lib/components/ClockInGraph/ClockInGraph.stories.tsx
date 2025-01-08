import type { Meta, StoryObj } from "@storybook/react"
import { ClockInGraph } from "./ClockInGraph"

const meta: Meta<typeof ClockInGraph> = {
  title: "Components/ClockInGraph",
  component: ClockInGraph,
  tags: ["autodocs"],
  args: {
    startAt: new Date(),
    endAt: new Date(),
    data: [],
  },
}

export default meta
type Story = StoryObj<typeof ClockInGraph>

export const Default: Story = {}

export const CustomDates: Story = {
  args: {
    startAt: new Date("2024-03-20T09:00:00"),
    endAt: new Date("2024-03-20T17:00:00"),
  },
}

export const WithProgress: Story = {
  args: {
    startAt: new Date("2024-03-20T09:00:00"),
    endAt: new Date("2024-03-20T17:00:00"),
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
    startAt: new Date("2024-03-20T09:00:00"),
    endAt: new Date("2024-03-20T17:00:00"),
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
    startAt: new Date("2024-03-20T09:00:00"),
    endAt: new Date("2024-03-20T17:00:00"),
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
