import {
  AreaChart,
  AreaChartConfig,
  AreaChartProps,
  InferAreaKeys,
} from "@/components/Charts/AreaChart"
import { ForwardedRef, forwardRef } from "react"
import { InsightsContainer, InsightsContainerProps } from "../../Container"

export type AreaInsightProps<
  DataConfig extends AreaChartConfig = AreaChartConfig,
  AreaKeys extends string = InferAreaKeys<DataConfig>,
> = InsightsContainerProps & {
  chart: AreaChartProps<DataConfig, AreaKeys>
}

function fixedForwardRef<T, P>(
  render: (props: P, ref: React.Ref<T>) => React.ReactNode
) {
  return forwardRef(render) as (
    props: P & React.RefAttributes<T>
  ) => React.ReactNode
}

export const _AreaInsight = <
  DataConfig extends AreaChartConfig,
  Keys extends string = string,
>(
  { chart, ...containerProps }: AreaInsightProps<DataConfig, Keys>,
  ref: ForwardedRef<HTMLDivElement>
) => {
  return (
    <InsightsContainer {...containerProps} ref={ref}>
      <AreaChart {...chart} />
    </InsightsContainer>
  )
}

export const AreaInsight = fixedForwardRef(_AreaInsight)
