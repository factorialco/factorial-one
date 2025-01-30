import type { Meta, StoryObj } from "@storybook/react"

import { ComponentProps } from "react"
import { AvatarNameSelector } from "."
import { famousEmployees } from "./avatar-name.factory.spec"

const meta: Meta = {
  component: AvatarNameSelector,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="w-full min-w-72 max-w-96">
        <Story />
      </div>
    ),
  ],
  args: {
    entities: famousEmployees,
    placeholder: "Select employees...",
  } satisfies ComponentProps<typeof AvatarNameSelector>,
} satisfies Meta<typeof AvatarNameSelector>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
