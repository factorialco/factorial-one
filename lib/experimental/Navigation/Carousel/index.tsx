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
import { carouselItemVariants, type CarouselItemVariants } from "./types"

interface CarouselProps {
  children: React.ReactNode
  showArrows?: boolean
  showDots?: boolean
  autoplay?: boolean
  delay?: number
  columns: CarouselItemVariants
}

export const Carousel = ({
  children,
  showArrows = true,
  showDots = true,
  autoplay = false,
  delay = 3000,
  columns,
}: CarouselProps) => {
  const childrenArray = React.Children.toArray(children)

  const plugin = React.useRef(
    autoplay ? Autoplay({ delay: delay, stopOnInteraction: true }) : undefined
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
        align: "center",
        slidesToScroll: "auto",
        duration: 20,
        containScroll: false,
      }}
      plugins={[plugin.current, WheelGesturesPlugin()].filter(Boolean)}
      onMouseEnter={autoplay ? handleMouseEnter : undefined}
      onMouseLeave={autoplay ? handleMouseLeave : undefined}
    >
      <div className="flex flex-col gap-3">
        <div className="relative">
          <CarouselContent>
            {React.Children.map(childrenArray, (child, index) => (
              <CarouselItem
                key={index}
                className={carouselItemVariants(columns)}
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
