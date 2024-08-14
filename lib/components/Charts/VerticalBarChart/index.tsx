import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/ui/chart"
import { cloneDeep } from "lodash"
import { ForwardedRef } from "react"
import {
  Bar,
  BarChart as BarChartPrimitive,
  CartesianGrid,
  LabelList,
  XAxis,
  XAxisProps,
  YAxis,
  YAxisProps,
} from "recharts"
import { prepareData } from "../utils/bar"
import { autoColor } from "../utils/colors"
import {
  xAxisProps as xAxisConfigureProps,
  yAxisProps as yAxisConfigureProps,
} from "../utils/elements"
import { fixedForwardRef } from "../utils/forwardRef"
import { ChartConfig, ChartPropsBase, InferChartKeys } from "../utils/types"

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

export type VerticalBarChartProps<
  DataConfig extends ChartConfig = ChartConfig,
  Keys extends string = InferChartKeys<DataConfig>,
> = ChartPropsBase<DataConfig, Keys> & { label?: boolean }

const _VBarChart = <
  DataConfig extends ChartConfig,
  Keys extends string = string,
>(
  {
    dataConfig,
    data,
    xAxis = { hide: true },
    yAxis,
    label = false,
    aspect,
  }: VerticalBarChartProps<DataConfig, Keys>,
  ref: ForwardedRef<HTMLDivElement>
) => {
  const bars = Object.keys(dataConfig) as Array<keyof typeof dataConfig>
  const munchedData = prepareData(data)

  const xAxisProps: XAxisProps = {
    ...xAxisConfigureProps(xAxis),
    type: "number",
    dataKey: getMaxValueByKey(munchedData),
  }

  const yAxisProps: YAxisProps = {
    ...yAxisConfigureProps(yAxis),
    type: "category",
    dataKey: "x",
  }

  return (
    <ChartContainer config={dataConfig} ref={ref} aspect={aspect}>
      <BarChartPrimitive
        layout="vertical"
        accessibilityLayer
        data={prepareData(data)}
        margin={{ left: 24, right: label ? 32 : 0 }}
      >
        <ChartTooltip cursor content={<ChartTooltipContent />} />
        <CartesianGrid vertical={true} horizontal={false} />
        <XAxis {...xAxisProps} hide={xAxis?.hide} />
        <YAxis {...yAxisProps} hide={yAxis?.hide} />

        {bars.map((key, index) => {
          return (
            <>
              <Bar
                isAnimationActive={false}
                layout="vertical"
                key={`bar-${key}`}
                dataKey={key}
                fill={dataConfig[key].color || autoColor(index)}
                radius={4}
                maxBarSize={24}
              >
                {label && (
                  <LabelList
                    key={`label-{${key}}`}
                    position="right"
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

export const VerticalBarChart = fixedForwardRef(_VBarChart)
