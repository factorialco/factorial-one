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
    label: "Weekly progress",
    value: 30,
    max: 40,
    showMax: true,
    unit: "h",
    legend: false,
  },
}

export const WithLegend: Story = {
  args: {
    label: "Weekly progress",
    value: 30,
    max: 40,
    showMax: true,
    unit: "h",
    legend: true,
    primaryLabel: "Worked",
    secondaryLabel: "Remaining",
  },
}

export const WithComment: Story = {
  args: {
    label: "Weekly progress",
    value: 30,
    max: 40,
    showMax: true,
    legend: false,
    unit: "h",
    note: "This is a comment",
  },
}
