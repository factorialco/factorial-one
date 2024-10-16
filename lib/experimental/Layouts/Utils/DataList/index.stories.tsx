import type { Meta, StoryObj } from "@storybook/react"
import { fn } from "@storybook/test"
import { DataList } from "."

const meta: Meta = {
  component: DataList,
  parameters: {
    layout: "centered",
    tags: ["autodocs"],
  },
  args: {
    items: [
      {
        text: "fake.email@factorial.co",
      },
      {
        text: "Engineering",
        avatar: {
          src: "https://github.com/dani-moreno.png",
          alt: "E",
        },
        onClick: fn(),
      },
      {
        text: "Managers",
        avatar: {
          alt: "M",
        },
        onClick: fn(),
      },
      {
        text: "Office/Spain",
        avatar: {},
        onClick: fn(),
      },
      {
        text: "Office/Remote",
        onClick: fn(),
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
