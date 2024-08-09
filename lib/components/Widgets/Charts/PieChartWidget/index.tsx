import { PieChart, PieChartProps } from "@/components/Charts/PieChart"
import { withSkeleton } from "@/lib/skeleton"
import { forwardRef } from "react"
import { ChartContainer, ComposeChartContainerProps } from "../ChartContainer"

export const PieChartWidget = withSkeleton(
  forwardRef<HTMLDivElement, ComposeChartContainerProps<PieChartProps>>(
    (props, ref) => (
      <ChartContainer
        ref={ref}
        {...props}
        chart={<PieChart aspect={null} {...props.chart} />}
      />
    )
  ),
  ChartContainer.Skeleton
)
