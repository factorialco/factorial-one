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
    actions: {
      primary: {
        label: "Primary",
        onClick: () => alert("Primary"),
      },
      secondary: {
        label: "Secondary",
        onClick: () => alert("Secondary"),
      },
    },
    onClose: () => alert("Closed"),
  },
  tags: ["autodocs", "experimental"],
  decorators: [
    (Story) => (
      <div className="w-100 h-12">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof ToolBar>

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {}
