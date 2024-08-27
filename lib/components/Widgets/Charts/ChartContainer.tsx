import { forwardRef, ReactNode } from "react"
import { WidgetContainer, WidgetContainerProps } from "../WidgetContainer"

export type ChartContainerPropsBase = WidgetContainerProps & {
  summaries?: Array<{ label: string; value: number; unit?: string }>
}

const Container = forwardRef<
  HTMLDivElement,
  ChartContainerPropsBase & {
    chart?: ReactNode
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
            <div className="flex flex-row items-end gap-0.5 text-2xl font-semibold">
              {summary.unit}
              {summary.value}
            </div>
          </div>
        ))}
      </div>
    )}
    {chart && (
      <div className="relative flex grow items-stretch pt-6">{chart}</div>
    )}
  </WidgetContainer>
))

export type ComposeChartContainerProps<T extends object> =
  ChartContainerPropsBase & {
    chart: T
  }

export const ChartContainer = Object.assign(Container, {
  Skeleton: WidgetContainer.Skeleton,
})
