import { cn } from "@/lib/utils"
import { ScrollArea } from "@/ui/scrollarea"
import {
  DragControls,
  LayoutGroup,
  Reorder,
  useDragControls,
} from "motion/react"
import React, { useCallback, useEffect, useRef, useState } from "react"
import { DragProvider } from "./DragContext"
import { Item } from "./Item"
import { ItemSectionHeader } from "./ItemSectionHeader"
import { TOCItem, TOCItemAction, TOCProps } from "./types"
import { findExpandedPath } from "./utils"

type IdStructure = {
  id: string
  children?: IdStructure[]
}

// Separate component to handle dragControls properly
function SortableItemWrapper({
  item,
  children,
}: {
  item: TOCItem
  children: (dragControls: DragControls) => React.ReactNode
}) {
  const dragControls = useDragControls()

  return (
    <Reorder.Item
      key={item.id}
      value={item}
      className="list-none"
      dragControls={dragControls}
      dragListener={false} // Disable default drag behavior
      whileDrag={{
        scale: 1.02,
        opacity: 0.9,
        zIndex: 50,
        cursor: "grabbing",
      }}
      transition={{ type: "spring", bounce: 0.2, duration: 0.3 }}
    >
      {children(dragControls)}
    </Reorder.Item>
  )
}

function renderTOCItem(
  item: TOCItem,
  sortable: boolean,
  activeItem?: string,
  collapsible?: boolean,
  expandedItems?: Set<string>,
  onToggleExpanded?: (id: string) => void,
  onUpdateItem?: (itemId: string, updatedItem: TOCItem) => void,
  dragControls?: DragControls
): React.ReactElement {
  const Component = item.children ? ItemSectionHeader : Item
  const isExpanded = expandedItems?.has(item.id) ?? true

  const handleChildrenReorder = (newOrder: TOCItem[]) => {
    if (onUpdateItem) {
      const updatedItem = { ...item, children: newOrder }
      onUpdateItem(item.id, updatedItem)
    }
  }

  return (
    <Component
      key={item.id}
      item={item}
      isActive={activeItem === item.id}
      collapsible={collapsible && item.children && item.children.length > 0}
      isExpanded={isExpanded}
      onToggleExpanded={onToggleExpanded}
      sortable={sortable}
      dragControls={dragControls}
    >
      {item.children &&
        (collapsible ? isExpanded : true) &&
        (sortable ? (
          <Reorder.Group
            values={item.children}
            onReorder={handleChildrenReorder}
            axis="y"
            className="flex flex-col"
          >
            {item.children.map((child) => (
              <SortableItemWrapper key={child.id} item={child}>
                {(childDragControls) =>
                  renderTOCItem(
                    child,
                    sortable,
                    activeItem,
                    collapsible,
                    expandedItems,
                    onToggleExpanded,
                    onUpdateItem,
                    childDragControls
                  )
                }
              </SortableItemWrapper>
            ))}
          </Reorder.Group>
        ) : (
          item.children.map((child) =>
            renderTOCItem(
              child,
              sortable,
              activeItem,
              collapsible,
              expandedItems,
              onToggleExpanded,
              onUpdateItem
            )
          )
        ))}
    </Component>
  )
}

function TOCContent({
  title,
  items,
  className,
  activeItem,
  collapsible = false,
  sortable = false,
  onReorder,
}: TOCProps) {
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set())
  const [sortableItems, setSortableItems] = useState<TOCItem[]>(items)
  const containerRef = useRef<HTMLDivElement>(null)

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

  const handleSort = useCallback(
    (newOrder: TOCItem[]) => {
      setSortableItems(newOrder)
      // Notify parent immediately when top-level items are reordered
      if (onReorder) {
        // Convert to structure with only IDs but maintain hierarchy
        const convertToIds = (items: TOCItem[]): IdStructure[] => {
          return items.map((item) => ({
            id: item.id,
            ...(item.children && { children: convertToIds(item.children) }),
          }))
        }
        onReorder(convertToIds(newOrder))
      }
    },
    [onReorder]
  )

  const handleUpdateItem = useCallback(
    (itemId: string, updatedItem: TOCItem) => {
      const updateItemInTree = (items: TOCItem[]): TOCItem[] => {
        return items.map((item) => {
          if (item.id === itemId) {
            return updatedItem
          }
          if (item.children) {
            return { ...item, children: updateItemInTree(item.children) }
          }
          return item
        })
      }

      const updatedItems = updateItemInTree(sortableItems)
      setSortableItems(updatedItems)

      // Notify parent with hierarchical IDs structure
      if (onReorder) {
        const convertToIds = (items: TOCItem[]): IdStructure[] => {
          return items.map((item) => ({
            id: item.id,
            ...(item.children && { children: convertToIds(item.children) }),
          }))
        }
        onReorder(convertToIds(updatedItems))
      }
    },
    [sortableItems, onReorder]
  )

  return (
    <nav
      className={cn(
        "flex h-full w-[248px] flex-col overflow-hidden",
        className
      )}
      aria-label="Table of contents"
      ref={containerRef}
    >
      <div className="flex-shrink-0 pb-2 pl-6 pr-4 pt-5">
        <h2 className="truncate text-[14px] font-medium text-f1-foreground-secondary">
          {title}
        </h2>
      </div>
      <ScrollArea className="h-full min-h-0">
        <div className="px-3 pb-2">
          {sortable ? (
            <Reorder.Group
              values={sortableItems}
              onReorder={handleSort}
              axis="y"
              className="flex flex-col gap-0.5"
              dragConstraints={containerRef}
            >
              {sortableItems.map((item) => (
                <SortableItemWrapper key={item.id} item={item}>
                  {(dragControls) =>
                    renderTOCItem(
                      item,
                      sortable,
                      activeItem,
                      collapsible,
                      expandedItems,
                      handleToggleExpanded,
                      handleUpdateItem,
                      dragControls
                    )
                  }
                </SortableItemWrapper>
              ))}
            </Reorder.Group>
          ) : (
            items.map((item) =>
              renderTOCItem(
                item,
                sortable,
                activeItem,
                collapsible,
                expandedItems,
                handleToggleExpanded,
                handleUpdateItem
              )
            )
          )}
        </div>
      </ScrollArea>
    </nav>
  )
}

export function F0TableOfContent(props: TOCProps) {
  return (
    <DragProvider>
      <LayoutGroup id="table-of-contents">
        <TOCContent {...props} />
      </LayoutGroup>
    </DragProvider>
  )
}

export { Item, ItemSectionHeader }
export type { TOCItem, TOCItemAction, TOCProps }
