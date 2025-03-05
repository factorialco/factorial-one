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

  // Scroll to the selected item
  useEffect(() => {
    if (positionIndex !== undefined) {
      scrollToIndex(positionIndex)
      setTimeout(() => {
        scrollToIndex(positionIndex)
      }, 1)
    }
  }, [positionIndex, scrollToIndex])

  // Measure the virtual items
  useEffect(() => {
    virtualizer.measure()
  }, [virtualizer, items])

  return (
    <div
      style={{
        height: `${virtualizer.getTotalSize()}px`,
        width: "100%",
        position: "relative",
      }}
    >
      {virtualizer.getVirtualItems().map((virtualItem) => (
        <div
          key={virtualItem.key}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            height: `${virtualItem.size}px`,
            width: "100%",
            transform: `translateY(${virtualItem.start}px)`,
          }}
        >
          {items[virtualItem.index].item}
        </div>
      ))}
    </div>
  )
}
