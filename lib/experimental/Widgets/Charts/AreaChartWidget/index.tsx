import { AreaChart, AreaChartProps } from "@/components/Charts/AreaChart"
import { withSkeleton } from "@/lib/skeleton"
import { forwardRef, useState } from "react"
import { ChartContainer, ComposeChartContainerProps } from "../ChartContainer"

export interface AreaChartWidgetProps
  extends ComposeChartContainerProps<AreaChartProps> {
  hasBlur?: boolean
}

export const AreaChartWidget = withSkeleton(
  forwardRef<HTMLDivElement, AreaChartWidgetProps>(function AreaChartWidget(
    { hasBlur, ...props },
    ref
  ) {
    const [isBlur, setIsBlur] = useState<boolean>(!!hasBlur)

    const toggleBlur = () => setIsBlur((prev) => !prev)

    const newContainerProps = {
      ...props,
      header: {
        ...props.header,
        hasBlur,
        isBlur,
        toggleBlur,
      },
    }

    const newPropsChart = {
      ...props.chart,
      yAxis: props.chart.yAxis
        ? { ...props.chart.yAxis, isBlur }
        : { hide: true },
    }

    return (
      <ChartContainer
        ref={ref}
        {...newContainerProps}
        chart={<AreaChart {...newPropsChart} />}
      />
    )
  }),
  ChartContainer.Skeleton
)
