import { sizes } from "@/ui/button.tsx"

export const oneDropdownButtonVariants = [
  "default",
  "outline",
  "neutral",
] as const
export type OneDropdownButtonVariant =
  (typeof oneDropdownButtonVariants)[number]
export const oneDropdownButtonSizes = sizes
export type OneDropdownButtonSize = (typeof oneDropdownButtonSizes)[number]
