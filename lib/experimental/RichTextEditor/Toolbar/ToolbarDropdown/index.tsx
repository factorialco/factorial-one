import React from "react"

import { Dropdown } from "@/experimental/exports"
import { ToolbarButton } from "@/experimental/RichTextEditor/Toolbar/ToolbarButton"
import { IconType } from "@/factorial-one"

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
      <ToolbarButton
        key={item.label}
        icon={item.icon}
        onClick={item.onClick}
        isActive={item.isActive}
        title={item.label}
        label={item.icon ? undefined : item.label}
      />
    ))
  ) : (
    <Dropdown items={convertItemsToDropdownItems(items)}>{children}</Dropdown>
  )
}

export { ToolbarDropdown }
