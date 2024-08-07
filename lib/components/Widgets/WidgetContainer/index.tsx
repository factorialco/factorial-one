import {
  Card,
  CardContent,
  CardHeader,
  CardInfo,
  CardLink,
  CardSubtitle,
  CardTitle,
} from "@/ui/card"
import { forwardRef, ReactNode } from "react"

export interface WidgetContainerProps {
  header: {
    title: string
    subtitle?: string
    info?: string
    link?: string
  }
}

export const WidgetContainer = forwardRef<
  HTMLDivElement,
  WidgetContainerProps & { children: ReactNode }
>(({ header, children }, ref) => (
  <Card ref={ref} className="min-h-[200px]">
    <CardHeader>
      <div className="flex grow flex-row items-center gap-1.5">
        <CardTitle>{header.title}</CardTitle>
        {header.subtitle && <CardSubtitle>{header.subtitle}</CardSubtitle>}
        {header.info && <CardInfo>{header.info}</CardInfo>}
      </div>
      {header.link && <CardLink href={header.link} />}
    </CardHeader>
    <CardContent>{children}</CardContent>
  </Card>
))
