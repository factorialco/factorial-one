import { ChartItem } from "@/components/Charts/utils/types"
import { AreaChartWidget } from "@/components/Widgets/Charts/AreaChartWidget"
import { ChartConfig } from "@/ui/chart"
import { ComponentProps, forwardRef } from "react"
import { EmptyState } from "../EmptyState"

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
>(({ title, name, data, performanceValue, comment, link, hasAccess }, ref) => {
  if (!hasAccess) {
    return (
      <EmptyState
        title={title}
        content={`See how ${name}'s performance evolved over time`}
        link={link}
        variant="performance"
        buttons={[
          { label: "Try it for free", variant: "neutral" },
          { label: "Book a demo", variant: "outline" },
        ]}
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
    fullWidth: true,
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
