import type { Meta } from "@storybook/react"

import { RadarChart } from "./index.tsx"

const dataConfig = {
  113: {
    label: "Mike",
  },
  112: {
    label: "Lily",
  },
}

const meta: Meta<typeof RadarChart<typeof dataConfig>> = {
  title: "charts/RadarChart",
  component: RadarChart,
  tags: ["autodocs", "experimental"],
  args: {
    dataConfig,
    data: [
      { label: "Action orientation", values: { 113: 4, 112: 4 } },
      { label: "Communication", values: { 113: 5, 112: 4 } },
      { label: "Decision making", values: { 113: 3, 112: 4 } },
      { label: "Execution", values: { 113: 2, 112: 1 } },
      { label: "Planning", values: { 113: 3, 112: 3 } },
      { label: "Teamwork", values: { 113: 5, 112: 4 } },
      { label: "Adaptability", values: { 113: 2, 112: 3 } },
      { label: "Stress management", values: { 113: 3, 112: 3 } },
      { label: "Work ethic", values: { 113: 4, 112: 4 } },
      { label: "Customer focus", values: { 113: 3, 112: 3 } },
      { label: "Problem solving", values: { 113: 4, 112: 4 } },
      { label: "Time management", values: { 113: 3, 112: 3 } },
      { label: "Leadership", values: { 113: 4, 112: 4 } },
      { label: "Conflict resolution", values: { 113: 3, 112: 3 } },
      { label: "Negotiation", values: { 113: 4, 112: 4 } },
      { label: "Innovation", values: { 113: 3, 112: 3 } },
    ],
  },
  decorators: [
    (Story) => (
      <div className="h-[500px] w-full">
        <Story />
      </div>
    ),
  ],
}

export default meta

export const Default = {}

export const WithCustomScale = {
  args: {
    dataConfig,
    scaleMin: 1,
    scaleMax: 10,
  },
}
