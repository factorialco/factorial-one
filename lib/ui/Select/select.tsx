"use client"

import { cn } from "@/lib/utils.ts"
import * as SelectPrimitive from "@radix-ui/react-select"
import * as React from "react"
import { ReactNode, useMemo, useRef } from "react"
import { SelectItemsVirtual } from "./components/SelectItemsVirtual.tsx"
import { SelectScrollButton } from "./components/SelectScrollButton.tsx"
import { VirtualItem } from "./typings.ts"

const Select = SelectPrimitive.Root

const SelectGroup = SelectPrimitive.Group

const SelectValue = SelectPrimitive.Value

const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Trigger ref={ref} className={cn(className)} {...props}>
    {children}
  </SelectPrimitive.Trigger>
))
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName

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
      items,
      className,
      children,
      position = "popper",
      value,
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

    const positionIndex = useMemo(() => {
      return items && items.findIndex((item) => item.value === value)
    }, [items, value])

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
              <SelectItemsVirtual
                items={items}
                parentRef={parentRef}
                positionIndex={positionIndex}
              ></SelectItemsVirtual>
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

export { Select, SelectContent, SelectGroup, SelectTrigger, SelectValue }
