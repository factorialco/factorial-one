import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  LineChartConfig,
} from "@/ui/chart"
import { ForwardedRef } from "react"
import {
  CartesianGrid,
  Line,
  LineChart as LineChartPrimitive,
  XAxis,
  YAxis,
} from "recharts"
import { autoColor } from "../utils/colors"
import { cartesianGridProps, xAxisProps, yAxisProps } from "../utils/elements"
import { fixedForwardRef } from "../utils/forwardRef"
import { prepareData } from "../utils/muncher"
import { LineChartPropsBase } from "../utils/types"

export type LineChartProps<K extends LineChartConfig = LineChartConfig> =
  LineChartPropsBase<K> & {
    lineType?: "natural" | "linear"
  }

export const _LineChart = <K extends LineChartConfig>(
  {
    data,
    dataConfig,
    xAxis,
    yAxis = { hide: true },
    lineType = "natural",
    aspect,
  }: LineChartProps<K>,
  ref: ForwardedRef<HTMLDivElement>
) => {
  const lines = Object.keys(dataConfig) as (keyof LineChartConfig)[]

  return (
    <ChartContainer config={dataConfig} ref={ref} aspect={aspect}>
      <LineChartPrimitive
        accessibilityLayer
        data={prepareData(data)}
        margin={{ left: 12, right: 12 }}
      >
        <CartesianGrid {...cartesianGridProps()} />
        {!xAxis?.hide && <XAxis {...xAxisProps(xAxis)} />}
        {!yAxis?.hide && <YAxis {...yAxisProps(yAxis)} />}
        <ChartTooltip cursor content={<ChartTooltipContent />} />
        {lines.map((line, index) => (
          <Line
            key={line}
            dataKey={line}
            isAnimationActive={false}
            type={lineType}
            stroke={dataConfig[line].color || autoColor(index)}
            strokeWidth={1.5}
            strokeDasharray={dataConfig[line].dashed ? "4 4" : undefined}
            dot={false}
          />
        ))}
      </LineChartPrimitive>
    </ChartContainer>
  )
}

export const LineChart = fixedForwardRef(_LineChart)
