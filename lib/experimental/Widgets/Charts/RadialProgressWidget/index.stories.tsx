import type { Meta } from "@storybook/react"
import { RadialProgressWidget } from "."

const meta = {
  component: RadialProgressWidget,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    header: {
      title: "A Radial Progress Chart",
      subtitle: "2024",
      info: "This is a radial progress chart",
    },
    chart: {
      value: 75,
      max: 100,
      color: "hsl(var(--chart-1))",
      overview: { number: 75, label: "Completed" },
    },
  },
  decorators: [
    (Story) => (
      <div className="w-full min-w-80">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof RadialProgressWidget>

export default meta

export const Default = {}

export const CustomColor: Meta<typeof RadialProgressWidget> = {
  args: {
    chart: {
      value: 60,
      max: 100,
      color: "hsl(var(--chart-3))",
      overview: { number: 60, label: "Progress" },
    },
  },
}