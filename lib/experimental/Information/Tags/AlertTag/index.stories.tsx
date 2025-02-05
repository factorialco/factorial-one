import type { Meta, StoryObj } from "@storybook/react"

import { AlertTag } from "."

const meta: Meta = {
  component: AlertTag,
  title: "Tag/AlertTag",
  parameters: {
    layout: "centered",
    tags: ["autodocs"],
  },
  args: {
    text: "Info",
    level: "info",
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const InfoAlertTag: Story = {}

export const WarningAlertTag: Story = {
  args: {
    text: "Warning",
    level: "warning",
  },
}

export const CriticalAlertTag: Story = {
  args: {
    text: "Critical",
    level: "critical",
  },
}
