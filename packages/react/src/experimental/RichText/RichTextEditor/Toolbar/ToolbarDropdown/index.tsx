import { IconType } from "@/components/exports"
import { Dropdown } from "@/experimental/exports"
import React from "react"
import { ToolbarButton } from "../ToolbarButton"

interface ToolbarDropdownItem {
  label: string
  isActive?: boolean
  onClick: () => void
  icon: IconType
  tooltip?: {
    label: string
    shortcut?: string[]
  }
}

interface ToolbarDropdownProps {
  items: ToolbarDropdownItem[]
  children: React.ReactNode
  isFullscreen: boolean
  disabled: boolean
  tooltip?: {
    label: string
    shortcut?: string[]
  }
  mode: "light" | "dark"
}

const convertItemsToDropdownItems = (items: ToolbarDropdownItem[]) => {
  return items.map((item) => ({
    label: item.label,
    onClick: item.onClick,
    icon: item.icon || undefined,
    tooltip: item.tooltip,
  }))
}

const ToolbarDropdown = ({
  items,
  children,
  isFullscreen,
  disabled,
  mode,
}: ToolbarDropdownProps) => {
  return isFullscreen ? (
    items?.map((item) => (
      <ToolbarButton
        key={item.label}
        onClick={item.onClick}
        active={item.isActive || false}
        label={item.label}
        disabled={disabled}
        icon={item.icon}
        tooltip={item.tooltip}
        mode={mode}
      />
    ))
  ) : (
    <Dropdown items={convertItemsToDropdownItems(items)}>{children}</Dropdown>
  )
}

export { ToolbarDropdown }
