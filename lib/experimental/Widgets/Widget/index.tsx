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

export interface WidgetProps {
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

const InlineDot = () => (
  <div className="min-h-[0.15rem] min-w-[0.15rem] rounded-full bg-f1-foreground-secondary" />
)

const Container = forwardRef<
  HTMLDivElement,
  WidgetProps & { children: ReactNode }
>(function Container({ header, alert, children, action, summaries }, ref) {
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
    <Card className="flex gap-4" ref={ref}>
      {header && (
        <CardHeader>
          <div className="flex flex-1 flex-col gap-4 truncate">
            <div className="flex flex-row items-center justify-between gap-2">
              <div className="flex min-h-6 grow flex-row items-center gap-1.5 truncate">
                {header.title && <CardTitle>{header.title}</CardTitle>}
                {header.subtitle && (
                  <>
                    <InlineDot />
                    <CardSubtitle>{header.subtitle}</CardSubtitle>
                  </>
                )}
                {header.info && <CardInfo content={header.info} />}
              </div>
              {alert && <Badge text={alert} variant="critical" hasDot />}
              {header.link && (
                <CardLink href={header.link.url} title={header.link.title} />
              )}
            </div>
            {header.comment && (
              <div className="flex flex-row items-center gap-3">
                <CardComment className={cn(!!header.isBlur && "blur-md")}>
                  {header.comment}
                </CardComment>
                {!!header.hasBlur && (
                  <span>
                    <Button
                      icon={header.isBlur ? EyeInvisible : EyeVisible}
                      hideLabel
                      label="hide/show"
                      variant="outline"
                      round
                      onClick={header.toggleBlur}
                      size="sm"
                    />
                  </span>
                )}
              </div>
            )}
          </div>
        </CardHeader>
      )}
      <CardContent className="flex flex-col gap-4">
        {summaries && (
          <div className="flex flex-row">
            {summaries.map((summary, index) => (
              <div key={index} className="grow">
                <div className="mb-0.5 text-sm text-f1-foreground-secondary">
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
                {index > 0 && <Separator bare />}
                {child}
              </>
            )
          })}
      </CardContent>
      {action && (
        <CardFooter>
          <Button variant="outline" size="md" {...action} />
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
  function Skeleton({ header, height }, ref) {
    return (
      <Card
        className="flex gap-4"
        ref={ref}
        aria-live="polite"
        aria-busy={true}
      >
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
  }
)

export const Widget = withSkeleton(Container, Skeleton)
