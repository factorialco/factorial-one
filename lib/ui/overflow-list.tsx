import { Popover, PopoverContent, PopoverTrigger } from "@/ui/popover"
import { ChevronDown, ChevronUp, MoreHorizontal } from "lucide-react"
import {
  type ReactNode,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react"

interface OverflowListProps<T> {
  items: T[]
  // Render functions for list and dropdown
  renderListItem: (item: T, index: number) => ReactNode
  renderDropdownItem: (item: T, index: number) => ReactNode
  renderOverflowIndicator?: (count: number, isOpen: boolean) => ReactNode

  // Component styling
  className?: string
  popoverAlign?: "start" | "center" | "end"
  popoverWidth?: "auto" | "trigger" | number
  gap?: number
}

// Custom hook for overflow calculations
function useOverflowCalculation<T>(items: T[], gap: number) {
  const containerRef = useRef<HTMLDivElement>(null)
  const overflowButtonRef = useRef<HTMLButtonElement>(null)
  const measurementContainerRef = useRef<HTMLDivElement>(null)

  const [visibleItems, setVisibleItems] = useState<T[]>([])
  const [overflowItems, setOverflowItems] = useState<T[]>([])
  const [_, setIsCalculating] = useState(true)
  const [isInitialized, setIsInitialized] = useState(false)

  // Measure all items in a hidden container
  const measureItemWidths = () => {
    if (!measurementContainerRef.current) return []

    const itemElements = measurementContainerRef.current.children
    const widths: number[] = []

    for (let i = 0; i < itemElements.length; i++) {
      const itemWidth = itemElements[i].getBoundingClientRect().width
      widths.push(itemWidth)
    }

    return widths
  }

  // Calculate the total width of all items including gaps
  const calculateTotalItemsWidth = (itemWidths: number[]) => {
    let totalWidth = 0

    for (let i = 0; i < itemWidths.length; i++) {
      totalWidth += itemWidths[i]
      if (i < itemWidths.length - 1) {
        totalWidth += gap
      }
    }

    return totalWidth
  }

  // Calculate how many items can fit in the available width
  const calculateVisibleItemCount = (
    itemWidths: number[],
    availableWidth: number
  ) => {
    let visibleCount = 0
    let accumulatedWidth = 0

    for (let i = 0; i < itemWidths.length; i++) {
      const newWidth = accumulatedWidth + itemWidths[i]

      if (newWidth > availableWidth) break

      accumulatedWidth = newWidth
      if (i < itemWidths.length - 1) {
        accumulatedWidth += gap
      }
      visibleCount++
    }

    return Math.max(visibleCount, 1)
  }

  // Calculate which items should be visible and which should overflow
  const calculateVisibleItems = () => {
    if (!containerRef.current || items.length === 0) return

    const currentContainerWidth = containerRef.current.clientWidth
    setIsCalculating(true)

    const overflowButtonWidth = overflowButtonRef.current?.offsetWidth || 60
    const itemWidths = measureItemWidths()

    if (itemWidths.length === 0) {
      setIsCalculating(false)
      return
    }

    // Check if all items can fit without an overflow button
    const totalItemsWidth = calculateTotalItemsWidth(itemWidths)
    const allItemsFit = totalItemsWidth <= currentContainerWidth

    if (allItemsFit) {
      setVisibleItems(items)
      setOverflowItems([])
      setIsCalculating(false)
      return
    }

    // Calculate how many items fit with an overflow button
    const availableWidth = currentContainerWidth - overflowButtonWidth - gap
    const visibleCount = calculateVisibleItemCount(itemWidths, availableWidth)

    setVisibleItems(items.slice(0, visibleCount))
    setOverflowItems(items.slice(visibleCount))
    setIsCalculating(false)
  }

  // Set up resize observer and initial calculation
  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // Initial calculation
    calculateVisibleItems()

    const resizeObserver = new ResizeObserver(() => {
      calculateVisibleItems()
    })

    resizeObserver.observe(container)
    return () => resizeObserver.disconnect()
  }, [items])

  // Initialize the component
  useLayoutEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsInitialized(true)
    }, 0)

    return () => clearTimeout(timeoutId)
  }, [])

  return {
    containerRef,
    overflowButtonRef,
    measurementContainerRef,
    visibleItems,
    overflowItems,
    isInitialized,
  }
}

export function OverflowList<T>({
  items,
  renderListItem,
  renderDropdownItem,
  renderOverflowIndicator,
  className = "",
  popoverAlign = "end",
  popoverWidth = "auto",
  gap = 8,
}: OverflowListProps<T>) {
  const [isOpen, setIsOpen] = useState(false)

  const {
    containerRef,
    overflowButtonRef,
    measurementContainerRef,
    visibleItems,
    overflowItems,
    isInitialized,
  } = useOverflowCalculation(items, gap)

  // Default overflow indicator
  const defaultOverflowIndicator = (count: number, isOpen: boolean) => (
    <>
      <MoreHorizontal className="h-4 w-4" />
      <span>{count}</span>
      {isOpen ? (
        <ChevronUp className="h-3 w-3" />
      ) : (
        <ChevronDown className="h-3 w-3" />
      )}
    </>
  )

  // Calculate popover width style
  const getPopoverStyle = () => {
    if (popoverWidth === "auto") return {}
    if (popoverWidth === "trigger" && overflowButtonRef.current) {
      return { width: `${overflowButtonRef.current.offsetWidth}px` }
    }
    if (typeof popoverWidth === "number") {
      return { width: `${popoverWidth}px` }
    }
    return {}
  }

  return (
    <div
      ref={containerRef}
      className={`relative flex items-center ${className}`}
      style={{ gap: `${gap}px`, overflow: "hidden" }}
    >
      {/* Hidden measurement container */}
      <div
        ref={measurementContainerRef}
        aria-hidden="true"
        className="pointer-events-none invisible absolute left-0 top-0 flex opacity-0"
        style={{ gap: `${gap}px` }}
      >
        {items.map((item, index) => (
          <div key={`measure-${index}`}>{renderListItem(item, index)}</div>
        ))}
      </div>

      {/* Visible items container */}
      <div
        className="flex items-center"
        style={{ gap: `${gap}px`, overflow: "hidden", whiteSpace: "nowrap" }}
      >
        {isInitialized &&
          visibleItems.map((item, index) => (
            <div
              key={`item-${index}`}
              className="overflow-hidden transition-all duration-150"
            >
              {renderListItem(item, index)}
            </div>
          ))}

        {/* Show placeholder divs during initialization to prevent layout shift */}
        {!isInitialized &&
          items.map((_, index) => (
            <div
              key={`placeholder-${index}`}
              className="opacity-0"
              style={{ height: "24px", width: "80px" }}
            />
          ))}
      </div>

      {/* Overflow dropdown */}
      {overflowItems.length > 0 && (
        <Popover open={isOpen} onOpenChange={setIsOpen}>
          <PopoverTrigger asChild>
            <button
              ref={overflowButtonRef}
              className="bg-muted hover:bg-muted/80 inline-flex flex-shrink-0 items-center gap-1 rounded-md px-2 py-1 text-sm transition-all duration-150"
              aria-label={`Show ${overflowItems.length} more items`}
            >
              {renderOverflowIndicator
                ? renderOverflowIndicator(overflowItems.length, isOpen)
                : defaultOverflowIndicator(overflowItems.length, isOpen)}
            </button>
          </PopoverTrigger>
          <PopoverContent
            className="p-2"
            align={popoverAlign}
            style={getPopoverStyle()}
          >
            <div className="flex flex-col gap-2">
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
