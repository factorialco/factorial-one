import type { Meta, StoryObj } from "@storybook/react-vite"
import { Action } from "../Action"

const meta: Meta<typeof Action> = {
  title: "Components/Action",
  component: Action,
  parameters: {
    chromatic: { disableSnapshot: true },
  },
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Action>

export const Basic: Story = {
  render: () => (
    <Action>
      <span>Action</span>
    </Action>
  ),
}
