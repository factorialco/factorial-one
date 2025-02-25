import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  LineChartConfig,
} from "@/core/internal/chart.tsx"
import { ForwardedRef } from "react"
import {
  CartesianGrid,
  Line,
  LineChart as LineChartPrimitive,
  XAxis,
  YAxis,
} from "recharts"
import { autoColor } from "../utils/colors.tsx"
import {
  cartesianGridProps,
  measureTextWidth,
  xAxisProps,
  yAxisProps,
} from "../utils/elements.tsx"
import { fixedForwardRef } from "../utils/forwardRef.ts"
import { prepareData } from "../utils/muncher.ts"
import { LineChartPropsBase } from "../utils/types.ts"

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
  const preparedData = prepareData(data)
  const maxLabelWidth = Math.max(
    ...preparedData.flatMap((el) =>
      lines.map((key) =>
        measureTextWidth(
          yAxis?.tickFormatter
            ? yAxis.tickFormatter(`${el[key]}`)
            : `${el[key]}`
        )
      )
    )
  )

  return (
    <ChartContainer config={dataConfig} ref={ref} aspect={aspect}>
      <LineChartPrimitive
        accessibilityLayer
        data={preparedData}
        margin={{ left: yAxis && !yAxis.hide ? 0 : 12, right: 12 }}
      >
        <CartesianGrid {...cartesianGridProps()} />
        {!xAxis?.hide && <XAxis {...xAxisProps(xAxis)} />}
        {!yAxis?.hide && (
          <YAxis
            {...yAxisProps(yAxis)}
            width={yAxis.width ?? maxLabelWidth + 20}
          />
        )}
        <ChartTooltip
          cursor
          content={
            <ChartTooltipContent yAxisFormatter={yAxis?.tickFormatter} />
          }
        />
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
