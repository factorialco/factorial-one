import { AreaChart, AreaChartProps } from "@/components/Charts/AreaChart"
import { withSkeleton } from "@/lib/skeleton"
import { forwardRef, useState } from "react"
import { ChartContainer, ComposeChartContainerProps } from "../ChartContainer"

export interface AreaChartWidgetProps
  extends ComposeChartContainerProps<AreaChartProps> {
  hasBlur?: boolean
}

export const AreaChartWidget = withSkeleton(
  forwardRef<HTMLDivElement, AreaChartWidgetProps>((props, ref) => {
    const [isShow, setIsShow] = useState(false)
    const toggleBlur = () => setIsShow((prev) => !prev)

    const isBlur = props.hasBlur ? !isShow : false

    const newPropsChart = {
      ...props.chart,
      yAxis: props.chart.yAxis
        ? { ...props.chart.yAxis, isBlur }
        : { hide: true },
    }
    return (
      <ChartContainer
        ref={ref}
        isShow={!isBlur}
        toggleBlur={toggleBlur}
        {...props}
        chart={<AreaChart aspect={"small"} {...newPropsChart} />}
      />
    )
  }),
  ChartContainer.Skeleton
)
