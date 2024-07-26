import { ForwardedRef } from "react"
import { CartesianGrid, XAxis, YAxis } from "recharts"
import {
  BarChart as BarCharPrimitive,
  BaseBarChartProps,
} from "../BaseBarChart"
import { xAxisProps, yAxisProps } from "../utils/elements"
import { fixedForwardRef } from "../utils/forwardRef"
import { ChartConfig, InferChartKeys } from "../utils/types"

export type BarChartProps<
  DataConfig extends ChartConfig = ChartConfig,
  Keys extends string = InferChartKeys<DataConfig>,
> = BaseBarChartProps<DataConfig, Keys>

const _BarChart = <
  DataConfig extends ChartConfig,
  Keys extends string = string,
>(
  config: BarChartProps<DataConfig, Keys>,
  ref: ForwardedRef<HTMLDivElement>
) => {
  return (
    <BarCharPrimitive
      gridComponent={<CartesianGrid vertical={false} />}
      xAxisComponent={
        !config.xAxis?.hide ? (
          <XAxis {...xAxisProps(config.xAxis)} />
        ) : undefined
      }
      yAxisComponent={
        !config.yAxis?.hide ? (
          <YAxis {...yAxisProps(config.yAxis)} />
        ) : undefined
      }
      ref={ref}
      {...config}
    />
  )
}

export const BarChart = fixedForwardRef(_BarChart)
