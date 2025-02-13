import type { Meta } from "@storybook/react"

import { fn } from "@storybook/test"
import { useState } from "react"
import { AvatarNameSelector } from "."
import { famousEmployees } from "./avatar-name.factory"
import {
  teamsWithEmployees,
  workplaceWithEmployees,
} from "./groups-avatar-name.factory"
import {
  AvatarNamedGroup,
  AvatarNameSelectorMultipleProps,
  AvatarNameSelectorProps,
} from "./types"

const GROUP_DATA = {
  all: famousEmployees,
  teams: teamsWithEmployees,
  workplaces: workplaceWithEmployees,
}

const defaultArgs: AvatarNameSelectorMultipleProps = {
  entities: [],
  placeholder: "Select employees...",
  searchPlaceholder: "Search...",
  selectAllLabel: "Select all",
  clearLabel: "Clear",
  selectedLabel: "selected",
  notFoundTitle: "No results found",
  notFoundSubtitle: "Try searching with a different term.",
  groups: [
    { label: "None", value: "all", type: "avatar" },
    { label: "Team", value: "teams", type: "team" },
    { label: "Workplace", value: "workplaces" },
  ] as AvatarNamedGroup[],
  selectedGroup: "all",
  onGroupChange: fn(),
  onSelect: fn(),
  singleSelector: false,
}

const meta: Meta<typeof AvatarNameSelector> = {
  component: AvatarNameSelector,
  title: "AvatarNameSelector/AvatarNameSelector",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs", "experimental"],
  decorators: [
    (Story) => (
      <div className="h-[520px] w-full min-w-72 max-w-96">
        <Story />
      </div>
    ),
  ],
  args: {
    ...defaultArgs,
  } satisfies AvatarNameSelectorProps,
  render: (props) => {
    const [loading, setLoading] = useState<boolean>(props.loading ?? true)
    const [selectedGroup, setSelectedGroup] = useState<string>(
      props.selectedGroup ?? "all"
    )

    return (
      <AvatarNameSelector
        {...props}
        loading={loading}
        entities={GROUP_DATA[selectedGroup as keyof typeof GROUP_DATA] || []}
        selectedGroup={selectedGroup}
        onGroupChange={(value) => setSelectedGroup(value ?? "all")}
        onOpenChange={(open) =>
          open ? setTimeout(() => setLoading(false), 500) : setLoading(true)
        }
      />
    )
  },
}

export default meta

export const Default = {
  args: defaultArgs,
}

export const WithSelectedGroup = {
  args: {
    ...defaultArgs,
    selectedGroup: "teams",
  } as AvatarNameSelectorProps,
}

export const SingleSelector = {
  args: {
    ...defaultArgs,
    onSelect: fn(),
    singleSelector: true,
  } as AvatarNameSelectorProps,
}
