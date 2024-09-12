import { forwardRef, ReactNode } from "react"
import { WidgetContainer, WidgetContainerProps } from "../WidgetContainer"

export type ChartContainerPropsBase = WidgetContainerProps

const Container = forwardRef<
  HTMLDivElement,
  ChartContainerPropsBase & {
    isShow?: boolean
    toggleBlur?: () => void
    chart?: ReactNode
  }
>(({ chart, summaries, isShow, toggleBlur, ...props }, ref) => (
  <WidgetContainer
    ref={ref}
    isShow={isShow}
    toggleBlur={toggleBlur}
    {...props}
    summaries={summaries}
  >
    {chart && (
      <div className="relative flex h-52 grow items-stretch pt-6">{chart}</div>
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
