import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/ui/chart"
import { ForwardedRef } from "react"
import {
  Bar,
  BarChart as BarChartPrimitive,
  CartesianGrid,
  LabelList,
  XAxis,
  YAxis,
} from "recharts"

import { autoColor } from "../utils/colors"
import {
  cartesianGridProps,
  measureTextWidth,
  xAxisProps,
  yAxisProps,
} from "../utils/elements"
import { fixedForwardRef } from "../utils/forwardRef"
import { prepareData } from "../utils/muncher"
import { ChartPropsBase } from "../utils/types"

export type BarChartProps<K extends ChartConfig = ChartConfig> =
  ChartPropsBase<K> & {
    type?: "simple" | "stacked" | "stacked-by-sign"
    label?: boolean
  }

const _BarChart = <K extends ChartConfig>(
  {
    dataConfig,
    data,
    xAxis,
    yAxis = { hide: true },
    label = false,
    type = "simple",
    aspect,
  }: BarChartProps<K>,
  ref: ForwardedRef<HTMLDivElement>
) => {
  const bars = Object.keys(dataConfig) as (keyof ChartConfig)[]
  const preparedData = prepareData(data)
  const maxLabelWidth = Math.max(
    ...preparedData.flatMap((el) =>
      bars.map((key) =>
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
      <BarChartPrimitive
        accessibilityLayer
        data={preparedData}
        margin={{ left: 12, right: 12, top: label ? 24 : 0 }}
        stackOffset={type === "stacked-by-sign" ? "sign" : undefined}
      >
        <ChartTooltip
          cursor
          content={<ChartTooltipContent yAxisFormatter={yAxis.tickFormatter} />}
        />
        <CartesianGrid {...cartesianGridProps()} />
        <YAxis
          width={maxLabelWidth + 10}
          {...yAxisProps(yAxis)}
          hide={yAxis?.hide}
        />
        <XAxis {...xAxisProps(xAxis)} hide={xAxis?.hide} />

        {bars.map((key, index) => (
          <Bar
            key={`bar-${key}`}
            isAnimationActive={false}
            dataKey={key}
            stackId={
              type === "stacked" || type === "stacked-by-sign"
                ? "stack"
                : undefined
            }
            fill={dataConfig[key].color || autoColor(index)}
            radius={type === "stacked-by-sign" ? [4, 4, 0, 0] : 4}
            maxBarSize={32}
          >
            {label && (
              <LabelList
                key={`label-${key}`}
                position="top"
                offset={10}
                className="fill-f1-foreground"
                fontSize={12}
              />
            )}
          </Bar>
        ))}
      </BarChartPrimitive>
    </ChartContainer>
  )
}

export const BarChart = fixedForwardRef(_BarChart)
