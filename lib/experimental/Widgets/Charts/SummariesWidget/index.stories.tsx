import type { Meta } from "@storybook/react"

import { SummariesWidget } from "."
import { WidgetDecorator } from "../storybook-utils"

const meta = {
  component: SummariesWidget,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
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
