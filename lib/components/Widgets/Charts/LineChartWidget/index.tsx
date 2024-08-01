import { LineChart, LineChartProps } from "@/components/Charts/LineChart"
import { forwardRef } from "react"
import { ChartContainer, ChartContainerProps } from "../ChartContainer"

export const LineChartWidget = forwardRef<
  HTMLDivElement,
  ChartContainerProps<LineChartProps>
>((props, ref) => (
  <ChartContainer ref={ref} {...props} chart={<LineChart {...props.chart} />} />
))
