import type { AvatarVariant } from "@/components/avatars/F0Avatar"
import type { F0IconType } from "@/components/F0Icon"

export type SelectItemObject<T, R = unknown> = {
  type?: "item"
  value: T
  label: string
  description?: string
  avatar?: AvatarVariant
  tag?: string
  icon?: F0IconType
  item?: R
}

export type SelectItemProps<T, R = unknown> =
  | SelectItemObject<T, R>
  | { type: "separator" }
