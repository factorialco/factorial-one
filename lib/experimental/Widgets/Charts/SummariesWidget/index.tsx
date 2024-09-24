import { withSkeleton } from "@/lib/skeleton"
import { forwardRef } from "react"
import { ChartContainer, ChartContainerPropsBase } from "../ChartContainer"

export const SummariesWidget = withSkeleton(
  forwardRef<HTMLDivElement, ChartContainerPropsBase>((props, ref) => (
    <ChartContainer ref={ref} {...props} chart={null} />
  )),
  ChartContainer.Skeleton
)
