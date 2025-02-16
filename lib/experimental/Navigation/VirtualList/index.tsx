import { cn } from "@/lib/utils"
import {
  elementScroll,
  useVirtualizer,
  VirtualItem,
  VirtualizerOptions,
} from "@tanstack/react-virtual"
import React, { forwardRef } from "react"

type VirtualListProps = {
  height: number
  itemCount: number
  itemSize: number
  renderer: (item: VirtualItem) => JSX.Element
  className?: string
}

function easeInOutQuint(t: number) {
  return t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t
}

const VirtualList = forwardRef<HTMLDivElement, VirtualListProps>(
  (
    { height, itemCount, itemSize, className, renderer },
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    const parentRef = React.useRef<HTMLDivElement | null>(null)
    const scrollingRef = React.useRef<number>()

    React.useImperativeHandle(
      ref,
      () => parentRef.current as HTMLDivElement,
      []
    )
    const scrollToFn: VirtualizerOptions<
      HTMLDivElement,
      HTMLDivElement
    >["scrollToFn"] = React.useCallback((offset, canSmooth, instance) => {
      const duration = 1000
      const start = parentRef.current?.scrollTop || 0
      const startTime = (scrollingRef.current = Date.now())

      const run = () => {
        if (scrollingRef.current !== startTime) return
        const now = Date.now()
        const elapsed = now - startTime
        const progress = easeInOutQuint(Math.min(elapsed / duration, 1))
        const interpolated = start + (offset - start) * progress

        if (elapsed < duration) {
          elementScroll(interpolated, canSmooth, instance)
          requestAnimationFrame(run)
        } else {
          elementScroll(interpolated, canSmooth, instance)
        }
      }

      requestAnimationFrame(run)
    }, [])

    const rowVirtualizer = useVirtualizer({
      count: itemCount,
      getScrollElement: () => parentRef.current,
      estimateSize: () => itemSize,
      overscan: 5,
      scrollToFn,
    })

    return (
      <div
        ref={parentRef}
        className={cn("scrollbar-macos w-full overflow-auto", className)}
        style={{
          height: `${height}px`,
        }}
      >
        <div
          style={{
            height: `${rowVirtualizer.getTotalSize()}px`,
            width: "100%",
            position: "relative",
          }}
        >
          {rowVirtualizer.getVirtualItems().map((vi) => (
            <div
              key={vi.key}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: `${vi.size}px`,
                transform: `translateY(${vi.start}px)`,
              }}
            >
              {/* this is a protection in case the library sends null | undefined */}
              {!vi ? <></> : renderer(vi)}
            </div>
          ))}
        </div>
      </div>
    )
  }
)

VirtualList.displayName = "VirtualList"

export { VirtualList }
