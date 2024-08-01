import {
  VerticalBarChart,
  VerticalBarChartProps,
} from "@/components/Charts/VerticalBarChart"
import { forwardRef } from "react"
import { ChartContainer, ChartContainerProps } from "../ChartContainer"

export const VerticalBarChartWidget = forwardRef<
  HTMLDivElement,
  ChartContainerProps<VerticalBarChartProps>
>((props, ref) => (
  <ChartContainer
    ref={ref}
    {...props}
    chart={<VerticalBarChart {...props.chart} />}
  />
))
