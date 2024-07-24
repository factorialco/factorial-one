import { ChartContainer } from "@/ui/chart"
import { ForwardedRef } from "react"
import { fixedForwardRef } from "../utils/forwardRef"
import { ChartConfig, ChartPropsBase, InferChartKeys } from "../utils/types"

import { Bar, CartesianGrid, ComposedChart, Line, XAxis, YAxis } from "recharts"
import { prepareData } from "../utils/bar"
import { xAxisProps, yAxisProps } from "../utils/elements"

export type BarChartProps<
  DataConfig extends ChartConfig = ChartConfig,
  Keys extends string = InferChartKeys<DataConfig>,
> = ChartPropsBase<DataConfig, Keys> & { lines?: boolean }

export const _Bar = <
  DataConfig extends ChartConfig,
  Keys extends string = string,
>(
  { dataConfig, xAxis, yAxis, data, lines }: BarChartProps<DataConfig, Keys>,
  ref: ForwardedRef<HTMLDivElement>
) => {
  const bars = Object.keys(dataConfig) as Array<keyof typeof dataConfig>

  return (
    <ChartContainer config={dataConfig} ref={ref}>
      <ComposedChart
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
              />
            </>
          )
        })}

        {lines ? (
          bars.map((l, lt) => {
            return (
              <>
                <Line
                  key={lt}
                  type="monotone"
                  dataKey={l}
                  fill={dataConfig[l].color}
                  stroke={dataConfig[l].color}
                />
              </>
            )
          })
        ) : (
          <></>
        )}
      </ComposedChart>
    </ChartContainer>
  )
}

export const BarChart = fixedForwardRef(_Bar)
