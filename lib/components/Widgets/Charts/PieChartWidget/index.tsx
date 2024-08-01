import { PieChart, PieChartProps } from "@/components/Charts/PieChart"
import { forwardRef } from "react"
import { ChartContainer, ChartContainerProps } from "../ChartContainer"

export const PieChartWidget = forwardRef<
  HTMLDivElement,
  ChartContainerProps<PieChartProps>
>((props, ref) => (
  <ChartContainer ref={ref} {...props} chart={<PieChart {...props.chart} />} />
))
