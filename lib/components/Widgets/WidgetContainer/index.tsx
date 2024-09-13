import { Button, ButtonProps } from "@/components/Actions/Button"
import { Badge } from "@/components/Information/Badge"
import { EyeInvisible, EyeVisible } from "@/icons"
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
import { Separator } from "@/ui/separator"
import { Skeleton as SkeletonPrimitive } from "@/ui/skeleton"
import { cva, VariantProps } from "class-variance-authority"
import React, { forwardRef, ReactNode } from "react"

export interface WidgetContainerProps {
  header?: {
    title?: string
    subtitle?: string
    comment?: string
    hasBlur?: boolean
    isBlur?: boolean
    toggleBlur?: () => void
    info?: string
    link?: { title: string; url: string }
  }
  action?: ButtonProps
  alert?: string
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
>(({ header, alert, children, action, summaries }, ref) => {
  const isRealNode = (node: React.ReactNode): boolean => {
    return (
      !!node &&
      !(
        React.isValidElement(node) &&
        node.type === React.Fragment &&
        React.Children.count(node.props.children) === 0
      )
    )
  }

  return (
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
            {header.comment && (
              <div className="mt-2 flex flex-row items-center gap-3">
                <CardComment className={cn(!!header.isBlur && "blur-md")}>
                  {header.comment}
                </CardComment>
                {!!header.hasBlur && (
                  <span>
                    <Button
                      icon={header.isBlur ? EyeInvisible : EyeVisible}
                      hideLabel
                      label="hide/show"
                      variant="secondary"
                      round
                      onClick={header.toggleBlur}
                    />
                  </span>
                )}
              </div>
            )}
          </div>
        </CardHeader>
      )}
      <CardContent className="flex flex-col gap-1">
        {summaries && (
          <div className="-mt-2 flex flex-row">
            {summaries.map((summary, index) => (
              <div key={index} className="grow">
                <div className="mb-0.5 text-sm text-muted-foreground">
                  {summary.label}
                </div>
                <div className="flex flex-row items-end gap-0.5 text-xl font-semibold">
                  {!!summary.prefixUnit && (
                    <div className="text-lg font-medium">
                      {summary.prefixUnit}
                    </div>
                  )}
                  {summary.value}
                  {!!summary.postfixUnit && (
                    <div className="text-lg font-medium">
                      {summary.postfixUnit}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
        {React.Children.toArray(children)
          .filter(isRealNode)
          .map((child, index) => {
            return (
              <>
                {index > 0 && <Separator />}
                {child}
              </>
            )
          })}
      </CardContent>
      {(action || alert) && (
        <CardFooter>
          {alert && <Badge text={alert} variant="destructive" hasDot />}
          {action && <Button variant="secondary" {...action} />}
        </CardFooter>
      )}
    </Card>
  )
})

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
