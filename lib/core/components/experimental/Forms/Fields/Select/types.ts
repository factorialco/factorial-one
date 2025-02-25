import type { AvatarVariant } from "@/core/components/experimental/Information/Avatars/Avatar.tsx"
import type { IconType } from "@/core/components/utility/Icon"

export type SelectItemObject<T> = {
  value: T
  label: string
  description?: string
  avatar?: AvatarVariant
  icon?: IconType
}

export type SelectItemProps<T> = SelectItemObject<T> | "separator"
