import { AreaChart, AreaChartProps } from "@/components/Charts/AreaChart"
import { withSkeleton } from "@/lib/skeleton"
import { forwardRef } from "react"
import { ChartContainer, ComposeChartContainerProps } from "../ChartContainer"

export const BarChartWidget = withSkeleton(
  forwardRef<HTMLDivElement, ComposeChartContainerProps<AreaChartProps>>(
    (props, ref) => (
      <ChartContainer
        ref={ref}
        {...props}
        chart={<AreaChart aspect={null} {...props.chart} />}
      />
    )
  ),
  ChartContainer.Skeleton
)
