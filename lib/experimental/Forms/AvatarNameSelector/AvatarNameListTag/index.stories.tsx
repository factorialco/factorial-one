import type { Meta, StoryObj } from "@storybook/react"

import { fn } from "@storybook/test"
import { ComponentProps } from "react"
import { AvatarNameListTag } from "."
import { famousEmployees } from "../avatar-name.factory"
import { teamsWithEmployees } from "../groups-avatar-name.factory"

const meta: Meta = {
  component: AvatarNameListTag,
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
    entity: famousEmployees[0],
    groupView: false,
    subItemsSelected: [],
    onSubItemRemove: fn(),
    onRemove: fn(),
  } satisfies ComponentProps<typeof AvatarNameListTag>,
} satisfies Meta<typeof AvatarNameListTag>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const GroupView: Story = {
  args: {
    entity: teamsWithEmployees[0],
    groupView: true,
    subItemsSelected: teamsWithEmployees[0].subItems,
    onSubItemRemove: fn(),
    onRemove: fn(),
  },
}
