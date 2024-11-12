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
  const isSmallScreen = useMediaQuery("(max-width: 992px)", {
    initializeWithValue: true,
  })

  const arrayWidgets = Children.toArray(widgets).filter((widget) => !!widget)

  if (isSmallScreen) {
    return (
      <div ref={ref} className="flex flex-col gap-6">
        <WidgetStrip>{arrayWidgets}</WidgetStrip>

        <main>{children}</main>
      </div>
    )
  }

  return (
    <div ref={ref} className="flex flex-col gap-6">
      {/* A */}
      <div className="flex flex-row gap-6 *:flex-1">
        {arrayWidgets.slice(0, 3)}
      </div>

      <div className="flex flex-row gap-12">
        {/* C */}
        <div className="flex-[2]">{children}</div>

        {/* B */}
        <div className="flex flex-1 flex-col gap-6">
          {arrayWidgets.slice(3).map((widget) => (
            <div>{widget}</div>
          ))}
        </div>
      </div>
    </div>
  )
})
