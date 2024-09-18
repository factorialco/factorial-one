import type { Meta, StoryObj } from "@storybook/react"

import { SheetList } from "."

const meta: Meta = {
  component: SheetList,
  parameters: {
    layout: "centered",
    tags: ["autodocs"],
  },
  args: {
    list: [
      {
        title: "Project 3",
        info: "115 h",
      },
      {
        title: "Project 2",
        info: "112 h",
      },
      {
        title: "Project 5",
        info: "111 h",
      },
    ],
  },
  decorators: [
    (Story) => (
      <div className="w-[300px]">
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
