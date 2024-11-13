import { ScrollArea } from "@/experimental/Utilities/ScrollArea"
import { Blend, withSkeleton } from "@/lib/skeleton"
import { forwardRef, ReactNode } from "react"
import { Widget } from "../../Widget"

type DashboardProps = {
  children: ReactNode[]
}

const Container: React.FC<{ children: ReactNode }> = ({ children }) => (
  <div className="widget-strip flex min-h-40 flex-row items-stretch gap-4 text-f1-foreground">
    {children}
  </div>
)

export const WidgetStrip = withSkeleton(
  forwardRef<HTMLDivElement, DashboardProps>(function WidgetStrip(
    { children },
    ref
  ) {
    return (
      <ScrollArea ref={ref} showBar={false}>
        <Container>{children}</Container>
      </ScrollArea>
    )
  }),
  () => (
    <Blend orientation="horizontal">
      <Container>
        <Widget.Skeleton />
        <Widget.Skeleton />
        <Widget.Skeleton />
      </Container>
    </Blend>
  )
)
