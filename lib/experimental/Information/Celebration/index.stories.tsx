import type { Meta, StoryObj } from "@storybook/react"
import { Celebration } from "."

const meta: Meta<typeof Celebration> = {
  component: Celebration,
  parameters: {
    layout: "centered",
  },
}

export default meta

type Story = StoryObj<typeof Celebration>

export const Default: Story = {
  decorators: [
    (Story) => (
      <div className="w-48">
        <Story />
      </div>
    ),
  ],
  args: {
    firstName: "Josep Jaume",
    lastName: "Rey",
    src: "https://github.com/josepjaume.png",
    type: "birthday",
    typeLabel: "Birthday",
    date: {
      day: 15,
      month: "DEC",
    },
  },
}

export const Other: Story = {
  decorators: [
    (Story) => (
      <div className="w-48">
        <Story />
      </div>
    ),
  ],
  args: {
    firstName: "Nik",
    lastName: "Lopin",
    src: "https://github.com/nlopin.png",
    type: "anniversary",
    typeLabel: "Anniversary",
    date: {
      day: 15,
      month: "DEC",
    },
  },
}

export const NoImage: Story = {
  decorators: [
    (Story) => (
      <div className="w-48">
        <Story />
      </div>
    ),
  ],
  args: {
    firstName: "Saúl",
    lastName: "Domínguez",
    type: "first-day",
    typeLabel: "First day",
    date: {
      day: 15,
      month: "DEC",
    },
  },
}

export const Skeleton: Story = {
  decorators: [
    (Story) => (
      <div className="w-48">
        <Story />
      </div>
    ),
  ],
  args: {},
  render: () => <Celebration.Skeleton />,
}
