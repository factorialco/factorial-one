import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/ui/chart"
import { ForwardedRef } from "react"
import { Pie, PieChart as PieChartPrimitive } from "recharts"
import { autoColor } from "../utils/colors"
import { fixedForwardRef } from "../utils/forwardRef"
import { ChartConfig, InferChartKeys } from "../utils/types"

export type PieChartItem = {
  label: string
  value: number
  color?: string
}

export type PieChartProps<
  DataConfig extends ChartConfig = ChartConfig,
  Keys extends string = InferChartKeys<DataConfig>,
> = {
  dataConfig: ChartConfig<Keys>
  data: PieChartItem[]
  donutPieChart?: boolean
}

export const _PieChart = <DataConfig extends ChartConfig>(
  { data, dataConfig, donutPieChart }: PieChartProps<DataConfig>,
  ref: ForwardedRef<HTMLDivElement>
) => {
  const preparedData = data.map((item, index) => ({
    ...item,
    fill:
      dataConfig[item.label as keyof typeof dataConfig]?.color ||
      autoColor(index),
  }))

  return (
    <ChartContainer config={dataConfig} ref={ref}>
      <PieChartPrimitive accessibilityLayer margin={{ left: 12, right: 12 }}>
        <ChartTooltip cursor content={<ChartTooltipContent hideLabel />} />
        <Pie
          nameKey={"label"}
          dataKey={"value"}
          data={preparedData}
          innerRadius={donutPieChart ? 60 : 0}
        />
      </PieChartPrimitive>
    </ChartContainer>
  )
}

export const PieChart = fixedForwardRef(_PieChart)
