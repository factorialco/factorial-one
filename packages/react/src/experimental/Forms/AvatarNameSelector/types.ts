import { PopoverProps } from "@radix-ui/react-popover"

export type AvatarNamedSubEntity = {
  subId: number
  subName: string
  subAvatar?: string
  subSearchKeys?: string[]
}

export type AvatarNamedEntity = {
  id: number
  name: string
  avatar?: string
  expanded?: boolean
  searchKeys?: string[]
  subItems?: AvatarNamedSubEntity[]
}

export type AvatarNamedGroup = {
  value: string
  label: string
  groupType?: "avatar" | "team"
}

interface AvatarNameSelectorCommonProps
  extends Omit<PopoverProps, "children" | "modal"> {
  entities: AvatarNamedEntity[]
  groups: AvatarNamedGroup[]
  selectedGroup: string
  triggerPlaceholder: string
  triggerSelected: string
  notFoundTitle: string
  notFoundSubtitle: string
  onItemExpandedChange: (id: number, expanded: boolean) => void
  onGroupChange: (value: string | null) => void
  disabled?: boolean
  zIndex?: number
  loading?: boolean
  searchPlaceholder?: string
  selectAllLabel?: string
  clearLabel?: string
  selectedLabel?: string
  selectedAvatarName?: AvatarNamedEntity[]
  alwaysOpen?: boolean
  width?: number
}

export type FlattenedItem = {
  parent: AvatarNamedEntity | null
  subItem: AvatarNamedSubEntity & {
    expanded?: boolean
    subItems?: AvatarNamedSubEntity[]
  }
}
export interface AvatarNameSelectorSingleProps
  extends AvatarNameSelectorCommonProps {
  onSelect: (entity: AvatarNamedEntity | null) => void
  singleSelector: true
}

export interface AvatarNameSelectorMultipleProps
  extends AvatarNameSelectorCommonProps {
  onSelect: (entities: AvatarNamedEntity[]) => void
  singleSelector: false | undefined
}

export type AvatarNameSelectorProps =
  | AvatarNameSelectorSingleProps
  | AvatarNameSelectorMultipleProps
