import { ComponentProps } from "react"
import { BaseAvatar } from "../BaseAvatar"
import { AvatarBadge } from "../F0Avatar/types"

type BaseAvatarProps = ComponentProps<typeof BaseAvatar>

export type F0AvatarPersonProps = {
  firstName: string
  lastName: string
  src?: string
  size?: BaseAvatarProps["size"]
  badge?: AvatarBadge
} & Pick<BaseAvatarProps, "aria-label" | "aria-labelledby">
