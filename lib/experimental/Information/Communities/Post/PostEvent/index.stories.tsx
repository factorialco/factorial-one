import type { Meta, StoryObj } from "@storybook/react"
import { PostEvent } from "."
import cat from "../../../../../../storybook-assets/cat.jpeg"

const meta: Meta<typeof PostEvent> = {
  component: PostEvent,
}

export default meta

type Story = StoryObj<typeof PostEvent>

// Fixed date for the example stories
const eventDate = new Date(2024, 11, 13, 20, 0)

export const Default: Story = {
  decorators: [
    (Story) => (
      <div className="max-w-[480px]">
        <Story />
      </div>
    ),
  ],
  args: {
    title: "End of the Year Dinner!",
    place: "Poble Espanyol",
    imageUrl: cat,
    date: eventDate,
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
    date: eventDate,
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
