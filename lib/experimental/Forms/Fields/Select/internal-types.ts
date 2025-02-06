import type { IconType } from "@/components/Utilities/Icon"
import type { AvatarVariant } from "@/experimental/Information/Avatars/Avatar"

export type SelectItemObject<T> = {
  value: T
  label: string
  icon?: IconType
  description?: string
  avatar?: AvatarVariant
}

export type SelectItemProps<T> = SelectItemObject<T> | "separator"
