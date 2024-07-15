import { AutoGrid } from "@/main"
import { forwardRef, ReactNode } from "react"

type InsightsDashboardProps = {
  header?: {
    title: string
    description?: string
  }
  children?: ReactNode
}

export const InsightsDashboard = forwardRef<
  HTMLDivElement,
  InsightsDashboardProps
>(({ header, children }, ref) => (
  <div>
    {header && (
      <div className="flex flex-col gap-1 pb-6 leading-normal">
        <h2 className="text-xl font-semibold">{header.title}</h2>
        {header.description && (
          <div className="max-w-screen-md text-muted-foreground">
            {header.description}
          </div>
        )}
      </div>
    )}
    <AutoGrid ref={ref}>{children}</AutoGrid>)
  </div>
))
