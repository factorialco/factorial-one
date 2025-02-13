import type { Meta, StoryObj } from "@storybook/react"

import { ToolBar } from "."

const meta = {
  title: "ToolBar",
  component: ToolBar,
  parameters: {
    layout: "fullscreen",
    a11y: {
      skipCi: true,
    },
    docs: {
      story: { inline: false, height: "800px" },
    },
  },
  args: {
    children: <span>Toolbar Content</span>,
  },
  tags: ["autodocs", "experimental"],
} satisfies Meta<typeof ToolBar>

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {}
