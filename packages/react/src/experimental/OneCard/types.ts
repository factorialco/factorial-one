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

export type Metadata = SimpleMetadata | AvatarListMetadata | StatusMetadata
