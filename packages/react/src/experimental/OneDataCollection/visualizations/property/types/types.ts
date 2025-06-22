import { AvatarBadge } from "@/experimental/Information/Avatars/types"

export type WithAvatarBadge<T> = T & {
  badge?: AvatarBadge
}

export interface WithPlaceholder {
  placeholder?: string
}
