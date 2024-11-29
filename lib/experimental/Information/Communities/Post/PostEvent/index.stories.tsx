import type { Meta, StoryObj } from "@storybook/react"
import { PostEvent } from "."

const meta: Meta<typeof PostEvent> = {
  component: PostEvent,
}

export default meta

type Story = StoryObj<typeof PostEvent>

export const Default: Story = {
  decorators: [
    (Story) => (
      <div className="max-w-96">
        <Story />
      </div>
    ),
  ],
  args: {
    title: "End of the Year Dinner!",
    place: "Poble Espanyol",
    imageUrl: "https://cataas.com/cat",
    date: {
      hour: "20:00",
      day: 13,
      month: "December",
    },
  },
}

export const NoImage: Story = {
  decorators: [
    (Story) => (
      <div className="max-w-96">
        <Story />
      </div>
    ),
  ],
  args: {
    title: "End of the Year Dinner!",
    place: "Poble Espanyol",
    date: {
      hour: "20:00",
      day: 13,
      month: "December",
    },
  },
}

export const Skeleton: Story = {
  decorators: [
    (Story) => (
      <div className="max-w-96">
        <Story />
      </div>
    ),
  ],
  args: {},
  render: () => <PostEvent.Skeleton />,
}
