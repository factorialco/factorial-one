import { PopoverProps } from "@radix-ui/react-popover"

export type AvatarNamedSubEntity = {
  subId: number
  subName: string
  subAvatar?: string
}

export type AvatarNamedEntity = {
  id: number
  name: string
  avatar?: string
  expanded?: boolean
  subItems?: AvatarNamedSubEntity[]
}

export type AvatarNamedGroup = {
  value: string
  label: string
  type?: "avatar" | "team"
}

interface AvatarNameSelectorCommonProps
  extends Omit<PopoverProps, "children" | "modal"> {
  entities: AvatarNamedEntity[]
  groups: AvatarNamedGroup[]
  selectedGroup: string
  placeholder: string
  notFoundTitle: string
  notFoundSubtitle: string
  onGroupChange: (value: string | null) => void
  loading?: boolean
  searchPlaceholder?: string
  selectAllLabel?: string
  clearLabel?: string
  selectedLabel?: string
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
