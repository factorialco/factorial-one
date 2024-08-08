import { forwardRef, ReactNode } from "react"
import { WidgetContainer, WidgetContainerProps } from "../WidgetContainer"

type ChartContainerPropsBase = WidgetContainerProps & {
  summaries?: Array<{ label: string; value: string; unit?: string }>
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
            <div className="mb-0.5 text-sm text-muted-foreground">
              {summary.label}
            </div>
            <div className="flex flex-row items-end gap-0.5">
              <div className="text-2xl font-medium leading-none">
                {summary.value}
              </div>
              {summary.unit && (
                <div className="text-sm leading-tight">{summary.unit}</div>
              )}
            </div>
          </div>
        ))}
      </div>
    )}
    <div className="relative flex min-h-40 grow items-stretch">{chart}</div>
  </WidgetContainer>
))

export type ComposeChartContainerProps<T extends object> =
  ChartContainerPropsBase & {
    chart: T
  }
