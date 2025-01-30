export type AvatarNamedSubEntity = {
  id: number
  name: string
  avatar?: string
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
}

export interface AvatarNameSelectorProps {
  entities: AvatarNamedEntity[]
  groups: AvatarNamedGroup[]
  selectedGroup: string
  placeholder: string
  onGroupChange: (value: string | null) => void
}
