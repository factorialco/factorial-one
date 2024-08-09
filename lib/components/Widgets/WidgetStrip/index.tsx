import { ScrollArea } from "@/components/Utilities/ScrollArea"
import { forwardRef, ReactNode } from "react"

type DashboardProps = {
  children: ReactNode[]
}

export const WidgetStrip = forwardRef<HTMLDivElement, DashboardProps>(
  ({ children }, ref) => {
    return (
      <ScrollArea ref={ref}>
        <div className="flex flex-row items-stretch gap-4 [&>*]:min-w-80 [&>*]:max-w-md [&>*]:flex-grow [&>*]:basis-0">
          {children}
        </div>
      </ScrollArea>
    )
  }
)
