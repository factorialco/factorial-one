import type { Meta } from "@storybook/react"

import { WidgetDecorator } from "../storybook-utils.tsx"
import { SummariesWidget } from "./index.tsx"

const meta = {
  title: "widgets/charts/SummariesWidget",
  component: SummariesWidget,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs", "experimental"],
  args: {
    summaries: [
      {
        value: 12,
        label: "Total",
      },
      {
        value: 20,
        label: "Count",
      },
    ],
  },
  decorators: [WidgetDecorator],
} satisfies Meta<typeof SummariesWidget>

export default meta

export const Default = {}
