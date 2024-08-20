import { withSkeleton } from "@/lib/skeleton"
import { cn } from "@/lib/utils"
import {
  Card,
  CardComment,
  CardContent,
  CardHeader,
  CardInfo,
  CardLink,
  CardSubtitle,
  CardTitle,
} from "@/ui/card"
import { Skeleton as SkeletonPrimitive } from "@/ui/skeleton"
import { cva, VariantProps } from "class-variance-authority"
import { forwardRef, ReactNode } from "react"

export interface WidgetContainerProps {
  header: {
    title: string
    subtitle?: string
    comment?: string
    info?: string
    link?: { title: string; url: string }
  }
}

const Container = forwardRef<
  HTMLDivElement,
  WidgetContainerProps & { children: ReactNode }
>(({ header, children }, ref) => (
  <Card ref={ref}>
    <CardHeader>
      <div className="flex flex-1 flex-col">
        <div className="flex flex-row justify-between">
          <div className="flex min-h-6 grow flex-row items-center gap-1.5 truncate">
            <CardTitle>{header.title}</CardTitle>
            {header.subtitle && <CardSubtitle>{header.subtitle}</CardSubtitle>}
            {header.info && <CardInfo content={header.info} />}
          </div>
          {header.link && (
            <CardLink href={header.link.url} title={header.link.title} />
          )}
        </div>
        {header.comment && <CardComment>{header.comment}</CardComment>}
      </div>
    </CardHeader>
    <CardContent>{children}</CardContent>
  </Card>
))

const skeletonVariants = cva("", {
  variants: {
    height: {
      sm: "h-36",
      md: "h-48",
      lg: "h-60",
    },
  },
})

export type WidgetSkeletonProps = {
  header?: {
    title?: string
    subtitle?: string
  }
} & VariantProps<typeof skeletonVariants>

const Skeleton = forwardRef<HTMLDivElement, WidgetSkeletonProps>(
  ({ header, height }, ref) => (
    <Card ref={ref} aria-live="polite" aria-busy={true}>
      <CardHeader>
        <div
          className="flex h-6 w-full flex-row items-center gap-1.5"
          aria-hidden={true}
        ></div>
      </CardHeader>
      <CardContent
        aria-hidden={true}
        className={cn(skeletonVariants({ height }))}
      >
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

export const WidgetContainer = withSkeleton(Container, Skeleton)
