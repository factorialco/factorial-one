import React from "react"

import { Dropdown } from "@/experimental/exports"
import { Button, IconType } from "@/factorial-one"

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
}: ToolbarDropdownProps) => {
  return isFullscreen ? (
    items?.map((item) => (
      <Button
        key={item.label}
        icon={item.icon}
        hideLabel={item.icon ? true : false}
        onClick={item.onClick}
        variant={item.isActive ? "neutral" : "ghost"}
        label={item.label}
        type="button"
      />
    ))
  ) : (
    <Dropdown items={convertItemsToDropdownItems(items)}>{children}</Dropdown>
  )
}

export { ToolbarDropdown }
