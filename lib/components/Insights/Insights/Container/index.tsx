import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/ui/card"
import { TrendingUp } from "lucide-react"
import { forwardRef, ReactNode } from "react"

export interface InsightsBase {
  header: {
    title: string
    description: string
  }
  footer: {
    trend: string
    time: string
  }
}

export const InsightsContainer = forwardRef<
  HTMLDivElement,
  InsightsBase & { children: ReactNode }
>(({ header, footer, children }, ref) => (
  <Card ref={ref}>
    <CardHeader>
      <CardTitle>{header.title}</CardTitle>
      <CardDescription>{header.description}</CardDescription>
    </CardHeader>
    <CardContent>{children}</CardContent>
    <CardFooter>
      <div className="flex w-full items-start gap-2 text-sm">
        <div className="grid gap-2">
          <div className="flex items-center gap-2 font-medium leading-none">
            {footer.trend} <TrendingUp className="h-4 w-4" />
          </div>
          <div className="flex items-center gap-2 leading-none text-muted-foreground">
            {footer.time}
          </div>
        </div>
      </div>
    </CardFooter>
  </Card>
))
