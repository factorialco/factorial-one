import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/ui/chart"
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
import { xAxisProps, yAxisProps } from "../utils/elements"
import { fixedForwardRef } from "../utils/forwardRef"
import { prepareData } from "../utils/muncher"
import { ChartConfig, ChartPropsBase, InferChartKeys } from "../utils/types"

export type BarChartProps<
  DataConfig extends ChartConfig = ChartConfig,
  Keys extends string = InferChartKeys<DataConfig>,
> = ChartPropsBase<DataConfig, Keys> & { label?: boolean }

const _BarChart = <
  DataConfig extends ChartConfig,
  Keys extends string = string,
>(
  {
    dataConfig,
    data,
    xAxis,
    yAxis = { hide: true },
    label = false,
    aspect,
  }: BarChartProps<DataConfig, Keys>,
  ref: ForwardedRef<HTMLDivElement>
) => {
  const bars = Object.keys(dataConfig) as Array<keyof typeof dataConfig>

  return (
    <ChartContainer config={dataConfig} ref={ref} aspect={aspect}>
      <BarChartPrimitive
        accessibilityLayer
        data={prepareData(data)}
        margin={{ left: 12, right: 12, top: label ? 24 : 0 }}
      >
        <ChartTooltip cursor content={<ChartTooltipContent />} />
        <CartesianGrid vertical={false} />
        <YAxis {...yAxisProps(yAxis)} hide={yAxis?.hide} />
        <XAxis {...xAxisProps(xAxis)} hide={xAxis?.hide} />

        {bars.map((key, index) => (
          <Bar
            key={`bar-${key}`}
            isAnimationActive={false}
            dataKey={key}
            fill={dataConfig[key].color || autoColor(index)}
            radius={4}
            maxBarSize={32}
          >
            {label && (
              <LabelList
                key={`label-{${key}}`}
                position="top"
                offset={10}
                className="fill-foreground"
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
