import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/ui/chart"
import { ForwardedRef, forwardRef } from "react"
import {
  Area,
  AreaChart as AreaChartPrimitive,
  CartesianGrid,
  XAxis,
  YAxis,
} from "recharts"
import { autoColor } from "../utils/colors"

type ChartItem<AreaKeys extends string> = {
  label: string
} & {
  [K in AreaKeys]: string | number
}

type AxisConfig = {
  hide?: boolean
  tickFormatter?: (value: string) => string
}

export type AreaChartConfig<Keys extends string = string> = Record<
  Keys,
  ChartConfig[string]
>

export type InferAreaKeys<T> = T extends AreaChartConfig<infer K> ? K : never

export type AreaChartProps<
  DataConfig extends AreaChartConfig = AreaChartConfig,
  AreaKeys extends string = InferAreaKeys<DataConfig>,
> = {
  config: AreaChartConfig<AreaKeys>
  data: ChartItem<AreaKeys>[]
  xAxis?: AxisConfig
  yAxis?: AxisConfig
}

function fixedForwardRef<T, P>(
  render: (props: P, ref: React.Ref<T>) => React.ReactNode
) {
  return forwardRef(render) as (
    props: P & React.RefAttributes<T>
  ) => React.ReactNode
}

export const _AreaChart = <
  DataConfig extends AreaChartConfig,
  Keys extends string = string,
>(
  { data, config: dataConfig, xAxis, yAxis }: AreaChartProps<DataConfig, Keys>,
  ref: ForwardedRef<HTMLDivElement>
) => {
  const areas = Object.keys(dataConfig) as Array<keyof typeof dataConfig>

  return (
    <ChartContainer config={dataConfig} ref={ref}>
      <AreaChartPrimitive
        accessibilityLayer
        data={data}
        margin={{ left: 12, right: 12 }}
      >
        <CartesianGrid vertical={false} />
        {!xAxis?.hide && (
          <XAxis
            dataKey="label"
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
            tickFormatter={yAxis?.tickFormatter}
          />
        )}
        <ChartTooltip
          cursor
          content={<ChartTooltipContent indicator="dot" />}
        />
        {areas.map((area, index) => (
          <Area
            key={area}
            dataKey={area}
            type="natural"
            fill={dataConfig[area].color || autoColor(index)}
            fillOpacity={0.4}
            stroke={dataConfig[area].color || autoColor(index)}
          />
        ))}
      </AreaChartPrimitive>
    </ChartContainer>
  )
}

export const AreaChart = fixedForwardRef(_AreaChart)
