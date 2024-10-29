import { ComponentProps } from "react"
import { BaseAvatar } from "../BaseAvatar"

type BaseAvatarProps = ComponentProps<typeof BaseAvatar>

type Props = {
  name: string
  src?: string
  size?: BaseAvatarProps["size"]
}

export const TeamAvatar = ({ name, src, size }: Props) => {
  return (
    <BaseAvatar type="base" name={name} src={src} size={size} color="random" />
  )
}

TeamAvatar.displayName = "TeamAvatar"
