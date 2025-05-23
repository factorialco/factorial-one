import type { IconType } from "../../../../components/Utilities/Icon"
import type { AvatarVariant } from "../../../Information/Avatars/Avatar"

export type SelectItemObject<T, R = unknown> = {
  type?: "item"
  value: T
  label: string
  description?: string
  avatar?: AvatarVariant
  tag?: string
  icon?: IconType
  item?: R
}

export type SelectItemProps<T, R = unknown> =
  | SelectItemObject<T, R>
  | { type: "separator" }
