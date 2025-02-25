import {
  VerticalBarChart,
  VerticalBarChartProps,
} from "@/core/components/charts/VerticalBarChart"
import { withSkeleton } from "@/lib/skeleton.tsx"
import { forwardRef } from "react"
import {
  ChartContainer,
  ComposeChartContainerProps,
} from "../ChartContainer.tsx"

export const VerticalBarChartWidget = withSkeleton(
  forwardRef<HTMLDivElement, ComposeChartContainerProps<VerticalBarChartProps>>(
    function VerticalBarChartWidget(props, ref) {
      return (
        <ChartContainer
          ref={ref}
          {...props}
          chart={<VerticalBarChart xAxis={{ hide: true }} {...props.chart} />}
        />
      )
    }
  ),
  ChartContainer.Skeleton
)
