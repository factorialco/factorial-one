import type { Meta, StoryObj } from "@storybook/react"
import { ProgressSection } from "./index"

const meta: Meta<typeof ProgressSection> = {
  component: ProgressSection,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <div className="w-full max-w-96">
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof ProgressSection>

export const Default: Story = {
  args: {
    label: "Weekly Progress",
    value: 32,
    max: 40,
    showMax: true,
    unit: "h",
    primaryLabel: "Worked",
    secondaryLabel: "Remaining",
  },
}
