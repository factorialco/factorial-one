import { ScrollArea } from "@/components/Utilities/ScrollArea"
import { forwardRef, ReactNode } from "react"

type DashboardProps = {
  children: ReactNode[]
}

export const WidgetRow = forwardRef<HTMLDivElement, DashboardProps>(
  ({ children }, ref) => {
    return (
      <ScrollArea ref={ref}>
        <div className="flex flex-row items-stretch gap-8 [&>*]:min-w-96 [&>*]:max-w-md [&>*]:flex-grow">
          {children}
        </div>
      </ScrollArea>
    )
  }
)
