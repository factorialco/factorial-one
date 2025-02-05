import type { Meta, StoryObj } from "@storybook/react"

import { StatusTag } from "."

const meta: Meta = {
  component: StatusTag,
  title: "Tag/StatusTag",
  parameters: {
    layout: "centered",
    tags: ["autodocs"],
  },
  args: {
    text: "Label",
    variant: "neutral",
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const NeutralStatusTag: Story = {}

export const InfoStatusTag: Story = {
  args: {
    variant: "info",
  },
}

export const PositiveTag: Story = {
  args: {
    variant: "positive",
  },
}

export const WarningStatusTag: Story = {
  args: {
    variant: "warning",
  },
}

export const CriticalStatusTag: Story = {
  args: {
    variant: "critical",
  },
}
