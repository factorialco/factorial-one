import type { Meta, StoryObj } from "@storybook/react"
import { CategoryBar } from "."

const meta = {
  component: CategoryBar,
  tags: ["autodocs"],
  args: {
    data: [
      { name: "Category 1", value: 300 },
      { name: "Category 2", value: 100 },
    ],
    legend: true,
  },
  decorators: [
    (Story) => (
      <div className="max-w-80">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof CategoryBar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithMutedCategory: Story = {
  args: {
    data: [
      { name: "Worked hours", value: 79 },
      {
        name: "Remaining hours",
        value: 19,
        color: "hsl(var(--muted-foreground))",
        muted: true,
      },
    ],
  },
}
