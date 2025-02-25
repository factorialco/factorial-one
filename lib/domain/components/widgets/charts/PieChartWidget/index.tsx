import { PieChart, PieChartProps } from "@/core/components/charts/PieChart"
import { withSkeleton } from "@/lib/skeleton.tsx"
import { forwardRef } from "react"
import {
  ChartContainer,
  ComposeChartContainerProps,
} from "../ChartContainer.tsx"

export const PieChartWidget = withSkeleton(
  forwardRef<HTMLDivElement, ComposeChartContainerProps<PieChartProps>>(
    function PieChartWidget(props, ref) {
      return (
        <ChartContainer
          ref={ref}
          {...props}
          chart={<PieChart {...props.chart} />}
        />
      )
    }
  ),
  ChartContainer.Skeleton
)
