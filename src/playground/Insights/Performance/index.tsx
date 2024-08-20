import Performance from "@/icons/Performance"
import { ComponentProps, forwardRef } from "react"
import { Button } from "../../../../lib/components/Actions/Button"
import { ChartItem } from "../../../../lib/components/Charts/utils/types"
import { Icon } from "../../../../lib/components/Utilities/Icon"
import { AreaChartWidget } from "../../../../lib/components/Widgets/Charts/AreaChartWidget"
import { CardLink } from "../../../../lib/ui/card"

export interface PerformanceInsightType {
  title: string
  name: string
  performanceValue: string
  comment: string
  url: string
  data: ChartItem<string>[]
  link: string
}

export interface EmptyStatePerformanceType {
  name: string
  link: string
}

export const EmptyStatePerformance = forwardRef<
  HTMLDivElement,
  EmptyStatePerformanceType
>(({ name, link }, ref) => {
  return (
    <div
      className="bg-widget-background relative flex h-48 max-w-96 flex-col justify-between rounded-xl pb-6 pl-5 pr-5 pt-4"
      ref={ref}
    >
      <div className="flex flex-row justify-between">
        <p className="text-lg font-semibold">Performance</p>
        <CardLink href={link} />
      </div>
      <p className="flex text-xl font-semibold">
        See how {name}'s performance evolved over time
      </p>
      <div className="flex flex-row gap-3">
        <Button label="Try it for free" variant={"destructive"} round={false} />
        <Button label="Book a demo" variant={"outline"} />
      </div>
      <div className="absolute bottom-0 right-0 z-0 text-orange-300">
        <Icon icon={Performance} size="xl" />
      </div>
    </div>
  )
})

export const PerformanceInsight = forwardRef<
  HTMLDivElement,
  PerformanceInsightType
>(({ title, url, name, data, performanceValue, comment, link }, ref) => {
  if (!data?.length) {
    return <EmptyStatePerformance name={name} link={link} />
  }

  const chart: ComponentProps<typeof AreaChartWidget>["chart"] = {
    data,
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
      none: {
        label: "",
        color: "transparent",
      },
    },
  }

  return (
    <div className="max-w-96" ref={ref}>
      <AreaChartWidget
        header={{
          title,
          comment: `${performanceValue} - ${comment}`,
          link: { title: "Go", url },
        }}
        chart={chart}
      />
    </div>
  )
})
