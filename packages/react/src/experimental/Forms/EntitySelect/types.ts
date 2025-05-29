import { PopoverProps } from "@radix-ui/react-popover"

export type EntitySelectSubEntity = {
  subId: EntityId
  subName: string
  subAvatar?: string
  subSearchKeys?: string[]
}

export type EntitySelectEntity = {
  id: EntityId
  name: string
  avatar?: string
  expanded?: boolean
  searchKeys?: string[]
  subItems?: EntitySelectSubEntity[]
}

export type EntitySelectNamedGroup = {
  value: string
  label: string
  groupType?: "avatar" | "team"
}

interface EntitySelectCommonProps
  extends Omit<PopoverProps, "children" | "modal"> {
  entities: EntitySelectEntity[]
  groups: EntitySelectNamedGroup[]
  selectedGroup: string
  triggerPlaceholder: string
  triggerSelected: string
  notFoundTitle: string
  notFoundSubtitle: string
  onItemExpandedChange: (id: EntityId, expanded: boolean) => void
  onGroupChange: (value: string | null) => void
  disabled?: boolean
  zIndex?: number
  loading?: boolean
  searchPlaceholder?: string
  selectAllLabel?: string
  clearLabel?: string
  selectedLabel?: string
  selectedEntities?: EntitySelectEntity[]
  alwaysOpen?: boolean
  defaultOpen?: boolean
  width?: number
  hiddenAvatar?: boolean
  applySearchToGroup?: boolean
}

export type FlattenedItem = {
  parent: EntitySelectEntity | null
  subItem: EntitySelectSubEntity & {
    expanded?: boolean
    subItems?: EntitySelectSubEntity[]
  }
}
export interface EntitySelectSingleProps extends EntitySelectCommonProps {
  onSelect: (entity: EntitySelectEntity | null) => void
  singleSelector: true
}

export interface EntitySelectMultipleProps extends EntitySelectCommonProps {
  onSelect: (entities: EntitySelectEntity[]) => void
  singleSelector: false | undefined
}

export type EntitySelectProps =
  | EntitySelectSingleProps
  | EntitySelectMultipleProps

export type EntityId = number | string
