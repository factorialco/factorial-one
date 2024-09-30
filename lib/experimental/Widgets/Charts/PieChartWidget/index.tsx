import { PieChart, PieChartProps } from "@/components/Charts/PieChart"
import { withSkeleton } from "@/lib/skeleton"
import { forwardRef } from "react"
import { ChartContainer, ComposeChartContainerProps } from "../ChartContainer"

const _PieChartWidget = forwardRef<
  HTMLDivElement,
  ComposeChartContainerProps<PieChartProps>
>((props, ref) => (
  <ChartContainer
    ref={ref}
    {...props}
    chart={<PieChart aspect={null} {...props.chart} />}
  />
))

_PieChartWidget.displayName = "PieChartWidget"

export const PieChartWidget = withSkeleton(
  _PieChartWidget,
  ChartContainer.Skeleton
)
