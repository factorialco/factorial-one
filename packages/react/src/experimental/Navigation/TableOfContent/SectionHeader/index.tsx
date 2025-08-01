import { ReactNode } from "react"
import { Item } from "../Item"
import { TOCItem } from "../types"

interface TOCSectionHeaderProps {
  item: TOCItem
  children?: ReactNode
  isActive?: boolean
}

export function SectionHeader({
  item,
  children,
  isActive,
}: TOCSectionHeaderProps) {
  return (
    <>
      <Item
        item={item}
        counter={item.children?.length ?? 0}
        isActive={isActive}
      />
      {children && (
        <div className="ml-4 border-0 border-l border-solid border-f1-border pl-1.5">
          {children}
        </div>
      )}
    </>
  )
}
