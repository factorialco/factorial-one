import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/ui/chart"
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
import { ChartConfig, ChartPropsBase, InferChartKeys } from "../utils/types"

export type LineChartProps<
  DataConfig extends ChartConfig = ChartConfig,
  Keys extends string = InferChartKeys<DataConfig>,
> = ChartPropsBase<DataConfig, Keys> & {
  lineType?: "natural" | "linear"
}

export const _LineChart = <
  DataConfig extends ChartConfig,
  Keys extends string = string,
>(
  {
    data,
    dataConfig,
    xAxis,
    yAxis = { hide: true },
    lineType = "natural",
    aspect,
  }: LineChartProps<DataConfig, Keys>,
  ref: ForwardedRef<HTMLDivElement>
) => {
  const lines = Object.keys(dataConfig) as Array<keyof typeof dataConfig>

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
            dot={false}
          />
        ))}
      </LineChartPrimitive>
    </ChartContainer>
  )
}

export const LineChart = fixedForwardRef(_LineChart)
