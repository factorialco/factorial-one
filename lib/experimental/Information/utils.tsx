import { OneDropdownButtonItem } from "@/components/Actions/OneDropdownButton/OneDropdownButton"
import { IconType } from "@/components/Utilities/Icon"

export interface PrimaryAction {
  disabled?: boolean
  tooltip?: string
  isVisible?: boolean
}

export interface PrimaryActionButton extends PrimaryAction {
  label: string
  icon?: IconType
  onClick: () => void
}

export interface PrimaryActionDropdown<T> extends PrimaryAction {
  items: OneDropdownButtonItem<T>[]
  value?: T
  onClick: (value: T) => void
}

export interface SecondaryAction extends PrimaryActionButton {
  variant?: "outline" | "critical"
}
