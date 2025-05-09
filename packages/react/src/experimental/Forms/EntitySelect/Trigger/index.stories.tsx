import type { Meta, StoryObj } from "@storybook/react"

import { ComponentProps } from "react"
import { Trigger } from "./index"

const meta: Meta = {
  component: Trigger,
  title: "EntitySelect/Trigger",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs", "experimental"],
  decorators: [
    (Story) => (
      <div className="w-full min-w-72 max-w-96">
        <Story />
      </div>
    ),
  ],
  args: {
    placeholder: "Select employees...",
    selected: "employees selected",
    selectedEntities: [],
  } satisfies ComponentProps<typeof Trigger>,
} satisfies Meta<typeof Trigger>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
