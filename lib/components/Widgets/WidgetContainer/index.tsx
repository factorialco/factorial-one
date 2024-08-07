import {
  Card,
  CardContent,
  CardHeader,
  CardInfo,
  CardLink,
  CardSubtitle,
  CardTitle,
} from "@/ui/card"
import { Skeleton } from "@/ui/skeleton"
import { forwardRef, ReactNode } from "react"

export interface WidgetContainerProps {
  header: {
    title: string
    subtitle?: string
    info?: string
    link?: { title: string; url: string }
  }
  loading?: boolean
}

export const WidgetContainer = forwardRef<
  HTMLDivElement,
  WidgetContainerProps & { children: ReactNode }
>(({ header, loading = false, children }, ref) => (
  <Card ref={ref} aria-live="polite" aria-busy={loading}>
    <CardHeader>
      {loading ? (
        <div className="flex h-6 w-full items-center" aria-hidden={true}>
          <Skeleton className="h-4 w-full max-w-28" />
        </div>
      ) : (
        <>
          <div className="flex min-h-6 grow flex-row items-center gap-1.5 truncate">
            <CardTitle>{header.title}</CardTitle>
            {header.subtitle && <CardSubtitle>{header.subtitle}</CardSubtitle>}
            {header.info && <CardInfo content={header.info} />}
          </div>
          {header.link && (
            <CardLink href={header.link.url} title={header.link.title} />
          )}
        </>
      )}
    </CardHeader>
    <CardContent aria-hidden={loading}>
      {loading ? (
        [...Array(4)].map((_, i) => (
          <Skeleton
            key={i}
            className={`mb-1 h-6 ${["w-full", "w-1/2", "w-3/4", "w-1/4"][i]}`}
          />
        ))
      ) : (
        <>{children}</>
      )}
    </CardContent>
  </Card>
))
