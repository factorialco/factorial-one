import { forwardRef, ReactNode } from "react"
import { WidgetContainer, WidgetContainerProps } from "../WidgetContainer"

export type ChartContainerProps<T extends object | undefined = undefined> =
  T extends undefined
    ? WidgetContainerProps
    : WidgetContainerProps & {
        chart: T
      }

export const ChartContainer = forwardRef<
  HTMLDivElement,
  ChartContainerProps & {
    chart: ReactNode
  }
>(({ chart, ...props }, ref) => (
  <WidgetContainer ref={ref} {...props}>
    {chart}
  </WidgetContainer>
))
