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
    link?: { title: string; url: string }
  }
}

export const WidgetContainer = forwardRef<
  HTMLDivElement,
  WidgetContainerProps & { children: ReactNode }
>(({ header, children }, ref) => (
  <Card ref={ref}>
    <CardHeader>
      <div className="flex grow flex-row items-center gap-1.5 truncate">
        <CardTitle>{header.title}</CardTitle>
        {header.subtitle && <CardSubtitle>{header.subtitle}</CardSubtitle>}
        {header.info && <CardInfo content={header.info} />}
      </div>
      {header.link && (
        <CardLink href={header.link.url} title={header.link.title} />
      )}
    </CardHeader>
    <CardContent>{children}</CardContent>
  </Card>
))
