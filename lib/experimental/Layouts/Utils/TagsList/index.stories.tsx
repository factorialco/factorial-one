import type { Meta, StoryObj } from "@storybook/react"
import { TagsList } from "."

const meta: Meta = {
  component: TagsList,
  parameters: {
    layout: "centered",
    tags: ["autodocs"],
  },
  args: {
    tags: [
      {
        text: "Management",
        avatar: {
          alt: "M",
        },
      },
      {
        text: "Engineering",
        avatar: {
          alt: "E",
        },
      },
      {
        text: "Managers",
        avatar: {
          alt: "M",
        },
      },
      {
        text: "Office/Spain",
        avatar: {
          alt: "O",
        },
      },
      {
        text: "Office/Remote",
        avatar: {
          alt: "O",
        },
      },
      {
        text: "Engineering/Management",
        avatar: {
          alt: "E",
        },
      },
    ],
  },
  decorators: [
    (Story) => (
      <div className="w-72">
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
