import {
  VerticalBarChart,
  VerticalBarChartProps,
} from "@/components/Charts/VerticalBarChart"
import { withSkeleton } from "@/lib/skeleton"
import { forwardRef } from "react"
import { ChartContainer, ComposeChartContainerProps } from "../ChartContainer"

const _VerticalBarChartWidget = forwardRef<
  HTMLDivElement,
  ComposeChartContainerProps<VerticalBarChartProps>
>((props, ref) => (
  <ChartContainer
    ref={ref}
    {...props}
    chart={
      <VerticalBarChart aspect={null} xAxis={{ hide: true }} {...props.chart} />
    }
  />
))

_VerticalBarChartWidget.displayName = "VerticalBarChartWidget"

export const VerticalBarChartWidget = withSkeleton(
  _VerticalBarChartWidget,
  ChartContainer.Skeleton
)
