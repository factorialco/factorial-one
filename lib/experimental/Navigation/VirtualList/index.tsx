import { cn } from "@/lib/utils"
import React, { forwardRef, useEffect } from "react"
import { FixedSizeList, ListChildComponentProps } from "react-window"

type VirtualListProps<T> = {
  items: T[]
  height: number
  itemCount: number
  itemSize: number
  renderer: (item?: T) => JSX.Element
  className?: string
}

function VirtualListInner<T>(
  {
    items,
    height,
    itemCount,
    itemSize,
    className,
    renderer,
  }: VirtualListProps<T>,
  ref: React.ForwardedRef<FixedSizeList>
) {
  const Row = ({ index, style }: ListChildComponentProps) => {
    const item = items[index]
    return (
      <div style={style} className="m-0 p-0">
        {renderer(item)}
      </div>
    )
  }

  useEffect(() => {
    console.log("Changing className")
  }, [className])

  useEffect(() => {
    console.log("Changing itemCount")
  }, [itemCount])

  useEffect(() => {
    console.log("Changing itemSize")
  }, [itemSize])

  useEffect(() => {
    console.log("Changing items")
  }, [items])

  useEffect(() => {
    console.log("Changing renderer")
  }, [renderer])

  return (
    <FixedSizeList
      ref={ref}
      className={cn("scrollbar-macos", className)}
      height={height}
      itemCount={itemCount}
      itemSize={itemSize}
      width="100%"
    >
      {Row}
    </FixedSizeList>
  )
}

export const VirtualList = forwardRef(VirtualListInner) as <T>(
  props: VirtualListProps<T> & { ref?: React.Ref<FixedSizeList<T>> }
) => ReturnType<typeof VirtualListInner>
