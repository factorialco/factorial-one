import { ComponentProps } from "react"
import { XAxis, YAxis } from "recharts"
import { AxisConfig } from "./types"

export const xAxisProps = (
  config?: AxisConfig
): Partial<ComponentProps<typeof XAxis>> => ({
  dataKey: config?.dataKey || "x",
  type: config?.type,
  tickLine: false,
  axisLine: false,
  tickMargin: 8,
  tickFormatter: config?.tickFormatter,
})

export const yAxisProps = (
  config?: AxisConfig
): Partial<ComponentProps<typeof YAxis>> => ({
  dataKey: config?.dataKey,
  type: config?.type,
  tickLine: false,
  axisLine: false,
  tickMargin: 8,
  tickFormatter: config?.tickFormatter,
})

export const cartesianGridProps = () => ({
  vertical: false,
})
