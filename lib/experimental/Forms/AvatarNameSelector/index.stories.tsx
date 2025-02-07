import type { Meta, StoryObj } from "@storybook/react"

import { fn } from "@storybook/test"
import { ComponentProps, useState } from "react"
import { AvatarNameSelector } from "."
import { famousEmployees } from "./avatar-name.factory"
import {
  teamsWithEmployees,
  workplaceWithEmployees,
} from "./groups-avatar-name.factory"

const GROUP_DATA = {
  all: famousEmployees,
  teams: teamsWithEmployees,
  workplaces: workplaceWithEmployees,
}

const defaultArgs = {
  entities: [],
  placeholder: "Select employees...",
  searchPlaceholder: "Search...",
  selectAllLabel: "Select all",
  clearLabel: "Clear",
  selectedLabel: "selected",
  groups: [
    { label: "Employees", value: "all" },
    { label: "Teams", value: "teams" },
    { label: "Workplaces", value: "workplaces" },
  ],
  selectedGroup: "all",
  onGroupChange: fn(),
}

const meta: Meta<typeof AvatarNameSelector> = {
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
    ...defaultArgs,
  } satisfies ComponentProps<typeof AvatarNameSelector>,
  render: (props) => {
    const [selectedGroup, setSelectedGroup] = useState<string>(
      props.selectedGroup ?? "all"
    )

    return (
      <AvatarNameSelector
        {...props}
        entities={GROUP_DATA[selectedGroup as keyof typeof GROUP_DATA] || []}
        selectedGroup={selectedGroup}
        onGroupChange={(value) => setSelectedGroup(value ?? "all")}
      />
    )
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithSelectedGroup: Story = {
  args: {
    ...defaultArgs,
    selectedGroup: "teams",
    onGroupChange: fn(),
  } satisfies ComponentProps<typeof AvatarNameSelector>,
}
