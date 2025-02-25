import { LineChart, LineChartProps } from "@/core/components/charts/LineChart"
import { withSkeleton } from "@/lib/skeleton.tsx"
import { forwardRef } from "react"
import {
  ChartContainer,
  ComposeChartContainerProps,
} from "../ChartContainer.tsx"

export const LineChartWidget = withSkeleton(
  forwardRef<HTMLDivElement, ComposeChartContainerProps<LineChartProps>>(
    function LineChartWidget(props, ref) {
      return (
        <ChartContainer
          ref={ref}
          {...props}
          chart={<LineChart yAxis={{ hide: true }} {...props.chart} />}
        />
      )
    }
  ),
  ChartContainer.Skeleton
)
