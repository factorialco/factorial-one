"use client"

import { cn } from "../lib/utils"
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area"
import * as React from "react"

const ScrollArea = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root> & {
    showBar?: boolean
    viewportRef?: React.RefObject<HTMLDivElement>
  }
>(({ className, children, showBar = true, viewportRef, ...props }, ref) => (
  <ScrollAreaPrimitive.Root
    ref={ref}
    className={cn("relative overflow-hidden", className)}
    scrollHideDelay={200}
    {...props}
  >
    <ScrollAreaPrimitive.Viewport
      ref={viewportRef}
      className="h-full w-full rounded-[inherit]"
      data-scroll-container
    >
      {children}
    </ScrollAreaPrimitive.Viewport>
    <ScrollBar orientation="vertical" showBar={showBar} />
    <ScrollBar orientation="horizontal" showBar={showBar} />
    <ScrollAreaPrimitive.Corner />
  </ScrollAreaPrimitive.Root>
))
ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName

const ScrollBar = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>,
  React.ComponentPropsWithoutRef<
    typeof ScrollAreaPrimitive.ScrollAreaScrollbar
  > & { showBar?: boolean }
>(({ className, orientation = "vertical", showBar = true, ...props }, ref) => (
  <ScrollAreaPrimitive.ScrollAreaScrollbar
    ref={ref}
    orientation={orientation}
    forceMount
    className={cn(
      "group/scrollbar z-50 flex touch-none select-none p-[1px]",
      "transition-opacity data-[state=hidden]:pointer-events-none data-[state=visible]:pointer-events-auto data-[state=hidden]:opacity-0 data-[state=visible]:opacity-100",
      orientation === "vertical" && "mr-[2px] h-full w-2",
      orientation === "horizontal" && "mt-[2px] h-2 flex-col",
      className
    )}
    {...props}
  >
    {showBar && (
      <ScrollAreaPrimitive.ScrollAreaThumb className="relative flex-1 rounded-full bg-f1-background-bold opacity-30 transition-opacity group-hover/scrollbar:opacity-50" />
    )}
  </ScrollAreaPrimitive.ScrollAreaScrollbar>
))
ScrollBar.displayName = ScrollAreaPrimitive.ScrollAreaScrollbar.displayName

export { ScrollArea, ScrollBar }
