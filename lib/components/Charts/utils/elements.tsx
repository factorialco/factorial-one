import { ComponentProps } from "react"
import { XAxis, YAxis } from "recharts"
import { AxisConfig } from "./types"

export const xAxisProps = (
  config?: AxisConfig
): Partial<ComponentProps<typeof XAxis>> => ({
  dataKey: "x",
  tickLine: false,
  axisLine: false,
  tickMargin: 8,
  tickCount: config?.tickCount,
  tickFormatter: config?.tickFormatter,
})

export const yAxisProps = (
  config?: AxisConfig
): Partial<ComponentProps<typeof YAxis>> => ({
  tickLine: false,
  axisLine: false,
  tickMargin: 8,
  tickCount: config?.tickCount,
  tickFormatter: config?.tickFormatter,
})

export const cartesianGridProps = () => ({
  vertical: false,
})
