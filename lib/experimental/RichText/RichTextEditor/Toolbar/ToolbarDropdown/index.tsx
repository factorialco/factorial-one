import { Button } from "@/components/Actions/Button"
import { IconType } from "@/components/exports"
import { Dropdown } from "@/experimental/exports"
import React from "react"

interface ToolbarDropdownItem {
  label: string
  isActive?: boolean
  onClick: () => void
  icon?: IconType
}

interface ToolbarDropdownProps {
  items: ToolbarDropdownItem[]
  children: React.ReactNode
  isFullscreen: boolean
  disabled: boolean
}

const convertItemsToDropdownItems = (items: ToolbarDropdownItem[]) => {
  return items.map((item) => ({
    label: item.label,
    onClick: item.onClick,
  }))
}

const ToolbarDropdown = ({
  items,
  children,
  isFullscreen,
  disabled,
}: ToolbarDropdownProps) => {
  return isFullscreen ? (
    items?.map((item) => (
      <Button
        key={item.label}
        onClick={item.onClick}
        variant={item.isActive ? "neutral" : "ghost"}
        label={item.label}
        type="button"
        disabled={disabled}
      />
    ))
  ) : (
    <Dropdown items={convertItemsToDropdownItems(items)}>{children}</Dropdown>
  )
}

export { ToolbarDropdown }
