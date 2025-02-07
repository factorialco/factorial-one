import { Icon } from "@/factorial-one"
import { ChevronLeft, ChevronRight } from "@/icons/app"
import { cn } from "@/lib/utils"
import { Button } from "@/ui/button"
import { PropsWithChildren, useLayoutEffect, useRef, useState } from "react"

export const SPACE_FOR_WIDGET_SHADOW = 28
const GAP = 16

export const DynamicCarousel = ({ children }: PropsWithChildren) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [canScrollNext, setCanScrollNext] = useState(true)
  const [canScrollPrev, setCanScrollPrev] = useState(false)

  useLayoutEffect(() => {
    const container = scrollContainerRef.current
    if (!container) return

    const ro = new ResizeObserver(() => updateScrollState())
    ro.observe(container)

    const handleScroll = () => {
      updateScrollState()
    }

    container.addEventListener("scroll", handleScroll)
    updateScrollState()

    return () => {
      ro.disconnect()
      container.removeEventListener("scroll", handleScroll)
    }
  }, [])

  function scrollNext() {
    const container = scrollContainerRef.current
    if (!container) return
    const itemOffsetsRef = Array.from(container.children).map(
      (child) => (child as HTMLElement).offsetLeft
    )

    const { scrollLeft } = container
    const offsets = itemOffsetsRef

    let nextOffset = offsets.find(
      (o) => o > scrollLeft + SPACE_FOR_WIDGET_SHADOW + GAP
    )
    if (!nextOffset) {
      nextOffset = container.scrollWidth
    } else {
      nextOffset = nextOffset - SPACE_FOR_WIDGET_SHADOW - GAP
    }
    container.scrollTo({ left: nextOffset, behavior: "smooth" })
  }

  function scrollPrev() {
    const container = scrollContainerRef.current
    if (!container) return

    const itemOffsetsRef = Array.from(container.children).map(
      (child) => (child as HTMLElement).offsetLeft
    )

    const { scrollLeft } = container
    const offsets = [...itemOffsetsRef].reverse()
    console.log("scrollLeft", scrollLeft)

    let prevOffset = offsets.find((o) => o < scrollLeft)
    if (!prevOffset) {
      prevOffset = 0
    } else {
      prevOffset = Math.max(0, prevOffset - SPACE_FOR_WIDGET_SHADOW - GAP)
    }

    container.scrollTo({ left: prevOffset, behavior: "smooth" })
  }

  const updateScrollState = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current
      setCanScrollPrev(scrollLeft > 0)
      setCanScrollNext(scrollLeft + clientWidth < scrollWidth)
    }
  }

  let maskImageStyle = ""
  if (canScrollPrev && canScrollNext) {
    maskImageStyle = `linear-gradient(to right, transparent 0px, transparent ${SPACE_FOR_WIDGET_SHADOW}px, black ${2 * SPACE_FOR_WIDGET_SHADOW}px, black calc(100% - ${3 * SPACE_FOR_WIDGET_SHADOW}px), transparent calc(100% - ${2 * SPACE_FOR_WIDGET_SHADOW}px), transparent 100%)`
  } else if (canScrollPrev && !canScrollNext) {
    maskImageStyle = `linear-gradient(to right, transparent 0px, transparent ${SPACE_FOR_WIDGET_SHADOW}px, black ${2 * SPACE_FOR_WIDGET_SHADOW}px, black 100%)`
  } else if (!canScrollPrev && canScrollNext) {
    maskImageStyle = `linear-gradient(to right, black 0px, black calc(100% - ${3 * SPACE_FOR_WIDGET_SHADOW}px), transparent calc(100% - ${2 * SPACE_FOR_WIDGET_SHADOW}px), transparent 100%)`
  } else {
    maskImageStyle = "none"
  }

  return (
    <div className="relative">
      <div
        ref={scrollContainerRef}
        className="relative flex gap-4 overflow-x-auto overflow-y-visible scroll-smooth"
        style={{
          scrollbarWidth: "none", // Firefox
          msOverflowStyle: "none", // IE & Edge
          margin: `-${SPACE_FOR_WIDGET_SHADOW}px`,
          padding: `${SPACE_FOR_WIDGET_SHADOW}px`,
          height: `calc(100% + ${SPACE_FOR_WIDGET_SHADOW * 2}px)`,
          width: `calc(100% + ${SPACE_FOR_WIDGET_SHADOW * 2}px)`,
          maskImage: maskImageStyle,
          WebkitMaskImage: maskImageStyle,
        }}
      >
        {Array.isArray(children)
          ? children.map((child, index) => (
              <div
                key={index}
                className="flex-shrink-0"
                style={{ scrollSnapAlign: "start" }}
              >
                {child}
              </div>
            ))
          : children && (
              <div
                className="flex-shrink-0"
                style={{ scrollSnapAlign: "start" }}
              >
                {children}
              </div>
            )}
      </div>

      {canScrollPrev && (
        <Button
          size="lg"
          variant={"outline"}
          round
          className={cn(
            "absolute opacity-100 transition-all",
            "-left-4 top-1/2 -translate-y-1/2 rounded-lg"
          )}
          onClick={scrollPrev}
        >
          <Icon icon={ChevronLeft} />
          <span className="sr-only">Previous</span>
        </Button>
      )}

      {canScrollNext && (
        <Button
          size="lg"
          variant={"outline"}
          round
          className={cn(
            "absolute opacity-100 transition-all",
            "-right-4 top-1/2 -translate-y-1/2 rounded-lg"
          )}
          onClick={scrollNext}
        >
          <Icon icon={ChevronRight} />
          <span className="sr-only">Next</span>
        </Button>
      )}
    </div>
  )
}
