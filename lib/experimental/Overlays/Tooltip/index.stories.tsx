import { Button } from "@/components/Actions/Button"
import type { Meta, StoryObj } from "@storybook/react"
import { Tooltip } from "."

const meta: Meta<typeof Tooltip> = {
  title: "Tooltip",
  component: Tooltip,
  tags: ["autodocs", "experimental"],
  decorators: [
    (Story) => (
      <div className="flex h-32 items-center justify-center p-6">{Story()}</div>
    ),
  ],
}

export default meta

type Story = StoryObj<typeof Tooltip>

export const Basic: Story = {
  args: {
    label: "View planmed hours",
    description: "View a breakdown of planned working hours.",
    children: <Button variant="outline" label="Planned hours" />,
  },
}

export const WithShortcut: Story = {
  args: {
    label: "Collapse sidebar",
    children: <Button variant="outline" label="Hover me" />,
    shortcut: ["cmd", "."],
  },
}
