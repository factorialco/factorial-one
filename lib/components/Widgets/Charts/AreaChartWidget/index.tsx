import { AreaChart, AreaChartProps } from "@/components/Charts/AreaChart"
import { forwardRef } from "react"
import { ChartContainer, ComposeChartContainerProps } from "../ChartContainer"

export const AreaChartWidget = forwardRef<
  HTMLDivElement,
  ComposeChartContainerProps<AreaChartProps>
>((props, ref) => (
  <ChartContainer
    ref={ref}
    {...props}
    chart={<AreaChart aspect={null} {...props.chart} />}
  />
))
