import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/ui/chart"
import { ForwardedRef, forwardRef } from "react"
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts"
import { InsightsBase, InsightsContainer } from "../Container"
import { autoColor } from "../utils/colors"

type Key = string

type ChartItem<AreaKeys extends Key> = {
  label: string
  values: Record<AreaKeys, number>
}

type AxisConfig = {
  hide?: boolean
  tickFormatter?: (value: string) => string
}

type AreaConfig<Keys extends Key = string> = Record<Keys, ChartConfig[string]>

type InferAreaKeys<T> = T extends AreaConfig<infer K> ? K : never

export type AreaProps<
  DataConfig extends AreaConfig = AreaConfig,
  AreaKeys extends Key = InferAreaKeys<DataConfig>,
> = InsightsBase & {
  dataConfig: AreaConfig<AreaKeys>
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

export const _AreaInsights = <
  DataConfig extends AreaConfig,
  Keys extends Key = string,
>(
  {
    data,
    dataConfig,
    xAxis,
    yAxis,
    ...containerProps
  }: AreaProps<DataConfig, Keys>,
  ref: ForwardedRef<HTMLDivElement>
) => {
  const areas = Object.keys(dataConfig) as Array<keyof typeof dataConfig>

  return (
    <InsightsContainer {...containerProps} ref={ref}>
      <ChartContainer config={dataConfig}>
        <AreaChart
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
        </AreaChart>
      </ChartContainer>
    </InsightsContainer>
  )
}

export const AreaInsight = fixedForwardRef(_AreaInsights)
