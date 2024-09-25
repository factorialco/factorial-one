import type { Meta, StoryObj } from "@storybook/react"
import { IconTextsList } from "."

const meta: Meta = {
  component: IconTextsList,
  parameters: {
    tags: ["autodocs"],
  },
  args: {
    texts: ["Work location"],
    list: [
      {
        icon: "office",
        texts: ["Work location"],
      },
      {
        icon: "briefcase",
        texts: ["Project", "Subproject"],
      },
    ],
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
