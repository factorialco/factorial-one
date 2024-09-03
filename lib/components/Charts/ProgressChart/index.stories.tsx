import type { Meta } from "@storybook/react"
import { ProgressBar } from "."

const meta: Meta<typeof ProgressBar> = {
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
}

export default meta

export const Default = {}
