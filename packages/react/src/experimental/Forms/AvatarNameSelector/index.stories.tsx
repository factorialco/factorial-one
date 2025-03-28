import type { Meta } from "@storybook/react"

import { expect, fn, userEvent, within } from "@storybook/test"
import { ChevronDown, ChevronRight } from "lucide-react"
import { ComponentProps, useState } from "react"
import { RawTag } from "../../Information/Tags/RawTag"
import { famousEmployees } from "./avatar-name.factory"
import {
  teamsWithEmployees,
  workplaceWithEmployees,
} from "./groups-avatar-name.factory"
import { AvatarNameSelector } from "./index"
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
  onItemExpandedChange: fn(),
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
    const [expandedElements, setExpandedElements] = useState<number[]>([])
    const [selected, setSelected] = useState<AvatarNamedEntity[]>([
      {
        ...famousEmployees[0],
      },
      { ...famousEmployees[1] },
    ])
    const [selectedGroup, setSelectedGroup] = useState<string>(
      props.selectedGroup ?? "all"
    )

    const onItemExpandedChange = (id: number, expanded: boolean) => {
      if (expanded) {
        setExpandedElements([id].concat(expandedElements))
      } else {
        setExpandedElements(expandedElements.filter((el) => el !== id))
      }
    }

    return (
      <AvatarNameSelector
        {...props}
        singleSelector={false}
        loading={loading}
        entities={
          GROUP_DATA[selectedGroup as keyof typeof GROUP_DATA].map((el) => ({
            ...el,
            expanded: expandedElements.includes(el.id),
            subItems: el.subItems?.map((el2) => ({ ...el2 })),
          })) || []
        }
        selectedGroup={selectedGroup}
        onItemExpandedChange={onItemExpandedChange}
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
  play: async ({ canvasElement }: { canvasElement: HTMLCanvasElement }) => {
    const canvas = within(canvasElement)

    // Test initial render
    const button = canvas.getByRole("button")
    expect(button).toBeInTheDocument()

    // Test opening popover
    await userEvent.click(button)
    await new Promise((resolve) => setTimeout(resolve, 600))

    const popover = document.querySelector(
      "[data-radix-popper-content-wrapper]"
    )
    expect(popover).toBeInTheDocument()

    // Test search functionality
    const input = popover?.querySelector("input")
    expect(input).toBeInTheDocument()
    await userEvent.type(input!, "Albert Einstein")
    await new Promise((resolve) => setTimeout(resolve, 600))

    // Get the popover content and use within to scope our queries
    const popoverContent = within(popover as HTMLElement)

    // Find the main content section (left side) where the list is
    const mainContent = popoverContent
      .getByRole("dialog")
      .querySelector(".absolute.left-0")
    expect(mainContent).toBeInTheDocument()

    // Use within to scope our search to just the main content
    const mainContentQueries = within(mainContent as HTMLElement)

    // Find and click the item in the main list
    const listItem = mainContentQueries.getByRole("checkbox", {
      name: /Albert Einstein/i,
    })
    expect(listItem).toBeInTheDocument()
    await userEvent.click(listItem.closest("label")!)

    // Test that selection is reflected in trigger
    const triggerText = canvas.getByText(/Marie Curie/)
    expect(triggerText).toBeInTheDocument()
  },
}

export const WithSelectedGroup = {
  args: {
    ...defaultArgs,
    selectedGroup: "teams",
  } as AvatarNameSelectorProps,
  render: (props: ComponentProps<typeof AvatarNameSelector>) => {
    const [loading, setLoading] = useState<boolean>(props.loading ?? true)
    const [expandedElements, setExpandedElements] = useState<number[]>([])
    const [selected, setSelected] = useState<AvatarNamedEntity[]>([
      {
        ...famousEmployees[0],
      },
      { ...famousEmployees[1] },
    ])
    const [selectedGroup, setSelectedGroup] = useState<string>(
      props.selectedGroup ?? "all"
    )

    const onItemExpandedChange = (id: number, expanded: boolean) => {
      if (expanded) {
        setExpandedElements([id].concat(expandedElements))
      } else {
        setExpandedElements(expandedElements.filter((el) => el !== id))
      }
    }

    return (
      <AvatarNameSelector
        {...props}
        singleSelector={false}
        loading={loading}
        onItemExpandedChange={onItemExpandedChange}
        entities={
          GROUP_DATA[selectedGroup as keyof typeof GROUP_DATA].map((el) => ({
            ...el,
            expanded: expandedElements.includes(el.id),
            subItems: el.subItems?.map((el2) => ({ ...el2 })),
          })) || []
        }
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
    const [expandedElements, setExpandedElements] = useState<number[]>([])
    const [selectedGroup, setSelectedGroup] = useState<string>(
      props.selectedGroup ?? "all"
    )

    const onItemExpandedChange = (id: number, expanded: boolean) => {
      if (expanded) {
        setExpandedElements([id].concat(expandedElements))
      } else {
        setExpandedElements(expandedElements.filter((el) => el !== id))
      }
    }

    return (
      <AvatarNameSelector
        {...props}
        singleSelector
        loading={loading}
        entities={
          GROUP_DATA[selectedGroup as keyof typeof GROUP_DATA].map((el) => ({
            ...el,
            expanded: expandedElements.includes(el.id),
            subItems: el.subItems?.map((el2) => ({ ...el2 })),
          })) || []
        }
        selectedGroup={selectedGroup}
        onItemExpandedChange={onItemExpandedChange}
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
    const [expandedElements, setExpandedElements] = useState<number[]>([])
    const [selected, setSelected] = useState<AvatarNamedEntity[]>([
      {
        ...famousEmployees[0],
      },
      { ...famousEmployees[1] },
    ])
    const [selectedGroup, setSelectedGroup] = useState<string>(
      props.selectedGroup ?? "all"
    )

    const onItemExpandedChange = (id: number, expanded: boolean) => {
      if (expanded) {
        setExpandedElements([id].concat(expandedElements))
      } else {
        setExpandedElements(expandedElements.filter((el) => el !== id))
      }
    }

    return (
      <div className="w-[300px] border-2">
        <AvatarNameSelector
          {...props}
          singleSelector={false}
          width={undefined}
          loading={loading}
          onItemExpandedChange={onItemExpandedChange}
          entities={
            GROUP_DATA[selectedGroup as keyof typeof GROUP_DATA].map((el) => ({
              ...el,
              expanded: expandedElements.includes(el.id),
              subItems: el.subItems?.map((el2) => ({ ...el2 })),
            })) || []
          }
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
    const [expandedElements, setExpandedElements] = useState<number[]>([])
    const [selected, setSelected] = useState<AvatarNamedEntity[]>([
      {
        ...famousEmployees[0],
      },
      { ...famousEmployees[1] },
    ])
    const [selectedGroup, setSelectedGroup] = useState<string>(
      props.selectedGroup ?? "all"
    )

    const onItemExpandedChange = (id: number, expanded: boolean) => {
      if (expanded) {
        setExpandedElements([id].concat(expandedElements))
      } else {
        setExpandedElements(expandedElements.filter((el) => el !== id))
      }
    }

    return (
      <form onSubmit={fn}>
        <AvatarNameSelector
          {...props}
          singleSelector={false}
          onItemExpandedChange={onItemExpandedChange}
          entities={
            GROUP_DATA[selectedGroup as keyof typeof GROUP_DATA].map((el) => ({
              ...el,
              expanded: expandedElements.includes(el.id),
              subItems: el.subItems?.map((el2) => ({ ...el2 })),
            })) || []
          }
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
    const [expandedElements, setExpandedElements] = useState<number[]>([])
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

    const onItemExpandedChange = (id: number, expanded: boolean) => {
      if (expanded) {
        setExpandedElements([id].concat(expandedElements))
      } else {
        setExpandedElements(expandedElements.filter((el) => el !== id))
      }
    }

    return (
      <div className="w-[600px]">
        <AvatarNameSelector
          {...props}
          singleSelector={false}
          loading={loading}
          onItemExpandedChange={onItemExpandedChange}
          entities={
            GROUP_DATA[selectedGroup as keyof typeof GROUP_DATA].map((el) => ({
              ...el,
              expanded: expandedElements.includes(el.id),
              subItems: el.subItems?.map((el2) => ({ ...el2 })),
            })) || []
          }
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

export const WithSearch = {
  args: {
    ...defaultArgs,
    loading: false,
  },
  play: async ({ canvasElement }: { canvasElement: HTMLCanvasElement }) => {
    const canvas = within(canvasElement)
    await userEvent.click(canvas.getByRole("button"))
    await new Promise((resolve) => setTimeout(resolve, 600))

    const popover = document.querySelector(
      "[data-radix-popper-content-wrapper]"
    )
    const popoverContent = within(popover as HTMLElement)
    const input = popoverContent.getByRole("textbox")
    expect(input).toBeInTheDocument()

    // Test empty search
    await userEvent.type(input, "NonExistentPerson")
    await new Promise((resolve) => setTimeout(resolve, 600))

    // Verify no results message (both title and subtitle)
    const noResultsTitle = popoverContent.getByText("No results found")
    expect(noResultsTitle).toBeInTheDocument()
    const noResultsSubtitle = popoverContent.getByText(
      "Try searching with a different term."
    )
    expect(noResultsSubtitle).toBeInTheDocument()

    // Test partial match
    await userEvent.clear(input)
    await userEvent.type(input, "Ein")
    await new Promise((resolve) => setTimeout(resolve, 600))

    // Verify results appear and no results message is gone
    const matchedItems = popoverContent.getAllByRole("checkbox")
    expect(matchedItems.length).toBeGreaterThan(0)
    expect(noResultsTitle).not.toBeInTheDocument()
    expect(noResultsSubtitle).not.toBeInTheDocument()
  },
}

export const LoadingState = {
  args: {
    ...defaultArgs,
    loading: true,
  },
  play: async ({ canvasElement }: { canvasElement: HTMLCanvasElement }) => {
    const canvas = within(canvasElement)

    // Click the trigger button
    const triggerButton = canvas.getByRole("button")
    await userEvent.click(triggerButton)

    // Wait a bit for the popover to appear
    await new Promise((resolve) => setTimeout(resolve, 100))

    // Find the popover and verify it exists
    const popover = document.querySelector(
      "[data-radix-popper-content-wrapper]"
    )
    expect(popover).toBeInTheDocument()

    // Use within to scope our queries to the popover
    const popoverContent = within(popover as HTMLElement)

    // Check for loading state by finding the spinner container
    const loadingSpinner = popoverContent
      .getByRole("dialog")
      .querySelector('div[aria-busy="true"][aria-live="polite"]')
    expect(loadingSpinner).toBeInTheDocument()

    // Wait for loading to complete
    await new Promise((resolve) => setTimeout(resolve, 600))

    // Verify content is loaded
    const mainContent = popoverContent.getByRole("dialog")
    expect(mainContent).toBeInTheDocument()

    // Verify loading spinner is gone
    const spinnerAfterLoad = popoverContent
      .getByRole("dialog")
      .querySelector('div[aria-busy="true"][aria-live="polite"]')
    expect(spinnerAfterLoad).not.toBeInTheDocument()
  },
}
