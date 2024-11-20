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
  align?: "start" | "center"
  showArrows?: boolean
  showDots?: boolean
  enableAutoplay?: boolean
  autoplayDelay?: number
  itemClassName?: string
}

export const Carousel = ({
  children,
  align = "start",
  showArrows = true,
  showDots = true,
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
        align: align,
        slidesToScroll: "auto",
        duration: 20,
        containScroll: false,
      }}
      plugins={[plugin.current, WheelGesturesPlugin()].filter(Boolean)}
      onMouseEnter={enableAutoplay ? handleMouseEnter : undefined}
      onMouseLeave={enableAutoplay ? handleMouseLeave : undefined}
    >
      <div className="flex flex-col gap-3">
        <div className="relative">
          <CarouselContent>
            {React.Children.map(childrenArray, (child, index) => (
              <CarouselItem
                key={index}
                className={cn("basis-full", itemClassName)}
              >
                {child}
              </CarouselItem>
            ))}
          </CarouselContent>
          {showArrows && (
            <>
              <CarouselPrevious />
              <CarouselNext />
            </>
          )}
        </div>
        {showDots && <CarouselDots />}
      </div>
    </ShadCarousel>
  )
}
