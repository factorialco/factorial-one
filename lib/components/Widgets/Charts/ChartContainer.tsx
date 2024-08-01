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
>(({ chart, ...props }, ref) => (
  <WidgetContainer ref={ref} {...props}>
    {chart}
  </WidgetContainer>
))

export type ComposeChartContainerProps<T extends object> =
  ChartContainerPropsBase & {
    chart: T
  }
