import type { Meta } from "@storybook/react"
import { RadialProgressChart } from "."

const meta: Meta<typeof RadialProgressChart> = {
  component: RadialProgressChart,
  tags: ["autodocs"],
  args: {
    value: 75,
    max: 100,
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

export const WithOverview: Meta<typeof RadialProgressChart> = {
  args: {
    value: 75,
    overview: { number: 75, label: "Completed" },
  },
}
