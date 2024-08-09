import type {
  ChartContainer,
  ChartConfig as OriginalChartConfig,
} from "@/ui/chart"
import { ComponentProps } from "react"

export type ChartItem<LineKeys extends string> = {
  label: string
  values: Record<LineKeys, number>
}

export type AxisConfig = {
  hide?: boolean
  tickFormatter?: (value: string) => string
  tickCount?: number
}

export type ChartConfig<Keys extends string = string> = Record<
  Keys,
  OriginalChartConfig[string]
>

export type InferChartKeys<T> = T extends ChartConfig<infer K> ? K : never

export type ChartPropsBase<
  DataConfig extends ChartConfig = ChartConfig,
  Keys extends string = InferChartKeys<DataConfig>,
> = {
  dataConfig: ChartConfig<Keys>
  data: ChartItem<Keys>[]
  xAxis?: AxisConfig
  yAxis?: AxisConfig
  aspect?: ComponentProps<typeof ChartContainer>["aspect"]
}
