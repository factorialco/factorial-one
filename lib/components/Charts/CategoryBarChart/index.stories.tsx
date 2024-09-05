import type { Meta } from "@storybook/react"
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

export const Default = {}

export const MultipleValues: Meta<typeof CategoryBar> = {
  args: {
    data: [
      { name: "Employee Eng.", value: 42 },
      { name: "Time Off Req.", value: 91 },
      { name: "New Hires", value: 13 },
      { name: "Training Sess.", value: 67 },
      { name: "Performance Rev.", value: 85 },
    ],
  },
}
