import { AreaChart, AreaChartProps } from "@/components/Charts/AreaChart"
import { forwardRef } from "react"
import { ChartContainer, ChartContainerProps } from "../ChartContainer"

export const AreaChartWidget = forwardRef<
  HTMLDivElement,
  ChartContainerProps<AreaChartProps>
>((props, ref) => (
  <ChartContainer ref={ref} {...props} chart={<AreaChart {...props.chart} />} />
))
