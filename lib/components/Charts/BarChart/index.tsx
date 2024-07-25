import { ChartContainer } from "@/ui/chart"
import { cloneDeep } from "lodash"
import { ForwardedRef } from "react"
import {
  Bar,
  CartesianGrid,
  ComposedChart,
  LabelList,
  Line,
  XAxis,
  YAxis,
} from "recharts"
import { prepareData } from "../utils/bar"
import { xAxisProps, yAxisProps } from "../utils/elements"
import { fixedForwardRef } from "../utils/forwardRef"
import {
  ChartConfig,
  ChartPropsBase,
  InferChartKeys,
  typeAxisType,
} from "../utils/types"

type Layout = "vertical" | "horizontal"

type BarChartConfigProps = {
  label: boolean
  lines?: boolean
  layout: Layout
}

type axisLayout = { type: typeAxisType; dataKey: string } | undefined

export type BarChartProps<
  DataConfig extends ChartConfig = ChartConfig,
  Keys extends string = InferChartKeys<DataConfig>,
> = ChartPropsBase<DataConfig, Keys> & BarChartConfigProps

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

export const _Bar = <
  DataConfig extends ChartConfig,
  Keys extends string = string,
>(
  {
    dataConfig,
    xAxis,
    yAxis,
    label,
    data,
    layout,
    lines,
  }: BarChartProps<DataConfig, Keys>,
  ref: ForwardedRef<HTMLDivElement>
) => {
  const bars = Object.keys(dataConfig) as Array<keyof typeof dataConfig>
  const munchedData = prepareData(data)
  const isVertical = layout == "vertical"

  // NOTE: When the chart is vertical, we need to set the data key
  // with the maximum value in order not to cut the bars.
  const internalXAxis: axisLayout = isVertical
    ? { type: "number", dataKey: getMaxValueByKey(munchedData) }
    : undefined

  // NOTE: When the chart is vertical, the Y axis uses the label rather than the
  // numeric values.
  const internalYAxis: axisLayout = isVertical
    ? { type: "category", dataKey: "x" }
    : undefined

  return (
    <ChartContainer config={dataConfig} ref={ref}>
      <ComposedChart
        layout={layout}
        accessibilityLayer
        data={munchedData}
        margin={{ left: 12, right: 12 }}
      >
        {!isVertical && <CartesianGrid vertical={false} />}

        <XAxis
          {...xAxisProps({
            ...xAxis,
            ...internalXAxis,
          })}
          hide={xAxis?.hide}
        />

        <YAxis
          {...yAxisProps({
            ...yAxis,
            ...internalYAxis,
          })}
          hide={yAxis?.hide}
        />

        {bars.map((l, lt) => {
          return (
            <>
              <Bar
                layout={layout}
                key={`line-${lt}`}
                dataKey={l}
                fill={dataConfig[l].color}
                radius={4}
              >
                {label && (
                  <LabelList
                    position={isVertical ? "right" : "top"}
                    offset={10}
                    className="fill-foreground"
                    fontSize={12}
                  />
                )}
              </Bar>
            </>
          )
        })}

        {lines &&
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
          })}
      </ComposedChart>
    </ChartContainer>
  )
}

export const BarChart = fixedForwardRef(_Bar)
