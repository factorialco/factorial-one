import { PieChart, PieChartProps } from "@/components/Charts/PieChart"
import { forwardRef } from "react"
import { ChartContainer, ComposeChartContainerProps } from "../ChartContainer"

export const PieChartWidget = forwardRef<
  HTMLDivElement,
  ComposeChartContainerProps<PieChartProps>
>((props, ref) => (
  <ChartContainer
    ref={ref}
    {...props}
    chart={<PieChart aspect={null} {...props.chart} />}
  />
))
