import { ReactNode } from "react"
import { TOCItem } from "../types"
import { CollapsibleItemSectionHeader } from "./CollapsibleItemSectionHeader"
import { StaticItemSectionHeader } from "./StaticItemSectionHeader"

interface TOCItemSectionHeaderProps {
  item: TOCItem
  children?: ReactNode
  isActive?: boolean
  collapsible?: boolean
  isExpanded?: boolean
  onToggleExpanded?: (id: string) => void
  sortable: boolean
}

export function ItemSectionHeader({
  item,
  children,
  isActive,
  collapsible,
  isExpanded,
  onToggleExpanded,
  sortable,
}: TOCItemSectionHeaderProps) {
  if (collapsible) {
    return (
      <CollapsibleItemSectionHeader
        item={item}
        isActive={isActive}
        isExpanded={isExpanded}
        onToggleExpanded={onToggleExpanded}
        sortable={sortable}
      >
        {children}
      </CollapsibleItemSectionHeader>
    )
  }

  return (
    <StaticItemSectionHeader
      item={item}
      isActive={isActive}
      sortable={sortable}
    >
      {children}
    </StaticItemSectionHeader>
  )
}
