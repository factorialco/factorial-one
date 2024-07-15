import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/ui/chart"
import { forwardRef } from "react"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"
import { InsightsBase, InsightsContainer } from "../Container"

type AreaType = InsightsBase & {
  chartData: Array<unknown>
  config: ChartConfig
}

export const AreaInsight = forwardRef<HTMLDivElement, AreaType>(
  ({ chartData, config, ...containerProps }, ref) => {
    return (
      <InsightsContainer {...containerProps} ref={ref}>
        <ChartContainer config={config}>
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dot" />}
            />
            <Area
              dataKey="mobile"
              type="natural"
              fill="var(--color-mobile)"
              fillOpacity={0.4}
              stroke="var(--color-mobile)"
              stackId="a"
            />
            <Area
              dataKey="desktop"
              type="natural"
              fill="var(--color-desktop)"
              fillOpacity={0.4}
              stroke="var(--color-desktop)"
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
      </InsightsContainer>
    )
  }
)
