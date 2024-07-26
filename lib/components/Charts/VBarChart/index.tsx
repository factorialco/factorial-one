import { cloneDeep } from "lodash"
import { ForwardedRef } from "react"
import { XAxis, XAxisProps, YAxis, YAxisProps } from "recharts"
import {
  BarChart as BarCharPrimitive,
  BaseBarChartProps,
} from "../BaseBarChart"
import { prepareData } from "../utils/bar"
import { xAxisProps, yAxisProps } from "../utils/elements"
import { fixedForwardRef } from "../utils/forwardRef"
import { ChartConfig, InferChartKeys } from "../utils/types"

const getMaxValueByKey = (
  data: ({ x: unknown } & Record<string, number>)[]
): string => {
  const clonedData = cloneDeep(data)

  let label: string = ""
  let max: number = 0

  clonedData.forEach((datapoint) => {
    delete datapoint.x

    Object.entries(datapoint as Record<string, number>).forEach(
      ([newLabel, value]) => {
        if (max < value) {
          max = value
          label = newLabel
        }
      }
    )
  })

  return label
}

export type VBarChartProps<
  DataConfig extends ChartConfig = ChartConfig,
  Keys extends string = InferChartKeys<DataConfig>,
> = BaseBarChartProps<DataConfig, Keys>

const _VBarChart = <
  DataConfig extends ChartConfig,
  Keys extends string = string,
>(
  config: VBarChartProps<DataConfig, Keys>,
  ref: ForwardedRef<HTMLDivElement>
) => {
  const munchedData = prepareData(config.data)

  const xAxis: XAxisProps = {
    ...xAxisProps(config.xAxis),
    type: "number",
    dataKey: getMaxValueByKey(munchedData),
  }

  const yAxis: YAxisProps = {
    ...yAxisProps(config.yAxis),
    type: "category",
    dataKey: "x",
  }

  return (
    <BarCharPrimitive
      layout="vertical"
      xAxisComponent={<XAxis {...xAxis} hide={config.xAxis?.hide} />}
      yAxisComponent={<YAxis {...yAxis} hide={config.yAxis?.hide} />}
      ref={ref}
      {...config}
    />
  )
}

export const VBarChart = fixedForwardRef(_VBarChart)
