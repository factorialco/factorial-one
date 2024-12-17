import { StatusBadgeProps } from "@/experimental/Information/Badges/StatusBadge"
import { ComponentProps } from "react"
import { BaseAvatar } from "../BaseAvatar"

type BaseAvatarProps = ComponentProps<typeof BaseAvatar>

type Props = {
  firstName: string
  lastName: string
  src?: string
  size?: BaseAvatarProps["size"]
  badge?: StatusBadgeProps
} & Pick<BaseAvatarProps, "aria-label" | "aria-labelledby">

export const PersonAvatar = ({
  firstName,
  lastName,
  src,
  size,
  "aria-label": ariaLabel,
  "aria-labelledby": ariaLabelledby,
  badge,
}: Props) => {
  return (
    <BaseAvatar
      type="rounded"
      name={[firstName, lastName]}
      src={src}
      size={size}
      color="random"
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledby}
      badge={badge}
    />
  )
}

PersonAvatar.displayName = "PersonAvatar"
