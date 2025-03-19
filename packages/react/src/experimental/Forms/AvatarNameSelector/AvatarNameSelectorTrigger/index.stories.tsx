import type { Meta, StoryObj } from "@storybook/react"

import { ComponentProps } from "react"
import { AvatarNameSelectorTrigger } from "./index"

const meta: Meta = {
  component: AvatarNameSelectorTrigger,
  title: "AvatarNameSelector/AvatarNameSelectorTrigger",
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
    selectedAvatarName: [],
  } satisfies ComponentProps<typeof AvatarNameSelectorTrigger>,
} satisfies Meta<typeof AvatarNameSelectorTrigger>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
