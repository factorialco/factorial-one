import { CardDescription } from "@/factorial-one"
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
  description?: string
}

export const WidgetContainer = forwardRef<
  HTMLDivElement,
  WidgetContainerProps & { children: ReactNode }
>(({ header, description, children }, ref) => (
  <Card ref={ref} className="min-h-[200px]">
    <CardHeader>
      <div className="flex grow flex-row items-center gap-1.5">
        <CardTitle>{header.title}</CardTitle>
        {header.subtitle && <CardSubtitle>{header.subtitle}</CardSubtitle>}
        {header.info && <CardInfo>{header.info}</CardInfo>}
      </div>
      {header.link && <CardLink href={header.link} />}
    </CardHeader>
    <CardDescription>{description}</CardDescription>
    <CardContent>{children}</CardContent>
  </Card>
))
