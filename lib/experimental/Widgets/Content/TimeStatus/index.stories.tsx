import type { Meta, StoryObj } from "@storybook/react"

import { TimeStatus } from "."

const meta: Meta = {
  component: TimeStatus,
  parameters: {
    layout: "centered",
    design: {
      type: "figma",
      url: "https://www.figma.com/design/9pLsRzdinid0ha0qRWta2D/Employee-Profile?node-id=604-7408&node-type=frame&t=Du1ir1wtJRXblJI7-0",
    },
    tags: ["autodocs"],
  },
  args: {
    title: "Clock in",
    time: "05:34",
    status: "in",
    statusText: "Clocked in",
  },
  decorators: [
    (Story) => (
      <div className="w-64">
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}

export const Out: Story = {
  args: {
    status: "out",
    statusText: "Clocked out",
  },
}

export const Break: Story = {
  args: {
    status: "break",
    statusText: "In a break",
  },
}
