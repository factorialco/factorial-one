import { ScrollArea } from "@/components/Utilities/ScrollArea"
import { withSkeleton } from "@/lib/skeleton"
import { forwardRef, ReactNode } from "react"
import { WidgetContainer } from "../WidgetContainer"

type DashboardProps = {
  children: ReactNode[]
}

const WidgetStripComponent = forwardRef<HTMLDivElement, DashboardProps>(
  ({ children }, ref) => {
    return (
      <ScrollArea ref={ref}>
        <div className="flex min-h-72 flex-row items-stretch gap-4 [&>*]:min-w-96 [&>*]:max-w-lg [&>*]:flex-grow [&>*]:basis-0">
          {children}
        </div>
      </ScrollArea>
    )
  }
)

export const WidgetStrip = withSkeleton(WidgetStripComponent, () => (
  <WidgetStripComponent>
    <WidgetContainer.Skeleton />
    <WidgetContainer.Skeleton />
    <WidgetContainer.Skeleton />
  </WidgetStripComponent>
))
