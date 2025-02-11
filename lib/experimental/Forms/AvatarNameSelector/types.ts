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

export interface AvatarNameSelectorProps {
  entities: AvatarNamedEntity[]
  groups: AvatarNamedGroup[]
  selectedGroup: string
  placeholder: string
  onGroupChange: (value: string | null) => void
  searchPlaceholder?: string
  selectAllLabel?: string
  clearLabel?: string
  selectedLabel?: string
}
