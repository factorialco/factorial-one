import type { Meta, StoryObj } from "@storybook/react"

import { Placeholder } from "@/lib/storybook-utils/placeholder"
import { WidgetSection } from "."

const meta: Meta = {
  component: WidgetSection,
  parameters: {
    layout: "centered",
    tags: ["autodocs"],
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
