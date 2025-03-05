import { useVirtualizer } from "@tanstack/react-virtual"
import { MutableRefObject, useCallback, useEffect } from "react"
import { VirtualItem } from "../typings"

type Props = {
  items: VirtualItem[]
  parentRef: MutableRefObject<HTMLDivElement | null>
  positionIndex?: number
}
/**
 * Renders the items as a virtual list
 * @param items {VirtualItem} The items to render
 * @param parentRef {Ref} The parent container reference to calculate position
 * @param positionIndex {number} The index of the selected item
 * @constructor
 */
export const SelectItemsVirtual = ({
  items,
  parentRef,
  positionIndex,
}: Props) => {
  const virtualizer = useVirtualizer({
    count: items.length,
    getScrollElement: () => parentRef.current,
    estimateSize: (i: number) => items[i].height,
    initialOffset:
      positionIndex !== undefined
        ? items
            .slice(0, positionIndex)
            .reduce((acc, item) => acc + item.height, 0)
        : 0,
    overscan: 5,
  })

  /**
   * Scroll to the selected item
   * @param index {number} The index of the item to scroll to
   * @returns {void}
   */
  const scrollToIndex = useCallback(
    (index: number) => {
      virtualizer.scrollToIndex(index, {
        align: "center",
      })
    },
    [virtualizer]
  )

  /* Recalculate measures when the items change */
  useEffect(() => {
    virtualizer.measure()
    if (positionIndex !== undefined) {
      setTimeout(() => scrollToIndex(positionIndex), 1)
    }
  }, [virtualizer, parentRef.current, items, positionIndex, scrollToIndex])

  const virtualItems = virtualizer.getVirtualItems()

  return (
    <div
      style={{
        height: virtualizer.getTotalSize(),
        width: "100%",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          transform: `translateY(${virtualItems[0]?.start ?? 0}px)`,
        }}
      >
        {virtualItems.map((virtualItem) => (
          <div
            key={virtualItem.key}
            data-index={virtualItem.index}
            ref={virtualizer.measureElement}
          >
            {items[virtualItem.index].item}
          </div>
        ))}
      </div>
    </div>
  )
}
