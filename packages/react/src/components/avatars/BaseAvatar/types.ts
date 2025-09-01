import { InternalAvatarProps } from "@/ui/Avatar"

export const avatarSizes = ["2xl", "xl", "lg", "md", "sm", "xs"] as const

export type AvatarSize = (typeof avatarSizes)[number]

export const sizesMapping: Record<InternalAvatarProps["size"], AvatarSize> = {
  xxlarge: "2xl",
  xlarge: "xl",
  large: "lg",
  medium: "md",
  small: "sm",
  xsmall: "xs",
} as const
