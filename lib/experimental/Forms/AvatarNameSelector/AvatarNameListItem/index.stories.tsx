import type { Meta, StoryObj } from "@storybook/react"

import { fn } from "@storybook/test"
import { ComponentProps } from "react"
import { AvatarNameListItem } from "."
import { famousEmployees } from "../avatar-name.factory"
import { teamsWithEmployees } from "../groups-avatar-name.factory"

const meta: Meta = {
  component: AvatarNameListItem,
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
    partialSelected: false,
    groupView: false,
    selected: false,
    onSelect: fn(),
    onRemove: fn(),
    onSubItemRemove: fn(),
    onSubItemSelect: fn(),
    onExpand: fn(),
    expanded: false,
    search: "",
  } satisfies ComponentProps<typeof AvatarNameListItem>,
} satisfies Meta<typeof AvatarNameListItem>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const GroupViewSelected: Story = {
  args: {
    entity: teamsWithEmployees[0],
    partialSelected: false,
    groupView: true,
    selected: true,
    onSelect: fn(),
    onRemove: fn(),
    onExpand: fn(),
    onSubItemRemove: fn(),
    onSubItemSelect: fn(),
    expanded: false,
  },
}

export const GroupViewPartial: Story = {
  args: {
    entity: teamsWithEmployees[0],
    partialSelected: true,
    groupView: true,
    selected: false,
    onSelect: fn(),
    onRemove: fn(),
    onExpand: fn(),
    onSubItemRemove: fn(),
    onSubItemSelect: fn(),
    expanded: false,
  },
}

export const GroupViewExpanded: Story = {
  args: {
    ...GroupViewSelected.args,
    expanded: true,
  },
}
