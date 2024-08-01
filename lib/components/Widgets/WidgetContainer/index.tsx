import {
  Card,
  CardContent,
  CardHeader,
  CardInfo,
  CardSubtitle,
  CardTitle,
} from "@/ui/card"
import { forwardRef, ReactNode } from "react"

export interface WidgetContainerProps {
  header: {
    title: string
    subtitle?: string
    info?: string
  }
}

export const WidgetContainer = forwardRef<
  HTMLDivElement,
  WidgetContainerProps & { children: ReactNode }
>(({ header, children }, ref) => (
  <Card ref={ref} className="min-h-[200px]">
    <CardHeader>
      <CardTitle>{header.title}</CardTitle>
      <CardSubtitle>{header.subtitle}</CardSubtitle>
      <CardInfo>{header.info}</CardInfo>
    </CardHeader>
    <CardContent>{children}</CardContent>
  </Card>
))
