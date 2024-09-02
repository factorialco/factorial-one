import type { Meta, StoryObj } from "@storybook/react"
import { ProgressBar } from "."

const meta = {
  component: ProgressBar,
  tags: ["autodocs"],
  args: {
    value: 60,
    label: "Label",
  },
  decorators: [
    (Story) => (
      <div className="max-w-80">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof ProgressBar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
