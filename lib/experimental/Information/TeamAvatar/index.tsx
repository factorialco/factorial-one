import { ComponentProps } from "react"
import { BaseAvatar } from "../BaseAvatar"

type BaseAvatarProps = ComponentProps<typeof BaseAvatar>

type Props = {
  name: string
  src?: string
  size?: BaseAvatarProps["size"]
  color?: BaseAvatarProps["color"]
}

export const TeamAvatar = ({ name, src, size, color }: Props) => {
  return (
    <BaseAvatar type="base" name={name} src={src} size={size} color={color} />
  )
}

TeamAvatar.displayName = "TeamAvatar"
