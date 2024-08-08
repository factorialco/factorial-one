import {
  VerticalBarChart,
  VerticalBarChartProps,
} from "@/components/Charts/VerticalBarChart"
import { forwardRef } from "react"
import { ChartContainer, ComposeChartContainerProps } from "../ChartContainer"

export const VerticalBarChartWidget = forwardRef<
  HTMLDivElement,
  ComposeChartContainerProps<VerticalBarChartProps>
>((props, ref) => (
  <ChartContainer
    ref={ref}
    {...props}
    chart={<VerticalBarChart aspect={null} {...props.chart} />}
  />
))
