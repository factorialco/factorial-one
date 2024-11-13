import { Children, forwardRef, ReactNode } from "react"
import { useMediaQuery } from "usehooks-ts"
import { WidgetStrip } from "../WidgetStrip"

type Props = {
  widgets?: ReactNode[]
  children?: ReactNode
}

export const HomeLayout = forwardRef<HTMLDivElement, Props>(function Dashboard(
  { widgets, children },
  ref
) {
  const isSmallerScreen = useMediaQuery("(max-width: 992px)", {
    initializeWithValue: true,
  })

  const arrayWidgets = Children.toArray(widgets).filter((widget) => !!widget)

  if (isSmallerScreen) {
    return (
      <div ref={ref} className="flex flex-col gap-6">
        <WidgetStrip>{arrayWidgets}</WidgetStrip>
        <main>{children}</main>
      </div>
    )
  }

  return (
    <div
      ref={ref}
      className="grid h-screen grid-cols-3 grid-rows-[auto,1fr,1fr,1fr] gap-6"
    >
      <div className="col-span-3 flex flex-row gap-6 *:flex-1">
        {arrayWidgets.slice(0, 3)}
      </div>

      <main className="col-span-2 lg:row-span-3">{children}</main>

      <div className="flex flex-1 flex-col gap-6">{arrayWidgets.slice(3)}</div>
    </div>
  )
})
