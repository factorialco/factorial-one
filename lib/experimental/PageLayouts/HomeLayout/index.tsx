import { Carousel } from "@/experimental/Navigation/Carousel"
import { cn } from "@/lib/utils"
import {
  Children,
  forwardRef,
  ReactNode,
  useImperativeHandle,
  useRef,
} from "react"
import { useWindowSize } from "usehooks-ts"

type Props = {
  widgets?: ReactNode[]
  children?: ReactNode
}

export const HomeLayout = forwardRef<HTMLDivElement, Props>(function HomeLayout(
  { widgets, children },
  forwardedRef
) {
  const ref = useRef<HTMLDivElement>(null)

  useImperativeHandle(forwardedRef, () => ref.current as HTMLDivElement)

  const { width } = useWindowSize()

  const canShowContent = !!width

  const isSmallerScreen = canShowContent && width < 1024

  const arrayWidgets = Children.toArray(widgets)
    .filter((widget) => !!widget)
    .map((widget, i) => (
      <div
        key={i}
        className={cn(
          isSmallerScreen && "h-full [&>div]:h-full [&>div]:shadow-none"
        )}
      >
        {widget}
      </div>
    ))

  return (
    <div ref={ref}>
      {canShowContent && (
        <>
          {/* Smaller screen content */}
          <div
            className={cn(
              "flex flex-col gap-6 px-5 pb-5 pt-4 md:px-3 md:pb-3 md:pt-2",
              !isSmallerScreen && "hidden"
            )}
          >
            <Carousel
              columns={{
                xs: 1,
                sm: 1,
                md: 2,
                lg: 2,
              }}
              showArrows={false}
            >
              {arrayWidgets}
            </Carousel>
            <main>{children}</main>
          </div>

          {/* Larger screen content */}
          <div
            className={cn(
              "grid grid-cols-3 gap-6 px-6 pb-6 pt-2",
              isSmallerScreen && "hidden"
            )}
          >
            <div className="col-span-3 flex flex-row gap-6 *:flex-1">
              {arrayWidgets.slice(0, 3)}
            </div>

            <main className="col-span-2">{children}</main>

            <div className="flex flex-1 flex-col gap-6">
              {arrayWidgets.slice(3)}
            </div>
          </div>
        </>
      )}
    </div>
  )
})
