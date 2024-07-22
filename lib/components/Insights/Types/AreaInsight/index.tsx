import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/ui/chart"

import { ForwardedRef, forwardRef } from "react"
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts"
import { InsightsContainer, InsightsContainerProps } from "../../Container"
import { autoColor } from "../utils/colors"

type Key = string

type ChartItem<AreaKeys extends Key> = {
  label: string
  values: Record<AreaKeys, number>
}

type AxisConfig = {
  hide?: boolean
  tickFormatter?: (value: string) => string
  tickCount?: number
}

type AreaConfig<Keys extends Key = string> = Record<Keys, ChartConfig[string]>

type InferAreaKeys<T> = T extends AreaConfig<infer K> ? K : never

export type AreaProps<
  DataConfig extends AreaConfig = AreaConfig,
  AreaKeys extends Key = InferAreaKeys<DataConfig>,
> = InsightsContainerProps & {
  dataConfig: AreaConfig<AreaKeys>
  data: ChartItem<AreaKeys>[]
  xAxis?: AxisConfig
  yAxis?: AxisConfig
  showLegend?: boolean
}

function fixedForwardRef<T, P>(
  render: (props: P, ref: React.Ref<T>) => React.ReactNode
) {
  return forwardRef(render) as (
    props: P & React.RefAttributes<T>
  ) => React.ReactNode
}

export const _AreaInsight = <
  DataConfig extends AreaConfig,
  Keys extends Key = string,
>(
  {
    data,
    dataConfig,
    xAxis,
    yAxis,
    showLegend,
    ...containerProps
  }: AreaProps<DataConfig, Keys>,
  ref: ForwardedRef<HTMLDivElement>
) => {
  const areas = Object.keys(dataConfig) as Array<keyof typeof dataConfig>

  return (
    <InsightsContainer {...containerProps}>
      <ChartContainer config={dataConfig} ref={ref}>
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
              tickCount={yAxis?.tickCount}
              tickFormatter={yAxis?.tickFormatter}
            />
          )}
          <ChartTooltip
            cursor
            content={<ChartTooltipContent indicator="line" />}
          />
          <defs>
            {areas.map((area, index) => (
              <linearGradient id={`fill${area}`} x1="0" y1="0" x2="0" y2="1">
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
              key={area}
              dataKey={area}
              type="natural"
              fill={`url(#fill${area})`}
              fillOpacity={0.4}
              dot={true}
              stroke={dataConfig[area].color || autoColor(index)}
            />
          ))}
          {showLegend && (
            <ChartLegend
              className="flex justify-start"
              iconType="star"
              content={<ChartLegendContent />}
            />
          )}
        </AreaChart>
      </ChartContainer>
    </InsightsContainer>
  )
}

export const AreaInsight = fixedForwardRef(_AreaInsight)
