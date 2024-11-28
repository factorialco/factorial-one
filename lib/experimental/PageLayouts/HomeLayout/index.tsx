import { Carousel } from "@/experimental/Navigation/Carousel"
import {
  Children,
  forwardRef,
  ReactNode,
  useImperativeHandle,
  useRef,
} from "react"
import { useResizeObserver } from "usehooks-ts"

type Props = {
  widgets?: ReactNode[]
  children?: ReactNode
}

export const HomeLayout = forwardRef<HTMLDivElement, Props>(function Dashboard(
  { widgets, children },
  forwardedRef
) {
  const ref = useRef<HTMLDivElement>(null)

  useImperativeHandle(forwardedRef, () => ref.current as HTMLDivElement)

  const { width } = useResizeObserver({
    ref,
  })
  const canShowContent = !!width
  const isSmallerScreen = canShowContent && width < 992

  const arrayWidgets = Children.toArray(widgets)
    .filter((widget) => !!widget)
    .map((widget, i) => (
      <div key={i} className="h-full [&>div]:h-full [&>div]:shadow-none">
        {widget}
      </div>
    ))

  if (isSmallerScreen) {
    return (
      <div ref={ref} className="flex flex-col gap-6 px-3 pb-3 pt-2">
        {canShowContent && (
          <>
            <Carousel
              columns={{
                default: 1,
                md: 2,
              }}
              showArrows={false}
            >
              {arrayWidgets}
            </Carousel>
            <main>{children}</main>
          </>
        )}
      </div>
    )
  }

  return (
    <div
      ref={ref}
      className="grid h-screen grid-cols-3 grid-rows-[auto,1fr,1fr,1fr] gap-6 px-6 pb-6 pt-2"
    >
      {canShowContent && (
        <>
          <div className="col-span-3 flex flex-row gap-6 *:flex-1">
            {arrayWidgets.slice(0, 3)}
          </div>

          <main className="col-span-2">{children}</main>

          <div className="flex flex-1 flex-col gap-6">
            {arrayWidgets.slice(3)}
          </div>
        </>
      )}
    </div>
  )
})
