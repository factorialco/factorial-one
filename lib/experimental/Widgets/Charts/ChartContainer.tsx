import { forwardRef, ReactNode } from "react"
import { Widget, WidgetProps } from "../Widget"

export type ChartContainerPropsBase = WidgetProps

const _ChartContainer = forwardRef<
  HTMLDivElement,
  ChartContainerPropsBase & {
    chart?: ReactNode
  }
>(({ chart, summaries, ...props }, ref) => {
  return (
    <Widget ref={ref} {...props} summaries={summaries}>
      {chart && <div className="min-h-52 grow pt-2">{chart}</div>}
    </Widget>
  )
})

_ChartContainer.displayName = "ChartContainer"

export type ComposeChartContainerProps<T extends object> =
  ChartContainerPropsBase & {
    chart: T
  }

export const ChartContainer = Object.assign(_ChartContainer, {
  Skeleton: Widget.Skeleton,
})
