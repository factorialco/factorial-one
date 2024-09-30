import { withSkeleton } from "@/lib/skeleton"
import { forwardRef } from "react"
import { ChartContainer, ChartContainerPropsBase } from "../ChartContainer"

const _SummariesWidget = forwardRef<HTMLDivElement, ChartContainerPropsBase>(
  (props, ref) => <ChartContainer ref={ref} {...props} chart={null} />
)

_SummariesWidget.displayName = "SummariesWidget"

export const SummariesWidget = withSkeleton(
  _SummariesWidget,
  ChartContainer.Skeleton
)
