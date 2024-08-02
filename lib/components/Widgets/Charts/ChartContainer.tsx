import { forwardRef, ReactNode } from "react"
import { WidgetContainer, WidgetContainerProps } from "../WidgetContainer"

type ChartContainerPropsBase = WidgetContainerProps & {
  summaries?: Array<{ label: string; value: string }>
}

export const ChartContainer = forwardRef<
  HTMLDivElement,
  ChartContainerPropsBase & {
    chart: ReactNode
  }
>(({ chart, summaries, ...props }, ref) => (
  <WidgetContainer ref={ref} {...props}>
    {summaries && (
      <div className="-mt-2 flex flex-row pb-3">
        {summaries.map((summary, index) => (
          <div key={index} className="grow">
            <div className="text-sm text-muted-foreground">{summary.label}</div>
            <div className="text-2xl font-medium">{summary.value}</div>
          </div>
        ))}
      </div>
    )}
    {chart}
  </WidgetContainer>
))

export type ComposeChartContainerProps<T extends object> =
  ChartContainerPropsBase & {
    chart: T
  }
