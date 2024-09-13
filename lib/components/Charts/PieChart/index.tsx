import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/ui/chart"
import { ComponentProps, ForwardedRef } from "react"
import { Label, Pie, PieChart as PieChartPrimitive } from "recharts"
import { autoColor } from "../utils/colors"
import { fixedForwardRef } from "../utils/forwardRef"
import { ChartConfig } from "../utils/types"

export type PieChartItem = {
  label: string
  value: number
  color?: string
}

export type PieChartProps = {
  dataConfig: ChartConfig
  data: PieChartItem[]
  overview?: { number: number; label: string }
  aspect?: ComponentProps<typeof ChartContainer>["aspect"]
}

export const _PieChart = (
  { data, dataConfig, overview, aspect }: PieChartProps,
  ref: ForwardedRef<HTMLDivElement>
) => {
  const preparedData = data.map((item, index) => ({
    ...item,
    fill:
      dataConfig[item.label as keyof typeof dataConfig]?.color ||
      autoColor(index),
  }))

  return (
    <ChartContainer config={dataConfig} ref={ref} aspect={aspect}>
      <PieChartPrimitive accessibilityLayer margin={{ left: 0, right: 0 }}>
        <ChartTooltip cursor content={<ChartTooltipContent />} />
        <Pie
          isAnimationActive={false}
          nameKey={"label"}
          legendType="circle"
          dataKey={"value"}
          data={preparedData}
          innerRadius={overview ? 50 : 40}
          paddingAngle={2.5}
        >
          <Label
            content={({ viewBox }) => {
              if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                return (
                  <text
                    x={viewBox.cx}
                    y={viewBox.cy}
                    textAnchor="middle"
                    dominantBaseline="middle"
                  >
                    <tspan
                      x={viewBox.cx}
                      y={(viewBox.cy || 0) + 8}
                      className="fill-f1-foreground-neutral text-2xl font-semibold"
                    >
                      {overview?.number}
                    </tspan>
                    <tspan
                      x={viewBox.cx}
                      y={(viewBox.cy || 0) - 16}
                      className="fill-f1-foreground-neutral-secondary"
                    >
                      {overview?.label}
                    </tspan>
                  </text>
                )
              }
            }}
          />
        </Pie>
        <ChartLegend
          content={<ChartLegendContent />}
          align="right"
          verticalAlign="middle"
          layout="vertical"
          className="flex-col items-start gap-1 pr-3 pt-0"
        />
      </PieChartPrimitive>
    </ChartContainer>
  )
}

export const PieChart = fixedForwardRef(_PieChart)
