import { ComponentProps } from "react"
import { BaseAvatar } from "../BaseAvatar"
import { AvatarBadge } from "../F0Avatar/types"

type BaseAvatarProps = ComponentProps<typeof BaseAvatar>

type Props = {
  name: string
  src?: string
  size?: BaseAvatarProps["size"]
  badge?: AvatarBadge
} & Pick<BaseAvatarProps, "aria-label" | "aria-labelledby">

export const F0AvatarTeam = ({
  name,
  src,
  size,
  "aria-label": ariaLabel,
  "aria-labelledby": ariaLabelledby,
  badge,
}: Props) => {
  return (
    <BaseAvatar
      type="base"
      name={name}
      src={src}
      size={size}
      color="random"
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledby}
      badge={badge}
    />
  )
}

F0AvatarTeam.displayName = "TeamAvatar"
