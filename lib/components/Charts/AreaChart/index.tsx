import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/ui/chart"
import { ForwardedRef } from "react"
import {
  Area,
  AreaChart as AreaChartPrimitive,
  CartesianGrid,
  XAxis,
  YAxis,
} from "recharts"
import { autoColor } from "../utils/colors"
import { cartesianGridProps } from "../utils/elements"
import { fixedForwardRef } from "../utils/forwardRef"
import { prepareData } from "../utils/muncher"
import { ChartConfig, ChartPropsBase, InferChartKeys } from "../utils/types"

export type AreaChartProps<
  DataConfig extends ChartConfig = ChartConfig,
  Keys extends string = InferChartKeys<DataConfig>,
> = ChartPropsBase<DataConfig, Keys> & {
  lineType?: "natural" | "linear" | "step"
}

export const _AreaChart = <
  DataConfig extends ChartConfig,
  Keys extends string = string,
>(
  {
    data,
    dataConfig,
    xAxis,
    yAxis,
    lineType = "natural",
    aspect,
  }: AreaChartProps<DataConfig, Keys>,
  ref: ForwardedRef<HTMLDivElement>
) => {
  const areas = Object.keys(dataConfig) as Array<keyof typeof dataConfig>

  return (
    <ChartContainer config={dataConfig} ref={ref} aspect={aspect}>
      <AreaChartPrimitive
        accessibilityLayer
        data={prepareData(data)}
        margin={{ left: 12, right: 12 }}
      >
        <CartesianGrid {...cartesianGridProps()} />
        {!xAxis?.hide && (
          <XAxis
            dataKey="x"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            tickFormatter={xAxis?.tickFormatter}
          />
        )}
        {!yAxis?.hide && (
          <YAxis
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            tickCount={yAxis?.tickCount}
            tickFormatter={yAxis?.tickFormatter}
          />
        )}
        <ChartTooltip
          cursor
          content={<ChartTooltipContent indicator="dot" />}
        />
        <defs>
          {areas.map((area, index) => (
            <linearGradient
              key={index}
              id={`fill${area}`}
              x1="0"
              y1="0"
              x2="0"
              y2="1"
            >
              <stop
                offset="5%"
                stopColor={dataConfig[area].color || autoColor(index)}
                stopOpacity={0.8}
              />
              <stop
                offset="95%"
                stopColor={dataConfig[area].color || autoColor(index)}
                stopOpacity={0.1}
              />
            </linearGradient>
          ))}
        </defs>
        {areas.map((area, index) => (
          <Area
            isAnimationActive={false}
            key={area}
            dataKey={area}
            type={lineType}
            fill={`url(#fill${area})`}
            fillOpacity={0.4}
            stroke={dataConfig[area].color || autoColor(index)}
          />
        ))}
        {areas.length > 1 && (
          <ChartLegend
            className="flex justify-start"
            iconType="star"
            content={<ChartLegendContent />}
          />
        )}
      </AreaChartPrimitive>
    </ChartContainer>
  )
}

export const AreaChart = fixedForwardRef(_AreaChart)
