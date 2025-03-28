import { motion } from "framer-motion"
import {
  type ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react"
import { useResizeObserver } from "usehooks-ts"
import { Icon } from "../../components/Utilities/Icon"
import { ChevronDown } from "../../icons/app"
import { useI18n } from "../../lib/i18n-provider"
import { cn, focusRing } from "../../lib/utils"
import { Popover, PopoverContent, PopoverTrigger } from "../popover"
import { Skeleton } from "../skeleton"

const IconMotion = motion(Icon)

/**
 * Custom hook for overflow calculations
 *
 * This hook dynamically determines which items should be visible in the main list and which should be placed in an overflow dropdown based on available space.
 *
 * @param items - The items to display
 * @param gap - The gap between items
 * @returns The overflow calculation state
 */
function useOverflowCalculation<T>(items: T[], gap: number) {
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

  // Calculate the total width of all items including gaps
  const calculateTotalItemsWidth = useCallback(
    (itemWidths: number[]) => {
      let totalWidth = 0

      for (let i = 0; i < itemWidths.length; i++) {
        totalWidth += itemWidths[i]
        totalWidth = addGapBetweenItems(totalWidth, i, itemWidths.length)
      }

      return totalWidth
    },
    [addGapBetweenItems]
  )

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
    const overflowButtonWidth = overflowButtonRef.current?.offsetWidth || 60
    const itemWidths = measureItemWidths()

    // Check if all items can fit without an overflow button
    const totalItemsWidth = calculateTotalItemsWidth(itemWidths)
    const allItemsFit = totalItemsWidth <= currentContainerWidth

    if (allItemsFit) {
      setItemsState({
        visibleItems: items,
        overflowItems: [],
      })
      return
    }

    // Calculate how many items fit with an overflow button
    const availableWidth = currentContainerWidth - overflowButtonWidth - gap
    const visibleCount = calculateVisibleItemCount(itemWidths, availableWidth)

    // If no items can fit, put all items in the overflow
    if (visibleCount === 0) {
      setItemsState({
        visibleItems: [],
        overflowItems: items,
      })
    } else {
      setItemsState({
        visibleItems: items.slice(0, visibleCount),
        overflowItems: items.slice(visibleCount),
      })
    }
  }, [
    items,
    gap,
    measureItemWidths,
    calculateTotalItemsWidth,
    calculateVisibleItemCount,
  ])

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

interface OverflowListProps<T> {
  items: T[]

  // How things are rendered
  /**
   * What to render as a list item (items outside of the overflow list)
   * @param item - The item to render
   * @param index - The index of the item
   * @param isVisible - Whether this item is in the visible list (true) or measurement container (false)
   */
  renderListItem: (item: T, index: number, isVisible?: boolean) => ReactNode

  /**
   * What to render as a dropdown item (items inside of the overflow list)
   */
  renderDropdownItem: (item: T, index: number) => ReactNode

  /**
   * What to render as the overflow indicator
   * If not provided, the default overflow indicator will be displayed
   */
  renderOverflowIndicator?: (count: number, isOpen: boolean) => ReactNode

  // Component styling
  /**
   * Additional styling for the container
   */
  className?: string

  /**
   * The gap between items in pixels
   * @default 8
   */
  gap?: number
}

const OverflowList = function OverflowList<T>({
  items,
  renderListItem,
  renderDropdownItem,
  renderOverflowIndicator,
  className = "",
  gap = 8,
}: OverflowListProps<T>) {
  const [isOpen, setIsOpen] = useState(false)
  const i18n = useI18n()

  const handleOpenChange = useCallback((open: boolean) => {
    setIsOpen(open)
  }, [])

  const {
    containerRef,
    overflowButtonRef,
    measurementContainerRef,
    visibleItems,
    overflowItems,
    isInitialized,
  } = useOverflowCalculation(items, gap)

  // Default overflow indicator
  const defaultOverflowIndicator = useMemo(() => {
    const OverflowIndicator = (count: number, isOpen: boolean) => (
      <div
        className={cn(
          "flex items-center gap-1 rounded py-1.5 pl-3 pr-2 text-base font-medium text-f1-foreground transition-colors hover:bg-f1-background-secondary",
          isOpen && "bg-f1-background-secondary"
        )}
      >
        <span>
          {count < items.length && "+"}
          {count}
        </span>
        <span>{i18n.actions.more}</span>
        <div className="flex h-5 w-5 items-center justify-center after:absolute after:h-4 after:w-4 after:rounded-xs after:bg-f1-background-secondary after:content-['']">
          <IconMotion
            icon={ChevronDown}
            initial={{ rotate: 0 }}
            animate={{ rotate: isOpen ? 180 : 0 }}
            size="xs"
          />
        </div>
      </div>
    )
    OverflowIndicator.displayName = "OverflowIndicator"
    return OverflowIndicator
  }, [items.length, i18n.actions.more])

  // Placeholder elements for initialization
  const placeholderElements = useMemo(() => {
    if (isInitialized) return null

    return items.map((_, index) => (
      <Skeleton key={`placeholder-${index}`} className="h-2 w-20 rounded-md" />
    ))
  }, [items, isInitialized])

  const showOverflowDropdown = overflowItems.length > 0

  return (
    <div
      ref={containerRef}
      className={cn("relative flex items-center", className)}
      style={{ gap: `${gap}px` }}
    >
      <div
        ref={measurementContainerRef}
        aria-hidden="true"
        className="pointer-events-none invisible absolute left-0 top-0 flex opacity-0"
        style={{ gap: `${gap}px` }}
        data-testid="overflow-measurement-container"
      >
        {items.map((item, index) => (
          <div key={`measure-${index}`} data-testid="overflow-measurement-item">
            {renderListItem(item, index, false)}
          </div>
        ))}
      </div>

      <div
        className="flex items-center whitespace-nowrap"
        style={{ gap: `${gap}px` }}
        data-testid="overflow-visible-container"
      >
        {isInitialized &&
          visibleItems.map((item, index) => (
            <div
              key={`item-${index}`}
              className="transition-all duration-150"
              data-testid="overflow-visible-item"
            >
              {renderListItem(item, index, true)}
            </div>
          ))}

        {placeholderElements}
      </div>

      {showOverflowDropdown && (
        <Popover open={isOpen} onOpenChange={handleOpenChange}>
          <PopoverTrigger asChild>
            <button
              ref={overflowButtonRef}
              className={cn(
                "inline-flex flex-shrink-0 items-center",
                focusRing()
              )}
            >
              {renderOverflowIndicator
                ? renderOverflowIndicator(overflowItems.length, isOpen)
                : defaultOverflowIndicator(overflowItems.length, isOpen)}
            </button>
          </PopoverTrigger>
          <PopoverContent
            className="rounded-md border border-solid border-f1-border-secondary p-1 shadow-md"
            align="end"
          >
            <div className="flex flex-col">
              {overflowItems.map((item, index) => (
                <div key={`overflow-item-${index}`}>
                  {renderDropdownItem(item, index)}
                </div>
              ))}
            </div>
          </PopoverContent>
        </Popover>
      )}
    </div>
  )
}

OverflowList.displayName = "OverflowList"

export { OverflowList }
