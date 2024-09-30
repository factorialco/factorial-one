import {
  RadialProgressChart,
  RadialProgressProps,
} from "@/components/Charts/RadialProgressChart"
import { withSkeleton } from "@/lib/skeleton"
import { forwardRef } from "react"
import { Widget } from "../../Widget"

export type RadialProgressWidgetProps = {
  header: {
    title: string
    subtitle?: string
    info?: string
    link?: { title: string; url: string }
  }
  chart: RadialProgressProps
}

const _RadialProgressWidget = forwardRef<
  HTMLDivElement,
  RadialProgressWidgetProps
>(({ header, chart }, ref) => (
  <Widget ref={ref} header={header}>
    <div className="flex h-40 items-center justify-center">
      <RadialProgressChart {...chart} />
    </div>
  </Widget>
))

_RadialProgressWidget.displayName = "RadialProgressWidget"

export const RadialProgressWidget = withSkeleton(
  _RadialProgressWidget,
  Widget.Skeleton
)
