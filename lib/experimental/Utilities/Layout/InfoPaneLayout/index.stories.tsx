import type { Meta, StoryObj } from "@storybook/react"

import { InfoPaneLayout } from "."

const meta = {
  component: InfoPaneLayout,
  tags: ["autodocs"],
  args: {
    mainContent: (
      <div className="flex h-64 items-center justify-center bg-f1-foreground-info text-f1-foreground-inverse">
        Main
      </div>
    ),
    sideContent: (
      <div className="flex h-48 items-center justify-center bg-f1-foreground-secondary text-f1-foreground-inverse">
        Side
      </div>
    ),
  },
  decorators: [
    (Story) => (
      <div className="h-svh">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof InfoPaneLayout>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
