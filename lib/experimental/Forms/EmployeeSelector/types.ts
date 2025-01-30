export type AvatarNamedSubEntity = {
  id: number
  name: string
  avatar?: string
}

export type AvatarNamedEntity = {
  id: number
  name: string
  avatar?: string
  subItems?: AvatarNamedEntity[]
}

export interface AvatarNameSelectorProps {
  entities: AvatarNamedEntity[]
  placeholder: string
}
