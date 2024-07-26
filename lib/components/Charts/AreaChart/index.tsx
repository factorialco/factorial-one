import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/ui/chart"
import { ForwardedRef } from "react"
import {
  Area,
  AreaChart as AreaChartPrimitive,
  CartesianGrid,
  XAxis,
  YAxis,
} from "recharts"
import { autoColor } from "../utils/colors"
import { cartesianGridProps, xAxisProps, yAxisProps } from "../utils/elements"
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
    lineType,
  }: AreaChartProps<DataConfig, Keys>,
  ref: ForwardedRef<HTMLDivElement>
) => {
  const areas = Object.keys(dataConfig) as Array<keyof typeof dataConfig>

  return (
    <ChartContainer config={dataConfig} ref={ref}>
      <AreaChartPrimitive
        accessibilityLayer
        data={prepareData(data)}
        margin={{ left: 12, right: 12 }}
      >
        <CartesianGrid {...cartesianGridProps()} />
        {!xAxis?.hide && <XAxis {...xAxisProps(xAxis)} />}
        {!yAxis?.hide && <YAxis {...yAxisProps(yAxis)} />}
        <ChartTooltip
          cursor
          content={<ChartTooltipContent indicator="dot" />}
        />
        {areas.map((area, index) => (
          <Area
            key={area}
            dataKey={area}
            type={lineType}
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
