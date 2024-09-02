import { Button, ButtonProps } from "@/components/Actions/Button"
import { withSkeleton } from "@/lib/skeleton"
import { cn } from "@/lib/utils"
import {
  Card,
  CardComment,
  CardContent,
  CardFooter,
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
  header?: {
    title?: string
    subtitle?: string
    comment?: string
    info?: string
    link?: { title: string; url: string }
  }
  action?: ButtonProps
  summaries?: Array<{
    label: string
    value: number
    prefixUnit?: string
    postfixUnit?: string
  }>
}

const Container = forwardRef<
  HTMLDivElement,
  WidgetContainerProps & { children: ReactNode }
>(({ header, children, action, summaries }, ref) => (
  <Card ref={ref}>
    {header && (
      <CardHeader>
        <div className="flex flex-1 flex-col truncate">
          <div className="flex flex-row justify-between">
            <div className="flex min-h-6 grow flex-row items-center gap-1.5 truncate">
              {header.title && <CardTitle>{header.title}</CardTitle>}
              {header.subtitle && (
                <CardSubtitle>{header.subtitle}</CardSubtitle>
              )}
              {header.info && <CardInfo content={header.info} />}
            </div>
            {header.link && (
              <CardLink href={header.link.url} title={header.link.title} />
            )}
          </div>
          {header.comment && <CardComment>{header.comment}</CardComment>}
        </div>
      </CardHeader>
    )}
    {summaries && (
      <div className="flex flex-row p-4 pb-1">
        {summaries.map((summary, index) => (
          <div key={index} className="grow">
            <div className="mb-0.5 text-sm text-muted-foreground">
              {summary.label}
            </div>
            <div className="flex flex-row items-end gap-0.5 text-2xl font-semibold">
              <div className="text-lg font-medium">
                {summary.prefixUnit && summary.prefixUnit}
              </div>
              {summary.value}
              <div className="text-lg font-medium">
                {summary.postfixUnit && summary.postfixUnit}
              </div>
            </div>
          </div>
        ))}
      </div>
    )}
    <CardContent>{children}</CardContent>
    {action && (
      <CardFooter>
        <Button variant="secondary" {...action} />
      </CardFooter>
    )}
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
        >
          {header?.title ? (
            <CardTitle>{header.title}</CardTitle>
          ) : (
            <SkeletonPrimitive className="h-4 w-full max-w-16" />
          )}
          {header?.subtitle && <CardSubtitle>{header.subtitle}</CardSubtitle>}
        </div>
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
