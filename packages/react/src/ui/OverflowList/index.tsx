import { type ReactNode, useCallback, useMemo, useState } from "react"
import { cn, focusRing } from "../../lib/utils"
import { Popover, PopoverContent, PopoverTrigger } from "../popover"
import { Skeleton } from "../skeleton"
import { OverflowIndicator } from "./OverflowIndicator"
import { useOverflowCalculation } from "./useOverflowCalculation"
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

  /**
   * Whether to render the overflow indicator with a popover
   * @default false
   */
  overflowIndicatorWithPopover?: boolean

  /**
   * Whether to force showing the overflow indicator
   * @default false
   */
  forceShowingOverflowIndicator?: boolean

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
  overflowIndicatorWithPopover = true,
  renderOverflowIndicator,
  forceShowingOverflowIndicator = false,
  className = "",
  gap = 8,
}: OverflowListProps<T>) {
  const [isOpen, setIsOpen] = useState(false)

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

  const DefaultOverflowIndicator = useMemo(
    () => (
      <OverflowIndicator
        totalItemsCount={items.length}
        isOpen={isOpen}
        count={overflowItems.length}
      />
    ),
    [items.length, isOpen, overflowItems.length]
  )

  // Placeholder elements for initialization
  const placeholderElements = useMemo(() => {
    if (isInitialized) return null

    return items.map((_, index) => (
      <Skeleton key={`placeholder-${index}`} className="h-2 w-20 rounded-md" />
    ))
  }, [items, isInitialized])

  const showOverflow = forceShowingOverflowIndicator || overflowItems.length > 0

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

      {showOverflow && (
        <>
          {overflowIndicatorWithPopover ? (
            <Popover open={isOpen} onOpenChange={handleOpenChange}>
              <PopoverTrigger asChild>
                <button
                  ref={overflowButtonRef}
                  className={cn(
                    "inline-flex flex-shrink-0 items-center",
                    focusRing()
                  )}
                >
                  {renderOverflowIndicator?.(overflowItems.length, isOpen) ??
                    DefaultOverflowIndicator}
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
          ) : (
            (renderOverflowIndicator?.(overflowItems.length, false) ??
            DefaultOverflowIndicator)
          )}
        </>
      )}
    </div>
  )
}

OverflowList.displayName = "OverflowList"

export { OverflowList }
