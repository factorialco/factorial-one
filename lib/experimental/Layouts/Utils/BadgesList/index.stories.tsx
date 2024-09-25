import type { Meta, StoryObj } from "@storybook/react"

import { BadgesList } from "."

const meta = {
  component: BadgesList,
  tags: ["autodocs"],
  args: {
    badges: [
      { text: "Management", avatar: { alt: "M" } },
      { text: "Engineering", avatar: { alt: "E" } },
      { text: "Managers", avatar: { alt: "M" } },
      { text: "Office/Spain", avatar: { alt: "S" } },
      { text: "Office/Remote", avatar: { alt: "R" } },
      { text: "Engineering/Management", avatar: { alt: "E" } },
    ],
  },
  decorators: [
    (Story) => (
      <div className="w-64">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof BadgesList>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
