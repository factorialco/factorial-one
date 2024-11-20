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
import React from "react"

interface CarouselProps {
  children: React.ReactNode
  showArrows?: boolean
  showDots?: boolean
  autoScroll?: boolean
  autoScrollSpeed?: number
  responsive?: boolean
}

export const Carousel = ({
  children,
  showArrows = true,
  showDots = true,
  autoScroll = false,
  autoScrollSpeed = 3000,
  responsive = true,
}: CarouselProps) => {
  const childrenArray = React.Children.toArray(children)

  const plugin = React.useRef(
    autoScroll
      ? Autoplay({ delay: autoScrollSpeed, stopOnInteraction: true })
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
      }}
      plugins={plugin.current ? [plugin.current] : []}
      onMouseEnter={autoScroll ? handleMouseEnter : undefined}
      onMouseLeave={autoScroll ? handleMouseLeave : undefined}
    >
      <CarouselContent>
        {React.Children.map(childrenArray, (child, index) => (
          <CarouselItem
            key={index}
            className={cn(
              responsive
                ? "sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
                : "basis-full"
            )}
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
      {showDots && <CarouselDots />}
    </ShadCarousel>
  )
}
