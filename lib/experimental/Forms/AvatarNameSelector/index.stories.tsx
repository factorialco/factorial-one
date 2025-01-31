import type { Meta, StoryObj } from "@storybook/react"

import { fn } from "@storybook/test"
import { ComponentProps, useState } from "react"
import { AvatarNameSelector } from "."
import { famousEmployees } from "./avatar-name.factory.spec"
import {
  teamsWithEmployees,
  workplaceWithEmployees,
} from "./groups-avatar-name.factory.spec"

const GROUP_DATA = {
  all: famousEmployees,
  teams: teamsWithEmployees,
  workplaces: workplaceWithEmployees,
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
    entities: [],
    placeholder: "Select employees...",
    groups: [
      { label: "Employees", value: "all" },
      { label: "Teams", value: "teams" },
      { label: "Workplaces", value: "workplaces" },
    ],
    selectedGroup: "all",
    onGroupChange: fn(),
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
    entities: [],
    placeholder: "Select employees...",
    groups: [
      { label: "Employees", value: "all" },
      { label: "Teams", value: "teams" },
      { label: "Workplaces", value: "workplaces" },
    ],
    selectedGroup: "teams",
    onGroupChange: fn(),
  } satisfies ComponentProps<typeof AvatarNameSelector>,
}
