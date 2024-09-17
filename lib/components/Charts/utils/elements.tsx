import { ComponentProps } from "react"
import { XAxis, YAxis } from "recharts"
import { AxisConfig } from "./types"

export function measureTextWidth(
  text: string,
  font = "Inter, sans-serif"
): number {
  const canvas = document.createElement("canvas")
  const context = canvas.getContext("2d")
  if (context) {
    context.font = font
    console.log(`mesurement of ${text}: `, context.measureText(text).width)
    return context.measureText(text).width
  }
  return 0
}

export const xAxisProps = (
  config?: AxisConfig
): Partial<ComponentProps<typeof XAxis>> => ({
  dataKey: "x",
  tickLine: false,
  axisLine: false,
  tickMargin: 8,
  tickCount: config?.tickCount,
  tickFormatter: config?.tickFormatter,
  width: config?.width,
})

export const yAxisProps = (
  config?: AxisConfig
): Partial<ComponentProps<typeof YAxis>> => ({
  tickLine: false,
  axisLine: false,
  tickMargin: 8,
  tickCount: config?.tickCount,
  tickFormatter: config?.tickFormatter,
  width: config?.width,
})

export const cartesianGridProps = () => ({
  vertical: false,
  strokeDasharray: "4",
})
