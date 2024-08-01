import { BarChart, BarChartProps } from "@/components/Charts/BarChart"
import { forwardRef } from "react"
import { ChartContainer, ChartContainerProps } from "../ChartContainer"

export const BarChartWidget = forwardRef<
  HTMLDivElement,
  ChartContainerProps<BarChartProps>
>((props, ref) => (
  <ChartContainer ref={ref} {...props} chart={<BarChart {...props.chart} />} />
))
