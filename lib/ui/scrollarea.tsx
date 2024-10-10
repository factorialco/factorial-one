"use client"

import { cn } from "@/lib/utils"
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area"
import * as React from "react"
import { useEffect, useState } from "react"

const ScrollArea = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root>
>(({ className, children, ...props }, ref) => {
  const [isBottom, setIsBottom] = useState(true)
  const viewportRef = React.useRef<HTMLDivElement | null>(null)

  // Check if user has reached the bottom of the scroll area
  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement
    const bottomReached =
      target.scrollHeight - target.scrollTop === target.clientHeight
    setIsBottom(bottomReached)
  }

  // Run this when the component mounts to check if scroll is needed
  useEffect(() => {
    if (viewportRef.current) {
      const target = viewportRef.current
      const bottomReached = target.scrollHeight === target.clientHeight // No scrolling needed
      setIsBottom(bottomReached)
    }
  }, [children]) // Re-run if children change

  return (
    <ScrollAreaPrimitive.Root
      ref={ref}
      className={cn("relative overflow-hidden", className)}
      scrollHideDelay={200}
      {...props}
    >
      <ScrollAreaPrimitive.Viewport
        className="h-full w-full rounded-[inherit]"
        ref={viewportRef}
        onScroll={handleScroll}
        data-scroll-container
      >
        {children}
        {/* Gradient overlay with opacity transition */}
        <div
          className={cn(
            "pointer-events-none absolute bottom-0 left-0 h-8 w-full transition-opacity duration-500 ease-out",
            isBottom ? "opacity-0" : "opacity-100"
          )}
          style={{
            backgroundImage: `linear-gradient(to top, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%)`,
          }}
        />
      </ScrollAreaPrimitive.Viewport>
      <ScrollBar orientation="vertical" />
      <ScrollBar orientation="horizontal" />
      <ScrollAreaPrimitive.Corner />
    </ScrollAreaPrimitive.Root>
  )
})

ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName

const ScrollBar = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>
>(({ className, orientation = "vertical", ...props }, ref) => (
  <ScrollAreaPrimitive.ScrollAreaScrollbar
    ref={ref}
    orientation={orientation}
    forceMount
    className={cn(
      "z-50 flex touch-none select-none p-[1px]",
      "transition-opacity data-[state=hidden]:pointer-events-none data-[state=visible]:pointer-events-auto data-[state=hidden]:opacity-0 data-[state=visible]:opacity-100",
      orientation === "vertical" && "mr-[2px] h-full w-2.5",
      orientation === "horizontal" && "mt-[2px] h-2.5 flex-col",
      className
    )}
    {...props}
  >
    <ScrollAreaPrimitive.ScrollAreaThumb className="relative flex-1 rounded-full bg-f1-background-secondary opacity-50" />
  </ScrollAreaPrimitive.ScrollAreaScrollbar>
))
ScrollBar.displayName = ScrollAreaPrimitive.ScrollAreaScrollbar.displayName

export { ScrollArea, ScrollBar }
