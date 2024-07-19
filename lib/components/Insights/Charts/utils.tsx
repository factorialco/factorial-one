import React, { ComponentProps, FC, RefAttributes, RefObject } from "react"
import { InsightsContainer, InsightsContainerProps } from "../InsightsContainer"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type ChartComponent = FC<any>

export type ContainerWrapType<
  NestedComponent extends ChartComponent,
  ChartKey extends string,
> = React.FC<
  RefAttributes<HTMLElement> &
    Omit<InsightsContainerProps, "children"> & {
      [key in ChartKey]: ComponentProps<NestedComponent>
    }
>

export function wrapChart<
  NestedComponent extends ChartComponent,
  NestedKey extends string,
>(
  Component: NestedComponent,
  nestedKey: NestedKey = "chart" as NestedKey
): ContainerWrapType<NestedComponent, NestedKey> {
  return ({ [nestedKey]: chart, ref, ...containerProps }) => (
    <InsightsContainer
      ref={ref as RefObject<HTMLDivElement>}
      {...(containerProps as InsightsContainerProps)}
    >
      <Component {...chart} />
    </InsightsContainer>
  )
}
