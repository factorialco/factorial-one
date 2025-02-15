import { cn } from "@/lib/utils"
import { useVirtualizer, VirtualItem } from "@tanstack/react-virtual"
import React from "react"

type VirtualListProps = {
  height: number
  itemCount: number
  itemSize: number
  renderer: (item: VirtualItem) => JSX.Element
  className?: string
}

export const VirtualList2 = ({
  height,
  itemCount,
  itemSize,
  className,
  renderer,
}: VirtualListProps) => {
  const parentRef = React.useRef(null)

  const rowVirtualizer = useVirtualizer({
    count: itemCount,
    getScrollElement: () => parentRef.current,
    estimateSize: () => itemSize,
    overscan: 5,
  })

  return (
    <>
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
    </>
  )
}
