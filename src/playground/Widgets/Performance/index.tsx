import { ChartItem } from "@/components/Charts/utils/types"
import { AreaChartWidget } from "@/experimental/Widgets/Charts/AreaChartWidget"
import { WidgetEmptyState } from "@/experimental/Widgets/WidgetEmptyState"
import { AreaGraph } from "@/icons/app"
import { ChartConfig } from "@/ui/chart"
import { ComponentProps, forwardRef } from "react"

export interface PerformanceInsightType {
  title: string
  name: string
  performanceValue?: string
  comment?: string
  data?: ChartItem<ChartConfig>[]
  link: string
  hasAccess: boolean
}

export const PerformanceInsight = forwardRef<
  HTMLDivElement,
  PerformanceInsightType
>(function PerformanceInsight(
  { title, name, data, performanceValue, comment, link, hasAccess },
  ref
) {
  if (!hasAccess) {
    return (
      <WidgetEmptyState
        title={title}
        content={`See how ${name}'s performance evolved over time`}
        icon={AreaGraph}
        buttonLabel="Try it for free"
        promote
      />
    )
  }

  const chart: ComponentProps<typeof AreaChartWidget>["chart"] = {
    data: data ?? [],
    lineType: "linear",
    xAxis: {},
    yAxis: {
      ticks: [1, 3, 5],
      domain: [1, 5],
    },
    dataConfig: {
      performance: {
        label: "Performance review results",
        color: "hsl(var(--chart-1))",
      },
    },
    marginTop: 12,
  }

  return (
    <AreaChartWidget
      ref={ref}
      header={{
        title,
        comment: `${performanceValue} - ${comment}`,
        link: { title: "Go", url: link },
      }}
      chart={chart}
    />
  )
})
