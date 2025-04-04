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
  cartesianGridProps,
  measureTextWidth,
  xAxisProps as xAxisConfigureProps,
  yAxisProps as yAxisConfigureProps,
} from "../utils/elements"
import { fixedForwardRef } from "../utils/forwardRef"
import { ChartConfig, ChartPropsBase } from "../utils/types"

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

export type VerticalBarChartProps<K extends ChartConfig = ChartConfig> =
  ChartPropsBase<K> & {
    label?: boolean
  }

const _VBarChart = <K extends ChartConfig>(
  {
    dataConfig,
    data,
    xAxis = { hide: true },
    yAxis,
    label = false,
    aspect,
    hideTooltip = false,
    hideGrid = false,
  }: VerticalBarChartProps<K>,
  ref: ForwardedRef<HTMLDivElement>
) => {
  const bars = Object.keys(dataConfig) as (keyof ChartConfig)[]
  const preparedData = prepareData<K>(data)
  const maxLabelWidth = Math.max(
    ...preparedData.map((el) => measureTextWidth(`${el.x}`))
  )

  const xAxisProps: XAxisProps = {
    ...xAxisConfigureProps(xAxis),
    type: "number",
    dataKey: getMaxValueByKey(preparedData),
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
        data={preparedData}
        margin={{ left: yAxis && !yAxis.hide ? 0 : 12, right: label ? 32 : 0 }}
      >
        {!hideTooltip && (
          <ChartTooltip
            cursor
            content={
              <ChartTooltipContent yAxisFormatter={yAxis?.tickFormatter} />
            }
          />
        )}
        {!hideGrid && (
          <CartesianGrid
            {...cartesianGridProps()}
            vertical={true}
            horizontal={false}
          />
        )}
        <XAxis {...xAxisProps} hide={xAxis?.hide} />
        <YAxis
          {...yAxisProps}
          hide={yAxis?.hide}
          width={yAxis?.width ?? maxLabelWidth + 20}
        />

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
                    className="fill-f1-foreground"
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
