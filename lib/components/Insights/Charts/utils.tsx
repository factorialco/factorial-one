import { ComponentProps, FC, RefAttributes, RefObject } from "react"
import { InsightsContainer, InsightsContainerProps } from "../InsightsContainer"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type WrapChartType<Component extends FC<RefAttributes<HTMLElement>>> =
  React.FC<
    RefAttributes<HTMLElement> &
      Omit<InsightsContainerProps, "children"> & {
        chart: ComponentProps<Component>
      }
  >

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function wrapChart<Component extends FC<any>>(
  Component: Component
): WrapChartType<Component> {
  return ({ chart, ref, ...containerProps }) => (
    <InsightsContainer
      ref={ref as RefObject<HTMLDivElement>}
      {...containerProps}
    >
      <Component {...chart} />
    </InsightsContainer>
  )
}
