import { BaseAvatarProps } from "../BaseAvatar/types"
import { AvatarBadge } from "../F0Avatar/types"

export type F0AvatarCompanyProps = {
  name: string
  src?: string
  size?: BaseAvatarProps["size"]
  badge?: AvatarBadge
} & Pick<BaseAvatarProps, "aria-label" | "aria-labelledby">
