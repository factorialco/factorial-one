import { BarChart, BarChartProps } from "@/components/Charts/BarChart"
import { forwardRef } from "react"
import { ChartContainer, ComposeChartContainerProps } from "../ChartContainer"

export const BarChartWidget = forwardRef<
  HTMLDivElement,
  ComposeChartContainerProps<BarChartProps>
>((props, ref) => (
  <ChartContainer ref={ref} {...props} chart={<BarChart {...props.chart} />} />
))
