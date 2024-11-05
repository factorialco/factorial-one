import { ReactElement, useEffect, useRef, useState } from "react"
import { WidgetListItemProps } from "./WidgetListItemTypes"

export interface WidgetListProps<T extends WidgetListItemProps> {
  children: ReactElement<T>[]
  onMoreElementsClick?: () => void
  maxHeight: number
  onItemClick?: (item: T) => void
}

export function WidgetList<T extends WidgetListItemProps>({
  children,
  onMoreElementsClick,
  onItemClick,
  maxHeight = 400,
}: WidgetListProps<T>) {
  const [visibleCount, setVisibleCount] = useState(children.length)
  const containerRef = useRef<HTMLDivElement>(null)
  const BUTTON_HEIGHT = 40

  useEffect(() => {
    const updateVisibleCount = () => {
      if (containerRef.current) {
        let totalHeight = 0
        let count = 0
        const maxAllowedHeight = maxHeight - BUTTON_HEIGHT - 8

        Array.from(containerRef.current.children).forEach((child) => {
          const childElement = child as HTMLDivElement
          const childHeight = childElement.offsetHeight

          if (totalHeight + childHeight > maxAllowedHeight) return

          totalHeight += childHeight
          count += 1
          console.log("totalHeight", maxAllowedHeight, totalHeight)
        })

        setVisibleCount(count)
      }
    }

    updateVisibleCount()
    window.addEventListener("resize", updateVisibleCount)
    return () => window.removeEventListener("resize", updateVisibleCount)
  }, [children.length, maxHeight])

  return (
    <div ref={containerRef} style={{ maxHeight }} className="overflow-hidden">
      {children.slice(0, visibleCount).map((child, index) => (
        <div
          key={index}
          onClick={() => onItemClick && onItemClick(child.props)}
          className="cursor-pointer"
        >
          {child}
        </div>
      ))}
      {visibleCount < children.length && (
        <button
          className="bg-blue-500 mt-2 rounded p-2 text-white"
          style={{ width: "100%", height: `${BUTTON_HEIGHT}px` }}
          onClick={onMoreElementsClick}
        >
          {`+${children.length - visibleCount} more`}
        </button>
      )}
    </div>
  )
}
