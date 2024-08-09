import { ScrollArea } from "@/components/Utilities/ScrollArea"
import { Blend, withSkeleton } from "@/lib/skeleton"
import { cn } from "@/lib/utils"
import { forwardRef, ReactNode } from "react"
import { WidgetContainer } from "../WidgetContainer"

type DashboardProps = {
  children: ReactNode[]
}

const Container: React.FC<{ children: ReactNode; className?: string }> = ({
  children,
  className,
}) => (
  <div
    className={cn(
      "flex min-h-72 flex-row items-stretch gap-4 [&>*]:min-w-96 [&>*]:max-w-lg [&>*]:flex-grow [&>*]:basis-0",
      className
    )}
  >
    {children}
  </div>
)

const WidgetStripComponent = forwardRef<HTMLDivElement, DashboardProps>(
  ({ children }, ref) => {
    return (
      <ScrollArea ref={ref}>
        <Container>{children}</Container>
      </ScrollArea>
    )
  }
)

export const WidgetStrip = withSkeleton(WidgetStripComponent, () => (
  <Blend orientation="horizontal">
    <Container className="overflow-hidden">
      <WidgetContainer.Skeleton />
      <WidgetContainer.Skeleton />
      <WidgetContainer.Skeleton />
    </Container>
  </Blend>
))
