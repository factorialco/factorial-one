import { ChartContainer } from "@/ui/chart"
import { ForwardedRef } from "react"
import { fixedForwardRef } from "../utils/forwardRef"
import { ChartConfig, ChartPropsBase, InferChartKeys } from "../utils/types"

import {
  Bar,
  BarChart as BarChartPrimitive,
  CartesianGrid,
  LabelList,
  XAxis,
  YAxis,
} from "recharts"
import { xAxisProps, yAxisProps } from "../utils/elements"
import { prepareData } from "../utils/muncher"

type BarChartConfigProps = {
  label: boolean
}

export type BarChartProps<
  DataConfig extends ChartConfig = ChartConfig,
  Keys extends string = InferChartKeys<DataConfig>,
> = ChartPropsBase<DataConfig, Keys> & BarChartConfigProps

export const _Bar = <
  DataConfig extends ChartConfig,
  Keys extends string = string,
>(
  { dataConfig, xAxis, yAxis, data, label }: BarChartProps<DataConfig, Keys>,
  ref: ForwardedRef<HTMLDivElement>
) => {
  const bars = Object.keys(dataConfig) as Array<keyof typeof dataConfig>

  return (
    <ChartContainer config={dataConfig} ref={ref}>
      <BarChartPrimitive
        accessibilityLayer
        data={prepareData(data)}
        margin={{ left: 12, right: 12 }}
      >
        <CartesianGrid vertical={false} />
        {!xAxis?.hide && <XAxis {...xAxisProps(xAxis)} />}
        {!yAxis?.hide && <YAxis {...yAxisProps(xAxis)} />}

        {bars.map((l, lt) => {
          return (
            <>
              <Bar
                key={`line-${lt}`}
                dataKey={l}
                fill={dataConfig[l].color}
                radius={4}
              >
                {label && (
                  <LabelList
                    position="top"
                    offset={10}
                    className="fill-foreground"
                    fontSize={12}
                  />
                )}
              </Bar>
            </>
          )
        })}
      </BarChartPrimitive>
    </ChartContainer>
  )
}

export const BarChart = fixedForwardRef(_Bar)
