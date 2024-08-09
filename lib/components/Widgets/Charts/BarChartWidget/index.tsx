import { BarChart, BarChartProps } from "@/components/Charts/BarChart"
import { withSkeleton } from "@/lib/skeleton"
import { forwardRef } from "react"
import { ChartContainer, ComposeChartContainerProps } from "../ChartContainer"

export const BarChartWidget = withSkeleton(
  forwardRef<HTMLDivElement, ComposeChartContainerProps<BarChartProps>>(
    (props, ref) => (
      <ChartContainer
        ref={ref}
        {...props}
        chart={<BarChart aspect={null} {...props.chart} />}
      />
    )
  ),
  ChartContainer.Skeleton
)
