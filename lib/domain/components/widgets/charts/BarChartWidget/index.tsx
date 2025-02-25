import { BarChart, BarChartProps } from "@/core/components/charts/BarChart"
import { withSkeleton } from "@/lib/skeleton.tsx"
import { forwardRef } from "react"
import {
  ChartContainer,
  ComposeChartContainerProps,
} from "../ChartContainer.tsx"

const BarChartContainer = forwardRef<
  HTMLDivElement,
  ComposeChartContainerProps<BarChartProps>
>(function BarChartContainer(props, ref) {
  return (
    <ChartContainer
      ref={ref}
      {...props}
      chart={<BarChart yAxis={{ hide: true }} {...props.chart} />}
    />
  )
})

export const BarChartWidget = withSkeleton(
  BarChartContainer,
  ChartContainer.Skeleton
)
