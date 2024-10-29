import { ComponentProps } from "react"
import { BaseAvatar } from "../BaseAvatar"

type BaseAvatarProps = ComponentProps<typeof BaseAvatar>

type Props = {
  firstName: string
  lastName: string
  src?: string
  size?: BaseAvatarProps["size"]
  color?: BaseAvatarProps["color"]
}

export const UserAvatar = ({
  firstName,
  lastName,
  src,
  size,
  color,
}: Props) => {
  return (
    <BaseAvatar
      type="rounded"
      name={[firstName, lastName]}
      src={src}
      size={size}
      color={color}
    />
  )
}

UserAvatar.displayName = "UserAvatar"
