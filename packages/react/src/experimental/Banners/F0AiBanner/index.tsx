import { withSkeleton } from "@/lib/skeleton"
import { forwardRef } from "react"
import { AiBannerInternal, AiBannerSkeleton } from "./AiBannerInternal"
import { AiBannerInternalProps } from "./types"

export type F0AiBannerProps = AiBannerInternalProps

const F0AiBannerBase = forwardRef<HTMLDivElement, F0AiBannerProps>(
  (props, ref) => {
    return <AiBannerInternal ref={ref} {...props} />
  }
)

const F0AiBannerSkeleton = () => {
  return <AiBannerSkeleton />
}

F0AiBannerBase.displayName = "F0AiBanner"

export const F0AiBanner = withSkeleton(F0AiBannerBase, F0AiBannerSkeleton)
