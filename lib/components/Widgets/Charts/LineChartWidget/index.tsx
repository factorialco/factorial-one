import { LineChart, LineChartProps } from "@/components/Charts/LineChart"
import { withSkeleton } from "@/lib/skeleton"
import { forwardRef } from "react"
import { ChartContainer, ComposeChartContainerProps } from "../ChartContainer"

export const LineChartWidget = withSkeleton(
  forwardRef<HTMLDivElement, ComposeChartContainerProps<LineChartProps>>(
    (props, ref) => (
      <ChartContainer
        ref={ref}
        {...props}
        chart={
          <LineChart aspect={null} yAxis={{ hide: true }} {...props.chart} />
        }
      />
    )
  ),
  ChartContainer.Skeleton
)
