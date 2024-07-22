import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/ui/card"
import { forwardRef, ReactNode } from "react"

export interface InsightsContainerProps {
  header: {
    title: string
    description: string
  }
  footer?: {
    trend: string
    time: string
  }
}

export const InsightsContainer = forwardRef<
  HTMLDivElement,
  InsightsContainerProps & { children: ReactNode }
>(({ header, footer, children }, ref) => (
  <Card ref={ref}>
    <CardHeader>
      <CardDescription>{header.description}</CardDescription>
      <CardTitle className="font-light">{header.title}</CardTitle>
    </CardHeader>
    <CardContent>{children}</CardContent>
    {footer && (
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 font-medium leading-none">
              {footer.trend}
            </div>
            <div className="flex items-center gap-2 leading-none text-muted-foreground">
              {footer.time}
            </div>
          </div>
        </div>
      </CardFooter>
    )}
  </Card>
))
