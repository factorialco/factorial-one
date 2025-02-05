import { Icon } from "@/factorial-one"
import { ArrowLeft, ArrowRight } from "@/icons/app"
import { cn } from "@/lib/utils"
import { Button } from "@/ui/button"
import { PropsWithChildren, useEffect, useRef, useState } from "react"

export const SPACE_FOR_WIDGET_SHADOW = 28

export const DynamicCarousel = ({ children }: PropsWithChildren) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [canScrollNext, setCanScrollNext] = useState(true)
  const [canScrollPrev, setCanScrollPrev] = useState(false)

  const scrollToNextItem = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current
      const { scrollLeft } = container

      if (direction === "right") {
        const nextItem = Array.from(container.children).find((child) => {
          const childLeft = (child as HTMLElement).offsetLeft
          return childLeft - SPACE_FOR_WIDGET_SHADOW > scrollLeft
        })
        if (nextItem) {
          container.scrollTo({
            left:
              (nextItem as HTMLElement).offsetLeft - SPACE_FOR_WIDGET_SHADOW,
            behavior: "smooth",
          })
        }
      } else {
        const previousItem = Array.from(container.children)
          .reverse()
          .find((child) => {
            const childRight =
              (child as HTMLElement).offsetLeft +
              (child as HTMLElement).offsetWidth
            return childRight < scrollLeft
          })
        if (previousItem) {
          container.scrollTo({
            left:
              (previousItem as HTMLElement).offsetLeft -
              SPACE_FOR_WIDGET_SHADOW,
            behavior: "smooth",
          })
        }
      }
    }
  }

  const updateScrollState = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current
      setCanScrollPrev(scrollLeft > 0)
      setCanScrollNext(scrollLeft + clientWidth < scrollWidth)
    }
  }

  useEffect(() => {
    const container = scrollContainerRef.current
    if (container) {
      container.addEventListener("scroll", updateScrollState)
      updateScrollState()
    }
    return () => {
      if (container) {
        container.removeEventListener("scroll", updateScrollState)
      }
    }
  }, [])

  let maskImageStyle = ""
  if (canScrollPrev && canScrollNext) {
    maskImageStyle = `linear-gradient(to right, transparent 0px, transparent ${SPACE_FOR_WIDGET_SHADOW}px, black ${2 * SPACE_FOR_WIDGET_SHADOW}px, black calc(100% - ${2 * SPACE_FOR_WIDGET_SHADOW}px), transparent calc(100% - ${SPACE_FOR_WIDGET_SHADOW}px), transparent 100%)`
  } else if (canScrollPrev && !canScrollNext) {
    maskImageStyle = `linear-gradient(to right, transparent 0px, transparent ${SPACE_FOR_WIDGET_SHADOW}px, black ${2 * SPACE_FOR_WIDGET_SHADOW}px, black 100%)`
  } else if (!canScrollPrev && canScrollNext) {
    maskImageStyle = `linear-gradient(to right, black 0px, black calc(100% - ${2 * SPACE_FOR_WIDGET_SHADOW}px), transparent calc(100% - ${SPACE_FOR_WIDGET_SHADOW}px), transparent 100%)`
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
        <style></style>
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
          size="sm"
          variant={"outline"}
          round
          className={cn(
            "absolute opacity-100 transition-all",
            "-left-3 top-1/2 -translate-y-1/2"
          )}
          onClick={() => scrollToNextItem("left")}
        >
          <Icon size="sm" icon={ArrowLeft} />
          <span className="sr-only">Previous</span>
        </Button>
      )}

      {canScrollNext && (
        <Button
          size="sm"
          variant={"outline"}
          round
          className={cn(
            "absolute opacity-100 transition-all",
            "-right-3 top-1/2 -translate-y-1/2"
          )}
          onClick={() => scrollToNextItem("right")}
        >
          <Icon size="sm" icon={ArrowRight} />
          <span className="sr-only">Next</span>
        </Button>
      )}
    </div>
  )
}
