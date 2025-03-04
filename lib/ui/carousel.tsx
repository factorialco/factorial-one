"use client"

import { Icon } from "@/components/Utilities/Icon"
import { ArrowLeft, ArrowRight } from "@/icons/app"
import useEmblaCarousel, {
  type UseEmblaCarouselType,
} from "embla-carousel-react"
import * as React from "react"

import { SPACE_FOR_WIDGET_SHADOW } from "@/experimental/Navigation/Carousel/DynamicCarousel"
import { cn } from "@/lib/utils"
import { Button } from "@/ui/button"

type CarouselApi = UseEmblaCarouselType[1]
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>
type CarouselOptions = UseCarouselParameters[0]
type CarouselPlugin = UseCarouselParameters[1]

type CarouselProps = {
  opts?: CarouselOptions
  plugins?: CarouselPlugin
  orientation?: "horizontal" | "vertical"
  setApi?: (api: CarouselApi) => void
}

type CarouselContextProps = {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0]
  api: ReturnType<typeof useEmblaCarousel>[1]
  scrollPrev: () => void
  scrollNext: () => void
  canScrollPrev: boolean
  canScrollNext: boolean
} & CarouselProps

const CarouselContext = React.createContext<CarouselContextProps | null>(null)

function useCarousel() {
  const context = React.useContext(CarouselContext)

  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />")
  }

  return context
}

const Carousel = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & CarouselProps
>(
  (
    {
      orientation = "horizontal",
      opts,
      setApi,
      plugins,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const [carouselRef, api] = useEmblaCarousel(
      {
        ...opts,
        axis: orientation === "horizontal" ? "x" : "y",
      },
      plugins
    )
    const [canScrollPrev, setCanScrollPrev] = React.useState(false)
    const [canScrollNext, setCanScrollNext] = React.useState(false)

    const onSelect = React.useCallback((api: CarouselApi) => {
      if (!api) {
        return
      }

      setCanScrollPrev(api.canScrollPrev())
      setCanScrollNext(api.canScrollNext())
    }, [])

    const scrollPrev = React.useCallback(() => {
      api?.scrollPrev()
    }, [api])

    const scrollNext = React.useCallback(() => {
      api?.scrollNext()
    }, [api])

    const handleKeyDown = React.useCallback(
      (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === "ArrowLeft") {
          event.preventDefault()
          scrollPrev()
        } else if (event.key === "ArrowRight") {
          event.preventDefault()
          scrollNext()
        }
      },
      [scrollPrev, scrollNext]
    )

    React.useEffect(() => {
      if (!api || !setApi) {
        return
      }

      setApi(api)
    }, [api, setApi])

    React.useEffect(() => {
      if (!api) {
        return
      }

      onSelect(api)
      api.on("reInit", onSelect)
      api.on("select", onSelect)

      return () => {
        api?.off("select", onSelect)
      }
    }, [api, onSelect])

    return (
      <CarouselContext.Provider
        value={{
          carouselRef,
          api: api,
          opts,
          orientation:
            orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
          scrollPrev,
          scrollNext,
          canScrollPrev,
          canScrollNext,
        }}
      >
        <div
          ref={ref}
          onKeyDownCapture={handleKeyDown}
          className={cn("relative", className)}
          role="region"
          aria-roledescription="carousel"
          {...props}
        >
          {children}
        </div>
      </CarouselContext.Provider>
    )
  }
)
Carousel.displayName = "Carousel"

const CarouselContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const maskImageStyle = `linear-gradient(to right, transparent 0px, transparent ${SPACE_FOR_WIDGET_SHADOW / 2}px, black ${SPACE_FOR_WIDGET_SHADOW}px, black calc(100% - ${SPACE_FOR_WIDGET_SHADOW}px), transparent calc(100% - ${SPACE_FOR_WIDGET_SHADOW / 2}px), transparent 100%)`

  const { carouselRef, orientation } = useCarousel()

  return (
    <div
      ref={carouselRef}
      className="overflow-hidden"
      style={{
        scrollbarWidth: "none", // For Firefox
        msOverflowStyle: "none", // For IE and Edge
        margin: `-${SPACE_FOR_WIDGET_SHADOW}px`,
        padding: `${SPACE_FOR_WIDGET_SHADOW}px`,
        height: `calc(100% + ${SPACE_FOR_WIDGET_SHADOW * 2}px)`,
        width: `calc(100% + ${SPACE_FOR_WIDGET_SHADOW * 2}px)`,
        maskImage: maskImageStyle,
        WebkitMaskImage: maskImageStyle,
      }}
    >
      <div
        ref={ref}
        className={cn(
          "flex",
          orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
          className
        )}
        {...props}
      />
    </div>
  )
})
CarouselContent.displayName = "CarouselContent"

const CarouselItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { orientation } = useCarousel()

  return (
    <div
      ref={ref}
      role="group"
      aria-roledescription="slide"
      className={cn(
        "min-w-0 shrink-0 grow-0 basis-full",
        orientation === "horizontal" ? "pl-4" : "pt-4",
        className
      )}
      {...props}
    />
  )
})
CarouselItem.displayName = "CarouselItem"

const CarouselPrevious = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Button>
>(({ className, variant = "outline", ...props }, ref) => {
  const { orientation, scrollPrev, canScrollPrev } = useCarousel()

  return (
    <Button
      ref={ref}
      size="sm"
      variant={variant}
      round
      className={cn(
        "absolute opacity-100 transition-all",
        !canScrollPrev && "disabled:opacity-0",
        orientation === "horizontal"
          ? "-left-3 top-1/2 -translate-y-1/2"
          : "-top-3 left-1/2 -translate-x-1/2 rotate-90",
        className
      )}
      disabled={!canScrollPrev}
      onClick={scrollPrev}
      {...props}
    >
      <Icon size="sm" icon={ArrowLeft} />
      <span className="sr-only">Previous</span>
    </Button>
  )
})
CarouselPrevious.displayName = "CarouselPrevious"

const CarouselNext = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Button>
>(({ className, variant = "outline", ...props }, ref) => {
  const { orientation, scrollNext, canScrollNext } = useCarousel()

  return (
    <Button
      ref={ref}
      size="sm"
      variant={variant}
      round
      className={cn(
        "absolute opacity-100 transition-all",
        !canScrollNext && "disabled:opacity-0",
        orientation === "horizontal"
          ? "-right-3 top-1/2 -translate-y-1/2"
          : "-bottom-3 left-1/2 -translate-x-1/2 rotate-90",
        className
      )}
      disabled={!canScrollNext}
      onClick={scrollNext}
      {...props}
    >
      <Icon size="sm" icon={ArrowRight} />
      <span className="sr-only">Next</span>
    </Button>
  )
})
CarouselNext.displayName = "CarouselNext"

const CarouselDots = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>((props, ref) => {
  const { api } = useCarousel()
  const [, setUpdate] = React.useState(false)
  const forceUpdate = React.useCallback(() => {
    setUpdate((prev) => !prev)
  }, [])

  React.useEffect(() => {
    if (api) {
      api.on("select", forceUpdate)
      api.on("reInit", forceUpdate)

      return () => {
        api.off("select", forceUpdate)
        api.off("reInit", forceUpdate)
      }
    }
  }, [api, forceUpdate])

  const numberOfSlides = api?.scrollSnapList().length || 0
  const currentSlide = api?.selectedScrollSnap() || 0

  if (numberOfSlides > 1) {
    return (
      <div
        ref={ref}
        className={cn("flex justify-center gap-2", props.className)}
      >
        {Array.from({ length: numberOfSlides }, (_, i) => (
          <Button
            key={i}
            className={cn("h-2 w-2 rounded-full p-0 transition-all", {
              "bg-f1-background-inverse hover:scale-110 hover:bg-f1-foreground-secondary":
                i === currentSlide,
              "bg-f1-background-secondary-hover hover:scale-110 hover:bg-f1-background-secondary-hover":
                i !== currentSlide,
            })}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => api?.scrollTo(i)}
          />
        ))}
      </div>
    )
  } else {
    return <></>
  }
})
CarouselDots.displayName = "CarouselDots"

export {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
}
