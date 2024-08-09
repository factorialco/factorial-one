import { LineChart, LineChartProps } from "@/components/Charts/LineChart"
import { forwardRef } from "react"
import { ChartContainer, ComposeChartContainerProps } from "../ChartContainer"

export const LineChartWidget = forwardRef<
  HTMLDivElement,
  ComposeChartContainerProps<LineChartProps>
>((props, ref) => (
  <ChartContainer
    ref={ref}
    {...props}
    chart={<LineChart aspect={null} {...props.chart} />}
  />
))
