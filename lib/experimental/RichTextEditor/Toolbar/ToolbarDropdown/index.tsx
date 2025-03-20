import React from "react"

import { Dropdown } from "@factorialco/factorial-one/dist/experimental"

import type { Medium as MediumType } from "design-system/Icon/types/medium"

import { ToolbarButton } from "@/experimental/RichTextEditor/Toolbar/ToolbarButton"

interface ToolbarDropdownItem {
  label: string
  isActive?: boolean
  onClick: () => void
  icon: MediumType
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
      />
    ))
  ) : (
    <Dropdown items={convertItemsToDropdownItems(items)}>{children}</Dropdown>
  )
}

export { ToolbarDropdown }
