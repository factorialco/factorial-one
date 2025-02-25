import { withSkeleton } from "@/lib/skeleton.tsx"
import { forwardRef } from "react"
import { ChartContainer, ChartContainerPropsBase } from "../ChartContainer.tsx"

export const SummariesWidget = withSkeleton(
  forwardRef<HTMLDivElement, ChartContainerPropsBase>(
    function SummariesWidget(props, ref) {
      return <ChartContainer ref={ref} {...props} chart={null} />
    }
  ),
  ChartContainer.Skeleton
)
