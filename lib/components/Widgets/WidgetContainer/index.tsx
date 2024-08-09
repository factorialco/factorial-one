import {
  Card,
  CardContent,
  CardHeader,
  CardInfo,
  CardLink,
  CardSubtitle,
  CardTitle,
} from "@/ui/card"
import { Skeleton as SkeletonPrimitive } from "@/ui/skeleton"
import { forwardRef, ReactNode } from "react"

export interface WidgetContainerProps {
  header: {
    title: string
    subtitle?: string
    info?: string
    link?: { title: string; url: string }
  }
}

export interface WidgetSkeletonProps {
  header: {
    title?: string
    subtitle?: string
  }
}

const Container = forwardRef<
  HTMLDivElement,
  WidgetContainerProps & { children: ReactNode }
>(({ header, children }, ref) => (
  <Card ref={ref}>
    <CardHeader>
      <div className="flex min-h-6 grow flex-row items-center gap-1.5 truncate">
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

const Skeleton = forwardRef<HTMLDivElement, WidgetSkeletonProps>(
  ({ header }, ref) => (
    <Card ref={ref} aria-live="polite" aria-busy={true}>
      <CardHeader>
        <div
          className="flex h-6 w-full flex-row items-center gap-1.5"
          aria-hidden={true}
        >
          {header?.title ? (
            <CardTitle>{header.title}</CardTitle>
          ) : (
            <SkeletonPrimitive className="h-4 w-full max-w-16" />
          )}
          {header?.subtitle && <CardSubtitle>{header.subtitle}</CardSubtitle>}
        </div>
      </CardHeader>
      <CardContent aria-hidden={true}>
        {[...Array(4)].map((_, i) => (
          <SkeletonPrimitive
            key={i}
            className={`mb-1 h-6 ${["w-full", "w-1/2", "w-3/4", "w-1/4"][i]}`}
          />
        ))}
      </CardContent>
    </Card>
  )
)

export const WidgetContainer = Object.assign(Container, {
  Skeleton: Skeleton,
})
