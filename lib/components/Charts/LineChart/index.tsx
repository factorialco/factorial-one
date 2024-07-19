import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/ui/chart"
import { ForwardedRef, forwardRef } from "react"
import {
  CartesianGrid,
  Line,
  LineChart as LineChartPrimitive,
  XAxis,
} from "recharts"
import { autoColor } from "../utils/colors"
import { ChartConfigType } from "../utils/types"

type ChartItem<LineKeys extends string> = {
  label: string
  values: Record<LineKeys, number>
}

type AxisConfig = {
  hide?: boolean
  tickFormatter?: (value: string) => string
}

export type InferLineKeys<T> = T extends ChartConfigType<infer K> ? K : never

export type LineChartProps<
  DataConfig extends ChartConfigType = ChartConfigType,
  LineKeys extends string = InferLineKeys<DataConfig>,
> = {
  dataConfig: ChartConfigType<LineKeys>
  data: ChartItem<LineKeys>[]
  xAxis?: AxisConfig
  lineType?: "natural" | "linear" | "step"
}

function fixedForwardRef<T, P>(
  render: (props: P, ref: React.Ref<T>) => React.ReactNode
) {
  return forwardRef(render) as (
    props: P & React.RefAttributes<T>
  ) => React.ReactNode
}

export const _LineChart = <
  DataConfig extends ChartConfigType,
  Keys extends string = string,
>(
  {
    data,
    dataConfig,
    xAxis,
    lineType = "natural",
  }: LineChartProps<DataConfig, Keys>,
  ref: ForwardedRef<HTMLDivElement>
) => {
  const lines = Object.keys(dataConfig) as Array<keyof typeof dataConfig>

  return (
    <ChartContainer config={dataConfig} ref={ref}>
      <LineChartPrimitive
        accessibilityLayer
        data={data.map((item) => ({ x: item.label, ...item.values }))}
        margin={{ left: 12, right: 12 }}
      >
        <CartesianGrid vertical={false} />
        {!xAxis?.hide && (
          <XAxis
            dataKey="x"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            tickFormatter={xAxis?.tickFormatter}
          />
        )}
        <ChartTooltip cursor content={<ChartTooltipContent hideLabel />} />
        {lines.map((line, index) => (
          <Line
            key={line}
            dataKey={line}
            type={lineType}
            stroke={dataConfig[line].color || autoColor(index)}
            strokeWidth={2}
            dot={false}
          />
        ))}
      </LineChartPrimitive>
    </ChartContainer>
  )
}

export const LineChart = fixedForwardRef(_LineChart)
