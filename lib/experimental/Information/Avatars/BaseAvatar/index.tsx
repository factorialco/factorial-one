import {
  Avatar as AvatarComponent,
  AvatarFallback,
  AvatarImage,
} from "@/ui/avatar"
import { ComponentProps, forwardRef } from "react"

type ShadAvatarProps = ComponentProps<typeof AvatarComponent>

type Props = {
  type: ShadAvatarProps["type"]
  name: string | string[]
  src?: string
  size?: ShadAvatarProps["size"]
  color?: ShadAvatarProps["color"]
}

function getInitials(
  name: string | string[],
  size?: ShadAvatarProps["size"]
): string {
  const nameArray = Array.isArray(name) ? name : [name]
  const hasSmallSize = size === "xsmall" || size === "small"

  if (hasSmallSize) return nameArray[0][0].toUpperCase()
  if (!Array.isArray(name)) return name.slice(0, 2).toUpperCase()

  return nameArray
    .slice(0, 2)
    .map((name) => name[0])
    .join("")
    .toUpperCase()
}

export const BaseAvatar = forwardRef<HTMLDivElement, Props>(
  ({ src, name, size, type, color }, ref) => {
    const initials = getInitials(name, size)

    return (
      <AvatarComponent size={size} type={type} color={color} ref={ref}>
        <AvatarImage src={src} alt={initials} />
        <AvatarFallback>{initials}</AvatarFallback>
      </AvatarComponent>
    )
  }
)

BaseAvatar.displayName = "BaseAvatar"
