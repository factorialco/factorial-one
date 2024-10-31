import { ComponentProps } from "react"
import { BaseAvatar } from "../BaseAvatar"

type BaseAvatarProps = ComponentProps<typeof BaseAvatar>

type Props = {
  firstName: string
  lastName: string
  src?: string
  size?: BaseAvatarProps["size"]
} & Pick<BaseAvatarProps, "aria-label" | "aria-labelledby">

export const UserAvatar = ({
  firstName,
  lastName,
  src,
  size,
  "aria-label": ariaLabel,
  "aria-labelledby": ariaLabelledby,
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
    />
  )
}

UserAvatar.displayName = "UserAvatar"
