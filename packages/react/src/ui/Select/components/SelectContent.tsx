import * as SelectPrimitive from "@radix-ui/react-select"
import { useVirtualizer } from "@tanstack/react-virtual"
import * as React from "react"
import { ReactNode, useContext, useEffect, useMemo, useRef } from "react"
import { cn } from "../../../lib/utils.ts"
import { SelectScrollButton, VirtualItem } from "../index"
import { SelectContext } from "../SelectContext.tsx"

/**
 * Select Content component
 */
// Define two different prop types for the two mutually exclusive scenarios
type SelectItemProps = React.ComponentPropsWithoutRef<
  typeof SelectPrimitive.Content
> & {
  top?: ReactNode
  bottom?: ReactNode
  emptyMessage?: string
  value?: string
}

type BaseSelectContentProps = Omit<SelectItemProps, "children">

type SelectContentWithItemsProps = BaseSelectContentProps & {
  items: VirtualItem[]
  children?: never
}

type SelectContentWithChildrenProps = SelectItemProps & {
  items?: never
  children: ReactNode
}

// Union the types to create a discriminated union to avoid use children and items at the same time
type SelectContentProps =
  | SelectContentWithItemsProps
  | SelectContentWithChildrenProps

const SelectContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  SelectContentProps
>(
  (
    {
      items = undefined,
      className,
      children,
      position = "popper",
      emptyMessage,
      ...props
    },
    ref
  ) => {
    // ----------- Virtual list -----------
    // The scrollable element for your list
    const parentRef = useRef(null)
    const isVirtual = Array.isArray(items)

    const isEmpty = useMemo(() => {
      if (isVirtual) {
        return items.filter((item) => item.value).length === 0
      }
      return !children
    }, [isVirtual, items, children])

    // State to check if the virtual list is ready and the scroll in the correct position
    const [virtualReady, setVirtualReady] = React.useState(false)
    // State to check if the radixui animation has started
    const [animationStarted, setAnimationStarted] = React.useState(false)

    // Get the value and the open status from the select context
    const { value, open } = useContext(SelectContext)

    const positionIndex = useMemo(() => {
      return (items && items.findIndex((item) => item.value === value)) || 0
    }, [items, value])

    const virtualizer = useVirtualizer({
      count: items?.length || 0,
      getScrollElement: () => parentRef.current,
      estimateSize: (i: number) => items?.[i]?.height || 0,
      overscan: 5,
      enabled: animationStarted,
    })

    useEffect(() => {
      // Reset the animation state when the select is closed
      if (!open) {
        setAnimationStarted(false)
        setVirtualReady(true)
      }
    }, [open])

    useEffect(() => {
      // Measure the items when the animation is finished and scroll to item
      virtualizer.measure()
      virtualizer.scrollToIndex(positionIndex)
    }, [virtualizer, positionIndex, animationStarted])

    const virtualItems = virtualizer.getVirtualItems()

    return (
      <SelectPrimitive.Portal>
        <SelectPrimitive.Content
          ref={ref}
          className={cn(
            "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border border-solid border-f1-border-secondary bg-f1-background text-f1-foreground shadow-md data-[state=closed]:fade-out-0 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 motion-safe:data-[state=open]:animate-in motion-safe:data-[state=closed]:animate-out motion-safe:data-[state=open]:fade-in-0 motion-safe:data-[state=closed]:zoom-out-95 motion-safe:data-[state=open]:zoom-in-95 motion-safe:data-[side=bottom]:slide-in-from-top-2",
            position === "popper" &&
              "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
            className
          )}
          position={position}
          {...props}
          onAnimationStart={() => {
            // Set the animation state to started as the elements are visible
            setAnimationStarted(true)
            setTimeout(() => {
              virtualizer.scrollToIndex(positionIndex, { align: "center" })
              setVirtualReady(true)
            })
          }}
        >
          {!!props.top && <div>{props.top}</div>}
          <SelectScrollButton variant="up" />
          <SelectPrimitive.Viewport
            ref={parentRef}
            className={cn(
              position === "popper" &&
                "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
            )}
          >
            {isEmpty ? (
              <p className="p-2 text-center">{emptyMessage || "-"}</p>
            ) : isVirtual ? (
              <div
                className={cn(
                  "transition-opacity delay-100",
                  virtualReady ? "" : "opacity-0"
                )}
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
            ) : (
              children
            )}
          </SelectPrimitive.Viewport>
          <SelectScrollButton variant="down" />
          {!!props.bottom && <div>{props.bottom}</div>}
        </SelectPrimitive.Content>
      </SelectPrimitive.Portal>
    )
  }
)

SelectContent.displayName = SelectPrimitive.Content.displayName

export { SelectContent }
