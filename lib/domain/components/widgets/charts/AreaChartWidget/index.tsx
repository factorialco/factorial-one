import { AreaChart, AreaChartProps } from "@/core/components/charts/AreaChart"
import { withSkeleton } from "@/lib/skeleton.tsx"
import { forwardRef } from "react"
import {
  ChartContainer,
  ComposeChartContainerProps,
} from "../ChartContainer.tsx"

export interface AreaChartWidgetProps
  extends ComposeChartContainerProps<AreaChartProps> {
  canBeBlurred?: boolean
}

export const AreaChartWidget = withSkeleton(
  forwardRef<HTMLDivElement, AreaChartWidgetProps>(function AreaChartWidget(
    { canBeBlurred, ...props },
    ref
  ) {
    const newContainerProps = {
      ...props,
      header: {
        ...props.header,
        canBeBlurred,
      },
    }

    const newPropsChart = {
      ...props.chart,
      yAxis: props.chart.yAxis ? { ...props.chart.yAxis } : { hide: true },
    }

    return (
      <ChartContainer
        ref={ref}
        {...newContainerProps}
        chart={<AreaChart {...newPropsChart} canBeBlurred={canBeBlurred} />}
      />
    )
  }),
  ChartContainer.Skeleton
)
