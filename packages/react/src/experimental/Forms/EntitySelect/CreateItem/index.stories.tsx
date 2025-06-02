import type { Meta, StoryObj } from "@storybook/react-vite"

import { ComponentProps } from "react"
import { fn } from "storybook/test"
import { CreateItem } from "./index"

const meta: Meta = {
  component: CreateItem,
  title: "EntitySelect/CreateItem",
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
    label: "Create new user",
    onCreate: fn(),
  } satisfies ComponentProps<typeof CreateItem>,
} satisfies Meta<typeof CreateItem>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
