import { ChartContainer } from "@/ui/chart"
import { ForwardedRef } from "react"
import { ChartConfig, ChartPropsBase, InferChartKeys } from "../utils/types"

import React from "react"
import { Bar, ComposedChart, LabelList } from "recharts"
import { prepareData } from "../utils/bar"
import { fixedForwardRef } from "../utils/forwardRef"

type BaseBarChartConfigProps = {
  layout?: "vertical" | "horizontal"
  xAxisComponent?: React.ReactElement
  yAxisComponent?: React.ReactElement
  gridComponent?: React.ReactElement
}

export type BaseBarChartProps<
  DataConfig extends ChartConfig = ChartConfig,
  Keys extends string = InferChartKeys<DataConfig>,
> = ChartPropsBase<DataConfig, Keys> & { label: boolean }

export const _BaseBarChart = <
  DataConfig extends ChartConfig,
  Keys extends string = string,
>(
  config: BaseBarChartProps<DataConfig, Keys> & BaseBarChartConfigProps,
  ref: ForwardedRef<HTMLDivElement>
) => {
  const {
    dataConfig,
    data,
    label,
    xAxisComponent,
    yAxisComponent,
    layout,
    gridComponent,
  } = config
  const bars = Object.keys(dataConfig) as Array<keyof typeof dataConfig>

  return (
    <ChartContainer config={dataConfig} ref={ref}>
      <ComposedChart
        layout={layout}
        accessibilityLayer
        data={prepareData(data)}
        margin={{ left: 12, right: 12 }}
      >
        {gridComponent}
        {xAxisComponent}
        {yAxisComponent}

        {bars.map((l, lt) => {
          return (
            <>
              <Bar
                layout={layout}
                key={`line-${lt}-lt`}
                dataKey={l}
                fill={dataConfig[l].color}
                radius={4}
              >
                {label && (
                  <LabelList
                    key={`label-{${lt}}`}
                    position={layout == "vertical" ? "right" : "top"}
                    offset={10}
                    className="fill-foreground"
                    fontSize={12}
                  />
                )}
              </Bar>
            </>
          )
        })}
      </ComposedChart>
    </ChartContainer>
  )
}

_BaseBarChart.defaultProps = {
  layout: "horizontal",
}

export const BarChart = fixedForwardRef(_BaseBarChart)
