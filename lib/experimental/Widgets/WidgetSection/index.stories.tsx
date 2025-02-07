import type { Meta, StoryObj } from "@storybook/react"

import { Placeholder } from "@/lib/storybook-utils/placeholder"
import { WidgetSection } from "."

const meta: Meta = {
  title: "Widgets/WidgetSection",
  component: WidgetSection,
  tags: ["autodocs", "alpha"],
  parameters: {
    layout: "centered",
  },
  args: {
    title: "Worked / Planned hours",
    children: <Placeholder>Put your content in there</Placeholder>,
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithoutTitle: Story = {
  args: {
    title: undefined,
  },
}
