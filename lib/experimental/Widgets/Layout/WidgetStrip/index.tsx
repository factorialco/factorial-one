import { ScrollArea } from "@/components/Utilities/ScrollArea"
import { Blend, withSkeleton } from "@/lib/skeleton"
import { cn } from "@/lib/utils"
import { forwardRef, ReactNode } from "react"
import { Widget } from "../../Widget"

type DashboardProps = {
  children: ReactNode[]
}

const Container: React.FC<{ children: ReactNode }> = ({ children }) => (
  <div
    className={cn(
      "flex min-h-40 flex-row items-stretch gap-4 text-f1-foreground [&>*]:min-w-96 [&>*]:max-w-lg [&>*]:flex-grow [&>*]:basis-0"
    )}
  >
    {children}
  </div>
)

export const WidgetStrip = withSkeleton(
  forwardRef<HTMLDivElement, DashboardProps>(function WidgetStrip(
    { children },
    ref
  ) {
    return (
      <ScrollArea ref={ref}>
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
