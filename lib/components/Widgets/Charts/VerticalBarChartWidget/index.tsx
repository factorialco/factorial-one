import {
  VerticalBarChart,
  VerticalBarChartProps,
} from "@/components/Charts/VerticalBarChart"
import { withSkeleton } from "@/lib/skeleton"
import { forwardRef } from "react"
import { ChartContainer, ComposeChartContainerProps } from "../ChartContainer"

export const VerticalBarChartWidget = withSkeleton(
  forwardRef<HTMLDivElement, ComposeChartContainerProps<VerticalBarChartProps>>(
    (props, ref) => (
      <ChartContainer
        ref={ref}
        {...props}
        chart={<VerticalBarChart aspect={null} {...props.chart} />}
      />
    )
  ),
  ChartContainer.Skeleton
)
