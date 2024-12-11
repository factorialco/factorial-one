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
import React, { useMemo } from "react"
import {
  type CarouselBreakpoints,
  carouselItemVariants,
  type ColumnNumber,
  type PeekVariant,
} from "./types"

interface CarouselProps {
  children: React.ReactNode
  showArrows?: boolean
  showDots?: boolean
  autoplay?: boolean
  delay?: number
  columns?: CarouselBreakpoints
  showPeek?: boolean
  showFade?: boolean
}

export const Carousel = ({
  children,
  showArrows = true,
  showDots = true,
  autoplay = false,
  delay = 3000,
  columns = { default: 1 },
  showPeek = false,
  showFade = false,
}: CarouselProps) => {
  const childrenArray = React.Children.toArray(children)

  const plugin = useMemo(() => {
    return autoplay ? Autoplay({ delay, stopOnInteraction: true }) : undefined
  }, [autoplay, delay])

  const handleMouseEnter = () => {
    if (plugin) {
      plugin.stop()
    }
  }

  const handleMouseLeave = () => {
    if (plugin) {
      plugin.play()
    }
  }

  function getVariantValue(
    value: ColumnNumber | undefined,
    showPeek: boolean
  ): ColumnNumber | PeekVariant {
    return showPeek ? (`peek${value || 1}` as PeekVariant) : value || 1
  }

  return (
    <ShadCarousel
      className="flex flex-col gap-3"
      opts={{
        align: "start",
        slidesToScroll: 1,
      }}
      plugins={[plugin, WheelGesturesPlugin()].filter(Boolean)}
      onMouseEnter={autoplay ? handleMouseEnter : undefined}
      onMouseLeave={autoplay ? handleMouseLeave : undefined}
    >
      <div className="flex h-full flex-col gap-3">
        <div className="relative">
          <CarouselContent showFade={showFade}>
            {React.Children.map(childrenArray, (child, index) => (
              <CarouselItem
                key={index}
                className={carouselItemVariants({
                  default: getVariantValue(columns.default, showPeek),
                  xs: getVariantValue(columns.xs, showPeek),
                  sm: getVariantValue(columns.sm, showPeek),
                  md: getVariantValue(columns.md, showPeek),
                  lg: getVariantValue(columns.lg, showPeek),
                  peek: showPeek,
                })}
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
