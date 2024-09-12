import { cn } from "@/lib/utils"
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
  LineChartConfig,
} from "@/ui/chart"
import { nanoid } from "nanoid"
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
import { LineChartPropsBase } from "../utils/types"

type allowedLineTypes = "natural" | "linear" | "step" | "monotoneX"

export type AreaChartProps<K extends LineChartConfig = LineChartConfig> =
  LineChartPropsBase<K> & {
    lineType?: allowedLineTypes
    fullWidth?: boolean
    marginTop?: number
  }

export const _AreaChart = <K extends LineChartConfig>(
  {
    data,
    dataConfig,
    xAxis,
    yAxis,
    lineType = "monotoneX",
    aspect,
    fullWidth = false,
    marginTop = 0,
  }: AreaChartProps<K>,
  ref: ForwardedRef<HTMLDivElement>
) => {
  const areas = Object.keys(dataConfig) as (keyof LineChartConfig)[]
  const chartId = nanoid(12)

  return (
    <ChartContainer config={dataConfig} ref={ref} aspect={aspect}>
      <AreaChartPrimitive
        accessibilityLayer
        data={prepareData(data)}
        margin={{ left: fullWidth ? -38 : 12, right: 12, top: marginTop }}
      >
        <CartesianGrid {...cartesianGridProps()} />
        {!xAxis?.hide && (
          <XAxis
            dataKey="x"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            tickFormatter={xAxis?.tickFormatter}
            ticks={xAxis?.ticks}
            domain={xAxis?.domain}
            interval={0}
          />
        )}
        {!yAxis?.hide && (
          <YAxis
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            tickCount={yAxis?.tickCount}
            tickFormatter={yAxis?.tickFormatter}
            ticks={yAxis?.ticks}
            domain={yAxis?.domain}
            className={cn(yAxis?.isBlur && "blur-sm")}
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
              id={`fill${String(area)}-${chartId}`}
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
            fill={`url(#fill${area}-${chartId})`}
            fillOpacity={dataConfig[area].dashed ? 0 : 0.4}
            stroke={dataConfig[area].color || autoColor(index)}
            strokeWidth={1.5}
            strokeDasharray={dataConfig[area].dashed ? "4 4" : undefined}
          />
        ))}
        {Object.keys(dataConfig).length > 1 && (
          <ChartLegend
            className={cn("flex justify-start", fullWidth && "ml-10")}
            iconType="star"
            content={<ChartLegendContent />}
          />
        )}
      </AreaChartPrimitive>
    </ChartContainer>
  )
}

export const AreaChart = fixedForwardRef(_AreaChart)
