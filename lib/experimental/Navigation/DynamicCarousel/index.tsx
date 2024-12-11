import { Icon } from "@/factorial-one"
import { ArrowLeft, ArrowRight } from "@/icons/app"
import { cn } from "@/lib/utils"
import { Button } from "@/ui/button"
import { PropsWithChildren, useEffect, useRef, useState } from "react"

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
          return childLeft - 28 > scrollLeft
        })
        if (nextItem) {
          container.scrollTo({
            left: (nextItem as HTMLElement).offsetLeft - 28,
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
            left: (previousItem as HTMLElement).offsetLeft - 28,
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

  return (
    <div className="relative">
      <div
        ref={scrollContainerRef}
        className="relative flex gap-4 overflow-x-auto overflow-y-visible scroll-smooth"
        style={{
          scrollbarWidth: "none", // Para Firefox
          msOverflowStyle: "none", // Para IE y Edge
          margin: "-28px",
          padding: "28px",
          height: "calc(100% + 56px)",
          width: "calc(100% + 56px)",
        }}
      >
        <style>
          {`
              /* Para ocultar scrollbar en Chrome, Safari y Edge */
              .no-scrollbar::-webkit-scrollbar {
                display: none;
              }
            `}
        </style>
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

      {/* Gradientes dinámicos para los bordes */}
      {canScrollPrev && (
        <div
          className={cn(
            "w-[60px]",
            "absolute",
            "h-full",
            "top-0",
            "left-[-28px]",
            "bg-gradient-to-l from-transparent from-0% to-f1-background to-100%"
          )}
        ></div>
      )}
      {canScrollNext && (
        <div
          className={cn(
            "w-[60px]",
            "absolute",
            "h-full",
            "top-0",
            "right-[-28px]",
            "bg-gradient-to-r from-transparent from-0% to-f1-background to-100%"
          )}
        ></div>
      )}

      {/* Botón Izquierdo dinámico */}
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

      {/* Botón Derecho dinámico */}
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
