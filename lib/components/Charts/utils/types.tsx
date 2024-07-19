import { ChartConfig } from "@/ui/chart"

export type ChartConfigType<Keys extends string = string> = Record<
  Keys,
  ChartConfig[string]
>
