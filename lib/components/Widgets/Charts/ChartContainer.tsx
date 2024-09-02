import { forwardRef, ReactNode } from "react"
import { WidgetContainer, WidgetContainerProps } from "../WidgetContainer"

export type ChartContainerPropsBase = WidgetContainerProps & {
  chart?: ReactNode
}

const Container = forwardRef<HTMLDivElement, ChartContainerPropsBase>(
  ({ chart, summaries, ...props }, ref) => (
    <WidgetContainer ref={ref} {...props} summaries={summaries}>
      {chart && (
        <div className="relative flex min-h-40 grow items-stretch pt-6">
          {chart}
        </div>
      )}
    </WidgetContainer>
  )
)

export type ComposeChartContainerProps<T extends object> =
  ChartContainerPropsBase & {
    chart: T
  }

export const ChartContainer = Object.assign(Container, {
  Skeleton: WidgetContainer.Skeleton,
})
