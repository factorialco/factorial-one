import type { Meta } from "@storybook/react"

import { RawTag } from "@/experimental/Information/Tags/RawTag"
import { fn } from "@storybook/test"
import { ChevronDown, ChevronRight } from "lucide-react"
import { ComponentProps, useState } from "react"
import { AvatarNameSelector } from "."
import { famousEmployees } from "./avatar-name.factory"
import {
  teamsWithEmployees,
  workplaceWithEmployees,
} from "./groups-avatar-name.factory"
import {
  AvatarNamedEntity,
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
  triggerPlaceholder: "Select employees...",
  triggerSelected: "employees selected",
  searchPlaceholder: "Search...",
  selectAllLabel: "Select all",
  clearLabel: "Clear",
  selectedLabel: "selected",
  notFoundTitle: "No results found",
  disabled: false,
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
  width: 500,
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
      <div className="h-[520px] w-full">
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
      <div className="w-64">
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
      </div>
    )
  },
}

export default meta

export const Default = {
  args: defaultArgs,
  render: (props: ComponentProps<typeof AvatarNameSelector>) => {
    const [loading, setLoading] = useState<boolean>(props.loading ?? true)
    const [selected, setSelected] = useState<AvatarNamedEntity[]>([
      {
        ...famousEmployees[0],
      },
      { ...famousEmployees[1] },
    ])
    const [selectedGroup, setSelectedGroup] = useState<string>(
      props.selectedGroup ?? "all"
    )

    return (
      <AvatarNameSelector
        {...props}
        singleSelector={false}
        loading={loading}
        entities={GROUP_DATA[selectedGroup as keyof typeof GROUP_DATA] || []}
        selectedGroup={selectedGroup}
        onGroupChange={(value) => {
          setSelected([])
          setSelectedGroup(value ?? "all")
        }}
        onOpenChange={(open) =>
          open ? setTimeout(() => setLoading(false), 500) : setLoading(true)
        }
        selectedAvatarName={selected}
        onSelect={(selection) => {
          setSelected(selection)
        }}
      />
    )
  },
}

export const WithSelectedGroup = {
  args: {
    ...defaultArgs,
    selectedGroup: "teams",
  } as AvatarNameSelectorProps,
  render: (props: ComponentProps<typeof AvatarNameSelector>) => {
    const [loading, setLoading] = useState<boolean>(props.loading ?? true)
    const [selected, setSelected] = useState<AvatarNamedEntity[]>([
      {
        ...famousEmployees[0],
      },
      { ...famousEmployees[1] },
    ])
    const [selectedGroup, setSelectedGroup] = useState<string>(
      props.selectedGroup ?? "all"
    )

    return (
      <AvatarNameSelector
        {...props}
        singleSelector={false}
        loading={loading}
        entities={GROUP_DATA[selectedGroup as keyof typeof GROUP_DATA] || []}
        selectedGroup={selectedGroup}
        onGroupChange={(value) => {
          setSelected([])
          setSelectedGroup(value ?? "all")
        }}
        onOpenChange={(open) =>
          open ? setTimeout(() => setLoading(false), 500) : setLoading(true)
        }
        selectedAvatarName={selected}
        onSelect={(selection) => {
          setSelected(selection)
        }}
      />
    )
  },
}

export const SingleSelector = {
  args: {
    ...defaultArgs,
    onSelect: fn(),
    singleSelector: true,
  } as AvatarNameSelectorProps,
  render: (props: ComponentProps<typeof AvatarNameSelector>) => {
    const [loading, setLoading] = useState<boolean>(props.loading ?? true)
    const [selected, setSelected] = useState<AvatarNamedEntity | undefined>()
    const [selectedGroup, setSelectedGroup] = useState<string>(
      props.selectedGroup ?? "all"
    )

    return (
      <AvatarNameSelector
        {...props}
        singleSelector
        loading={loading}
        entities={GROUP_DATA[selectedGroup as keyof typeof GROUP_DATA] || []}
        selectedGroup={selectedGroup}
        onGroupChange={(value) => {
          setSelected(undefined)
          setSelectedGroup(value ?? "all")
        }}
        onOpenChange={(open) =>
          open ? setTimeout(() => setLoading(false), 500) : setLoading(true)
        }
        selectedAvatarName={!selected ? [] : [selected]}
        onSelect={(selection) => {
          if (selectedGroup != "all") {
            const found = GROUP_DATA["all"].find(
              (el) => el.id === selection?.subItems?.[0]?.subId
            )
            setSelected(found)
          } else {
            setSelected(selection ?? undefined)
          }
        }}
      />
    )
  },
}

export const AlwaysOpen = {
  args: {
    ...defaultArgs,
    onSelect: fn(),
    singleSelector: false,
    loading: false,
    alwaysOpen: true,
  } as AvatarNameSelectorProps,
  render: (props: ComponentProps<typeof AvatarNameSelector>) => {
    const [loading, setLoading] = useState<boolean>(props.loading ?? true)
    const [selected, setSelected] = useState<AvatarNamedEntity[]>([
      {
        ...famousEmployees[0],
      },
      { ...famousEmployees[1] },
    ])
    const [selectedGroup, setSelectedGroup] = useState<string>(
      props.selectedGroup ?? "all"
    )

    return (
      <div className="w-[300px] border-2">
        <AvatarNameSelector
          {...props}
          singleSelector={false}
          width={undefined}
          loading={loading}
          entities={GROUP_DATA[selectedGroup as keyof typeof GROUP_DATA] || []}
          selectedGroup={selectedGroup}
          onGroupChange={(value) => {
            setSelected([])
            setSelectedGroup(value ?? "all")
          }}
          onOpenChange={(open) =>
            open ? setTimeout(() => setLoading(false), 500) : setLoading(true)
          }
          selectedAvatarName={selected}
          onSelect={(selection: AvatarNamedEntity[]) => {
            setSelected(selection)
          }}
        />
      </div>
    )
  },
}

export const AlwaysOpenInForm = {
  args: {
    ...defaultArgs,
    onSelect: fn(),
    singleSelector: false,
    loading: false,
    alwaysOpen: true,
  } as AvatarNameSelectorProps,
  render: (props: ComponentProps<typeof AvatarNameSelector>) => {
    const [selected, setSelected] = useState<AvatarNamedEntity[]>([
      {
        ...famousEmployees[0],
      },
      { ...famousEmployees[1] },
    ])
    const [selectedGroup, setSelectedGroup] = useState<string>(
      props.selectedGroup ?? "all"
    )

    return (
      <form onSubmit={fn}>
        <AvatarNameSelector
          {...props}
          singleSelector={false}
          entities={GROUP_DATA[selectedGroup as keyof typeof GROUP_DATA] || []}
          selectedGroup={selectedGroup}
          onGroupChange={(value) => {
            setSelected([])
            setSelectedGroup(value ?? "all")
          }}
          selectedAvatarName={selected}
          onSelect={(selection: AvatarNamedEntity[]) => {
            setSelected(selection)
          }}
        />
      </form>
    )
  },
}

export const WithCustomTrigger = {
  args: {
    ...defaultArgs,
    onSelect: fn(),
  } as AvatarNameSelectorProps,
  render: (props: ComponentProps<typeof AvatarNameSelector>) => {
    const [loading, setLoading] = useState<boolean>(props.loading ?? true)
    const [selectedGroup, setSelectedGroup] = useState<string>(
      props.selectedGroup ?? "all"
    )
    const [selected, setSelected] = useState<AvatarNamedEntity[]>([
      {
        ...famousEmployees[0],
      },
      { ...famousEmployees[1] },
    ])
    const [numSelected, setNumSelected] = useState<number>(2)
    const [open, setOpen] = useState<boolean>(false)

    return (
      <div className="w-[600px]">
        <AvatarNameSelector
          {...props}
          singleSelector={false}
          loading={loading}
          entities={GROUP_DATA[selectedGroup as keyof typeof GROUP_DATA] || []}
          selectedGroup={selectedGroup}
          onGroupChange={(value) => {
            setSelected([])
            setNumSelected(0)
            setSelectedGroup(value ?? "all")
          }}
          onOpenChange={(open) => {
            if (open) setTimeout(() => setLoading(false), 500)
            else setLoading(true)
            setOpen(open)
          }}
          selectedAvatarName={selected}
          onSelect={(selection: AvatarNamedEntity[]) => {
            setSelected(selection)
            if (selectedGroup != "all") {
              let total = 0
              selection.forEach((el) => (total += el.subItems?.length ?? 0))
              setNumSelected(total)
            } else {
              setNumSelected(selection.length)
            }
          }}
        >
          <div className="flex justify-start gap-2">
            <RawTag icon={open ? ChevronDown : ChevronRight} />
            <span className="my-auto">{`${numSelected} selected`}</span>
          </div>
        </AvatarNameSelector>
      </div>
    )
  },
}
