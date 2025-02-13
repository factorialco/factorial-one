import type { Meta, StoryObj } from "@storybook/react"
import { Celebration } from "."

const meta: Meta<typeof Celebration> = {
  component: Celebration,
  title: "Communities/Celebration",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs", "experimental"],
}

export default meta

type Story = StoryObj<typeof Celebration>

// Fixed date for the example stories
const exampleDate = new Date(2024, 11, 13, 20, 0)

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
          date={exampleDate}
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
          date={exampleDate}
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
    date: exampleDate,
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
