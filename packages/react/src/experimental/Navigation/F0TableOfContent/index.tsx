import { cn } from "@/lib/utils"
import { ScrollArea } from "@/ui/scrollarea"
import { useEffect, useState } from "react"
import { Item } from "./Item"
import { ItemSectionHeader } from "./ItemSectionHeader"
import { TOCItem, TOCItemAction, TOCProps } from "./types"
import { findExpandedPath } from "./utils"

function renderTOCItem(
  item: TOCItem,
  activeItem?: string,
  collapsible?: boolean,
  expandedItems?: Set<string>,
  onToggleExpanded?: (id: string) => void
): React.ReactElement {
  const Component = item.children ? ItemSectionHeader : Item
  const isExpanded = expandedItems?.has(item.id) ?? true

  return (
    <Component
      key={item.id}
      item={item}
      isActive={activeItem === item.id}
      collapsible={collapsible}
      isExpanded={isExpanded}
      onToggleExpanded={onToggleExpanded}
    >
      {item.children &&
        (collapsible ? isExpanded : true) &&
        item.children.map((child) =>
          renderTOCItem(
            child,
            activeItem,
            collapsible,
            expandedItems,
            onToggleExpanded
          )
        )}
    </Component>
  )
}

export function F0TableOfContent({
  title,
  items,
  className,
  activeItem,
  collapsible = false,
}: TOCProps) {
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set())

  // Update expanded items when we mount
  useEffect(() => {
    if (collapsible) {
      const expandedPath = findExpandedPath(items, activeItem)
      setExpandedItems(expandedPath)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleToggleExpanded = (id: string) => {
    setExpandedItems((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(id)) {
        newSet.delete(id)
      } else {
        newSet.add(id)
      }
      return newSet
    })
  }

  return (
    <nav
      className={cn(
        "flex h-full w-[248px] flex-col overflow-hidden",
        className
      )}
      aria-label="Table of contents"
    >
      <div className="flex-shrink-0 pb-2 pl-6 pr-4 pt-5">
        <h2 className="truncate text-lg font-medium text-f1-foreground-secondary">
          {title}
        </h2>
      </div>
      <ScrollArea className="h-full min-h-0">
        <div className="px-3 pb-2">
          {items.map((item) =>
            renderTOCItem(
              item,
              activeItem,
              collapsible,
              expandedItems,
              handleToggleExpanded
            )
          )}
        </div>
      </ScrollArea>
    </nav>
  )
}

export { Item, ItemSectionHeader }
export type { TOCItem, TOCItemAction, TOCProps }
