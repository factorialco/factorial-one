import { IconType } from "@/components/Utilities/Icon"
import { AvatarVariant } from "@/experimental/Information/Avatars/Avatar"
import { StatusVariant } from "@/experimental/Information/Tags/StatusTag"

export type BaseMetadata = {
  icon: IconType
}

export type SimpleMetadata = BaseMetadata & {
  type: "text"
  title: string
}

export type AvatarListMetadata = BaseMetadata & {
  type: "avatarList"
  avatars: AvatarVariant[]
  max?: number
}

export type StatusMetadata = BaseMetadata & {
  type: "status"
  status: StatusVariant
  label: string
}

export type UserMetadata = BaseMetadata & {
  type: "user"
  firstName: string
  lastName: string
  src?: string
}

export type CompanyMetadata = BaseMetadata & {
  type: "company"
  name: string
  src?: string
}

export type TeamMetadata = BaseMetadata & {
  type: "team"
  name: string
  src?: string
}

export type TagMetadata = BaseMetadata & {
  type: "tag"
  label: string
  tagIcon?: IconType
}

export type Metadata =
  | SimpleMetadata
  | AvatarListMetadata
  | StatusMetadata
  | UserMetadata
  | CompanyMetadata
  | TeamMetadata
  | TagMetadata
