import { useCallback, useEffect, useRef, useState } from "react"
import { useResizeObserver } from "usehooks-ts"

/**
 * Custom hook for overflow calculations
 *
 * This hook dynamically determines which items should be visible in the main list and which should be placed in an overflow dropdown based on available space.
 *
 * @param items - The items to display
 * @param gap - The gap between items
 * @returns The overflow calculation state
 */
export function useOverflowCalculation<T>(items: T[], gap: number) {
  const containerRef = useRef<HTMLDivElement>(null)
  const overflowButtonRef = useRef<HTMLButtonElement>(null)
  const measurementContainerRef = useRef<HTMLDivElement>(null)

  // Combined state for visible and overflow items
  const [itemsState, setItemsState] = useState<{
    visibleItems: T[]
    overflowItems: T[]
  }>({
    visibleItems: [],
    overflowItems: [],
  })

  // Track initialization
  const [isInitialized, setIsInitialized] = useState(false)

  // Watch for container size changes
  useResizeObserver({
    ref: containerRef,
    onResize: () => {
      calculateVisibleItems()
    },
  })

  // Helper function to add gap between items
  const addGapBetweenItems = useCallback(
    (totalWidth: number, itemIndex: number, itemsCount: number) => {
      return itemIndex < itemsCount - 1 ? totalWidth + gap : totalWidth
    },
    [gap]
  )

  // Measure all items in a hidden container
  const measureItemWidths = useCallback(() => {
    if (!measurementContainerRef.current) return []

    const itemElements = measurementContainerRef.current.children
    const widths: number[] = []

    for (let i = 0; i < itemElements.length; i++) {
      const itemWidth = itemElements[i].getBoundingClientRect().width
      widths.push(itemWidth)
    }

    return widths
  }, [])

  // Calculate how many items can fit in the available width
  const calculateVisibleItemCount = useCallback(
    (itemWidths: number[], availableWidth: number) => {
      let visibleCount = 0
      let accumulatedWidth = 0

      for (let i = 0; i < itemWidths.length; i++) {
        const newWidth = accumulatedWidth + itemWidths[i]

        if (newWidth > availableWidth) break

        accumulatedWidth = newWidth
        accumulatedWidth = addGapBetweenItems(
          accumulatedWidth,
          i,
          itemWidths.length
        )
        visibleCount++
      }

      // Return the actual count without enforcing a minimum of 1
      return visibleCount
    },
    [addGapBetweenItems]
  )

  // Calculate which items should be visible and which should overflow
  const calculateVisibleItems = useCallback(() => {
    if (!containerRef.current || items.length === 0) return

    const currentContainerWidth = containerRef.current.clientWidth
    const overflowButtonWidth = overflowButtonRef.current?.offsetWidth || 32
    const itemWidths = measureItemWidths()

    // Calculate how many items fit with an overflow button
    const availableWidth = currentContainerWidth - overflowButtonWidth - gap
    const visibleCount = calculateVisibleItemCount(itemWidths, availableWidth)

    let visibleItems = visibleCount === 0 ? [] : items.slice(0, visibleCount)
    let overflowItems = visibleCount === 0 ? items : items.slice(visibleCount)

    if (overflowItems.length === 1 && !!visibleItems.length) {
      visibleItems = items
      overflowItems = []
    }

    setItemsState({
      visibleItems,
      overflowItems,
    })
  }, [items, gap, measureItemWidths, calculateVisibleItemCount])

  // Initial calculation and initialization
  useEffect(() => {
    calculateVisibleItems()
  }, [calculateVisibleItems])

  useEffect(() => {
    setIsInitialized(true)
  }, [])

  return {
    containerRef,
    overflowButtonRef,
    measurementContainerRef,
    visibleItems: itemsState.visibleItems,
    overflowItems: itemsState.overflowItems,
    isInitialized,
  }
}
