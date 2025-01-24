import { IconType } from "@/components/Utilities/Icon"

export interface PrimaryAction {
  label: string
  icon?: IconType
  onClick: () => void
  disabled?: boolean
  tooltip?: string
  isVisible?: boolean
}

export interface SecondaryAction extends PrimaryAction {
  variant?: "outline" | "critical"
}
