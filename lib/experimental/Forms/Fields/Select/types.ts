import type { IconType } from "@/components/Utilities/Icon"
import type { AvatarVariant } from "@/experimental/Information/Avatars/Avatar"

export type SelectItemObject<T> = {
  value: T
  label: string
  description?: string
  avatar?: AvatarVariant
  icon?: IconType
}

export type SelectItemProps<T> = SelectItemObject<T> | "separator"
