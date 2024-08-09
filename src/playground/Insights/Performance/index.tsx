import { ComponentProps, forwardRef } from "react"
import { AreaChartWidget } from "../../../../lib/factorial-one"

export interface PerformanceInsightType {
  title: string
  subtitle: string
}

export const PerformanceInsight = forwardRef<
  HTMLDivElement,
  PerformanceInsightType
>(({ title, subtitle }, ref) => {
  const chart: ComponentProps<typeof AreaChartWidget>["chart"] = {
    data: [
      { label: "Q1 24", values: { performance: 1.2 } },
      { label: "Q2 24", values: { performance: 1.5 } },
      { label: "Q3 24", values: { performance: 2.7 } },
      { label: "Q4 24", values: { performance: 3.1 } },
      { label: "Q1 25", values: { performance: 3.9 } },
      { label: "Q2 25", values: { performance: 4.3 } },
      { label: "Q3 25", values: { performance: 4.5 } },
    ],
    xAxis: {},
    yAxis: {},
    dataConfig: {
      performance: {
        label: "Performance review results",
        color: "hsl(var(--chart-1))",
      },
      none: {
        label: "none",
      },
    },
  }

  return (
    <div className="max-w-96">
      <AreaChartWidget
        header={{
          title,
          subtitle,
          info: "info prop",
          link: { title: "url title", url: "/url" },
        }}
        chart={chart}
      />
    </div>
  )
})
