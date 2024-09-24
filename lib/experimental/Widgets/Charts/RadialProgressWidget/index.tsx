import {
  RadialProgressChart,
  RadialProgressProps,
} from "@/components/Charts/RadialProgressChart"
import { withSkeleton } from "@/lib/skeleton"
import { forwardRef } from "react"
import { WidgetContainer } from "../../WidgetContainer"

export type RadialProgressWidgetProps = {
  header: {
    title: string
    subtitle?: string
    info?: string
    link?: { title: string; url: string }
  }
  chart: RadialProgressProps
}

export const RadialProgressWidget = withSkeleton(
  forwardRef<HTMLDivElement, RadialProgressWidgetProps>(
    ({ header, chart }, ref) => (
      <WidgetContainer ref={ref} header={header}>
        <div className="flex h-40 items-center justify-center">
          <RadialProgressChart {...chart} />
        </div>
      </WidgetContainer>
    )
  ),
  WidgetContainer.Skeleton
)
