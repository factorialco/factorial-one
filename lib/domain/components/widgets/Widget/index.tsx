import { Button, ButtonProps } from "@/core/components/actions/Button"
import { Counter } from "@/core/components/experimental/information/Counter"
import { AlertTag } from "@/core/components/experimental/information/tags/AlertTag"
import {
  StatusTag,
  StatusVariant,
} from "@/core/components/experimental/information/tags/StatusTag"
import { PrivateBox } from "@/core/components/experimental/utilities/PrivateBox"
import {
  Card,
  CardComment,
  CardContent,
  CardFooter,
  CardHeader,
  CardLink,
  CardSubtitle,
  CardTitle,
} from "@/core/internal/card.tsx"
import { Separator } from "@/core/internal/separator.tsx"
import { Skeleton as SkeletonPrimitive } from "@/core/internal/skeleton.tsx"
import { EyeInvisible, EyeVisible } from "@/icons/app"
import { usePrivacyMode } from "@/lib/privacyMode.tsx"
import { withSkeleton } from "@/lib/skeleton.tsx"
import { cn } from "@/lib/utils.ts"
import { cva, type VariantProps } from "cva"
import React, { forwardRef, ReactNode, useEffect } from "react"

export interface WidgetProps {
  header?: {
    title?: string
    subtitle?: string
    comment?: string
    canBeBlurred?: boolean
    link?: { title: string; url: string; onClick?: () => void }
    count?: number
  }
  action?: ButtonProps
  summaries?: Array<{
    label: string
    value: string | number
    prefixUnit?: string
    postfixUnit?: string
  }>
  alert?: string
  status?: {
    text: string
    variant: StatusVariant
  }
  fullHeight?: boolean
}

const InlineDot = () => (
  <div className="min-h-[0.15rem] min-w-[0.15rem] rounded-full bg-f1-foreground-secondary" />
)

const Container = forwardRef<
  HTMLDivElement,
  WidgetProps & { children: ReactNode }
>(function Container(
  { header, children, action, summaries, alert, status, fullHeight = false },
  ref
) {
  const { enabled: privacyModeEnabled, toggle: togglePrivacyMode } =
    usePrivacyMode()

  useEffect(() => {
    if (alert && status) {
      throw Error(
        "You cannot pass both alert and status at the same time to this component"
      )
    }
  }, [alert, status])

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

  const handleLinkClick = () => {
    header?.link?.onClick?.()
  }

  return (
    <Card
      className={cn(
        fullHeight ? "h-full" : "",
        "relative flex gap-4 border-f1-border-secondary"
      )}
      ref={ref}
    >
      {header && (
        <CardHeader className="-mr-1 -mt-1">
          <div className="flex w-full flex-1 flex-col gap-4">
            <div className="flex flex-1 flex-row flex-nowrap items-center justify-between gap-2">
              <div className="flex min-h-6 grow flex-row items-center gap-1 truncate">
                {header.title && (
                  <CardTitle className="truncate">{header.title}</CardTitle>
                )}
                {header.subtitle && (
                  <div className="flex flex-row items-center gap-1">
                    <InlineDot />
                    <CardSubtitle className="truncate">
                      {header.subtitle}
                    </CardSubtitle>
                  </div>
                )}
                {header.count && (
                  <div className="ml-0.5">
                    <Counter value={header.count} />
                  </div>
                )}
              </div>
              <div className="flex flex-row items-center gap-3">
                {alert && <AlertTag text={alert} level="critical" />}
                {status && (
                  <StatusTag text={status.text} variant={status.variant} />
                )}
                {header.link && (
                  <CardLink
                    onClick={handleLinkClick}
                    href={header.link.url}
                    title={header.link.title}
                  />
                )}
              </div>
            </div>
            {header.comment && (
              <div className="flex flex-row items-center gap-3 overflow-visible">
                <PrivateBox>
                  <CardComment>{header.comment}</CardComment>
                </PrivateBox>
                {!!header.canBeBlurred && (
                  <span>
                    <Button
                      icon={privacyModeEnabled ? EyeInvisible : EyeVisible}
                      hideLabel
                      label="hide/show"
                      variant="outline"
                      round
                      onClick={togglePrivacyMode}
                      size="sm"
                    />
                  </span>
                )}
              </div>
            )}
          </div>
        </CardHeader>
      )}
      <CardContent className="flex h-full flex-col gap-4">
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
              <React.Fragment key={index}>
                {index > 0 && <Separator bare />}
                {child}
              </React.Fragment>
            )
          })}
      </CardContent>
      {action && (
        <CardFooter>
          <Button variant="neutral" size="sm" {...action} />
        </CardFooter>
      )}
    </Card>
  )
})

const skeletonVariants = cva({
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
        className="flex gap-4 border-f1-border-secondary"
        ref={ref}
        aria-live="polite"
        aria-busy={true}
      >
        <CardHeader className="-mr-1 -mt-1">
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
