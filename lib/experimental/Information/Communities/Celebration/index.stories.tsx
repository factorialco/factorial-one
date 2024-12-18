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
      <div className="flex gap-4">
        <Story />
      </div>
    ),
  ],
  render: () => (
    <>
      <div className="w-48">
        <Celebration
          link="/"
          firstName="Josep Jaume"
          lastName="Rey"
          src="https://github.com/josepjaume.png"
          type="birthday"
          typeLabel="Birthday"
          date={new Date(2024, 10, 29)}
        />
      </div>
      <div className="w-48">
        <Celebration
          link="/"
          firstName="Nik"
          lastName="Lopin"
          src="https://github.com/nlopin.png"
          type="anniversary"
          typeLabel="Anniversary"
          date={new Date(2024, 11, 4)}
        />
      </div>
    </>
  ),
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
    link: "/",
    firstName: "Saúl",
    lastName: "Domínguez",
    canReact: false,
    type: "first-day",
    typeLabel: "First day very long name",
    date: new Date(2024, 11, 15),
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
