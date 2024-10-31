import { color as AvatarColors, Avatar as AvatarComponent } from "@/ui/avatar"
import { type ComponentProps } from "react"

type ShadAvatarProps = ComponentProps<typeof AvatarComponent>

export function getInitials(
  name: string | string[],
  size?: ShadAvatarProps["size"]
): string {
  const nameArray = Array.isArray(name) ? name : [name]
  const isSmall = size === "xsmall" || size === "small"

  if (isSmall) return nameArray[0][0].toUpperCase()
  if (!Array.isArray(name)) return name.slice(0, 2).toUpperCase()

  return nameArray
    .slice(0, 2)
    .map((name) => name[0])
    .join("")
    .toUpperCase()
}

export function getAvatarColor(text: string): ShadAvatarProps["color"] {
  let hash = 0

  for (let i = 0; i < text.length; i++) {
    hash = text.charCodeAt(i) + ((hash << 5) - hash)
    hash = hash & hash
  }

  const index =
    ((hash % AvatarColors.length) + AvatarColors.length) % AvatarColors.length

  return AvatarColors[index]
}
