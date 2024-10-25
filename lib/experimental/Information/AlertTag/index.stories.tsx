import type { Meta, StoryObj } from "@storybook/react"

import { AlertTag } from "."

const meta: Meta = {
  component: AlertTag,
  parameters: {
    layout: "centered",
    tags: ["autodocs"],
  },
  args: {
    text: "Info",
    variant: "info",
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const InfoAlertTag: Story = {}

export const WarningAlertTag: Story = {
  args: {
    text: "Warning",
    variant: "warning",
  },
}

export const CriticalAlertTag: Story = {
  args: {
    text: "Critical",
    variant: "critical",
  },
}
