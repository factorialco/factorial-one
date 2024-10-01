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
  Text,
  TextProps,
  XAxis,
  XAxisProps,
  YAxis,
} from "recharts"
import { autoColor } from "../utils/colors"
import { cartesianGridProps, measureTextWidth } from "../utils/elements"
import { fixedForwardRef } from "../utils/forwardRef"
import { prepareData } from "../utils/muncher"
import { LineChartPropsBase } from "../utils/types"

type allowedLineTypes = "natural" | "linear" | "step" | "monotoneX"

export type AreaChartProps<K extends LineChartConfig = LineChartConfig> =
  LineChartPropsBase<K> & {
    lineType?: allowedLineTypes
    marginTop?: number
  }

// Rechart props give any
type TickProps = TextProps & {
  tickFormatter: XAxisProps["tickFormatter"]
  index: number
  visibleTicksCount: number
  payload: {
    value: string | number
    index: number
    offset: number
  }
}

const ChartAreaBoundedTick = ({
  index,
  visibleTicksCount,
  payload,
  tickFormatter,
  ...props
}: TickProps) => {
  const isFirst = index === 0
  const isLast = index === visibleTicksCount - 1
  return (
    <Text {...props} textAnchor={isFirst ? "start" : isLast ? "end" : "middle"}>
      {tickFormatter?.(payload.value, payload.index) ?? payload.value}
    </Text>
  )
}

export const _AreaChart = <K extends LineChartConfig>(
  {
    data,
    dataConfig,
    xAxis,
    yAxis,
    lineType = "monotoneX",
    aspect,
    marginTop = 0,
  }: AreaChartProps<K>,
  ref: ForwardedRef<HTMLDivElement>
) => {
  const areas = Object.keys(dataConfig) as (keyof LineChartConfig)[]
  const chartId = nanoid(12)

  const preparedData = prepareData(data)
  const maxLabelWidth = Math.max(
    ...preparedData.flatMap((el) =>
      areas.map((key) =>
        measureTextWidth(
          yAxis?.tickFormatter
            ? yAxis.tickFormatter(`${el[key]}`)
            : `${el[key]}`
        )
      )
    )
  )
  const yAxisWidth = yAxis?.width ?? maxLabelWidth + 20
  const isYAxisVisible = !yAxis?.hide
  const isXAxisVisible = !xAxis?.hide
  return (
    <ChartContainer config={dataConfig} ref={ref} aspect={aspect}>
      <AreaChartPrimitive
        accessibilityLayer
        data={preparedData}
        className="overflow-visible [&_.recharts-surface]:overflow-visible"
        margin={{
          top: marginTop,
        }}
      >
        <defs>
          <linearGradient
            id={`${chartId}-fadeGradient`}
            gradientUnits="userSpaceOnUse"
            x1={`${isYAxisVisible ? yAxisWidth : 0}`}
            y1="0"
            x2="100%"
            y2="0"
          >
            <stop offset="0%" stopColor="black" stopOpacity="0"></stop>
            <stop offset="1%" stopColor="white" stopOpacity="0.1"></stop>
            <stop offset="7%" stopColor="white" stopOpacity="1"></stop>
            <stop offset="93%" stopColor="white" stopOpacity="1"></stop>
            <stop offset="99%" stopColor="white" stopOpacity="0.1"></stop>
            <stop offset="100%" stopColor="black" stopOpacity="0"></stop>
          </linearGradient>
          <mask
            id={`${chartId}-transparent-edges`}
            maskUnits="userSpaceOnUse"
            maskContentUnits="userSpaceOnUse"
          >
            <rect
              x="0"
              y="0"
              width="100%"
              height="100%"
              fill={`url(#${chartId}-fadeGradient)`}
            ></rect>
          </mask>
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
        <CartesianGrid
          {...cartesianGridProps()}
          mask={`url(#${chartId}-transparent-edges)`}
        />
        {isXAxisVisible && (
          <XAxis
            dataKey="x"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            tickFormatter={xAxis?.tickFormatter}
            ticks={xAxis?.ticks}
            domain={xAxis?.domain}
            interval={0}
            tick={ChartAreaBoundedTick}
          />
        )}
        {isYAxisVisible && (
          <YAxis
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            tickCount={yAxis?.tickCount}
            tickFormatter={yAxis?.tickFormatter}
            ticks={yAxis?.ticks}
            domain={yAxis?.domain}
            width={yAxisWidth}
            className={cn(yAxis?.isBlur && "blur-sm")}
          />
        )}
        {!yAxis?.isBlur && (
          <ChartTooltip
            cursor
            content={
              <ChartTooltipContent
                indicator="dot"
                yAxisFormatter={yAxis?.tickFormatter}
              />
            }
          />
        )}
        {areas.map((area, index) => (
          <Area
            isAnimationActive={false}
            key={area}
            dataKey={area}
            type={lineType}
            mask={`url(#${chartId}-transparent-edges)`}
            fill={`url(#fill${area}-${chartId})`}
            fillOpacity={dataConfig[area].dashed ? 0 : 0.4}
            stroke={dataConfig[area].color || autoColor(index)}
            strokeWidth={1.5}
            strokeDasharray={dataConfig[area].dashed ? "4 4" : undefined}
          />
        ))}
        {Object.keys(dataConfig).length > 1 && (
          <ChartLegend
            className="flex justify-start"
            iconType="star"
            content={
              <ChartLegendContent
                leftShift={isYAxisVisible ? Math.round(yAxisWidth) : 0}
              />
            }
          />
        )}
      </AreaChartPrimitive>
    </ChartContainer>
  )
}

export const AreaChart = fixedForwardRef(_AreaChart)
