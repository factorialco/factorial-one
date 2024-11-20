import { cn } from "@/lib/utils"
import {
  CarouselContent,
  CarouselDots,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  Carousel as ShadCarousel,
} from "@/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures"
import React from "react"

interface CarouselProps {
  children: React.ReactNode
  showNavigationArrows?: boolean
  showPaginationDots?: boolean
  enableAutoplay?: boolean
  autoplayDelay?: number
  itemClassName?: string
}

export const Carousel = ({
  children,
  showNavigationArrows = true,
  showPaginationDots = true,
  enableAutoplay = false,
  autoplayDelay = 3000,
  itemClassName = "sm:basis-1/2 md:basis-1/3 lg:basis-1/4",
}: CarouselProps) => {
  const childrenArray = React.Children.toArray(children)

  const plugin = React.useRef(
    enableAutoplay
      ? Autoplay({ delay: autoplayDelay, stopOnInteraction: true })
      : undefined
  )

  const handleMouseEnter = () => {
    if (plugin.current) {
      plugin.current.stop()
    }
  }

  const handleMouseLeave = () => {
    if (plugin.current) {
      plugin.current.play()
    }
  }

  return (
    <ShadCarousel
      className="flex flex-col gap-3"
      opts={{
        align: "start",
        slidesToScroll: "auto",
        duration: 20,
      }}
      plugins={[plugin.current, WheelGesturesPlugin()].filter(Boolean)}
      onMouseEnter={enableAutoplay ? handleMouseEnter : undefined}
      onMouseLeave={enableAutoplay ? handleMouseLeave : undefined}
    >
      <CarouselContent>
        {React.Children.map(childrenArray, (child, index) => (
          <CarouselItem key={index} className={cn("basis-full", itemClassName)}>
            {child}
          </CarouselItem>
        ))}
      </CarouselContent>
      {showNavigationArrows && (
        <>
          <CarouselPrevious />
          <CarouselNext />
        </>
      )}
      {showPaginationDots && <CarouselDots />}
    </ShadCarousel>
  )
}
