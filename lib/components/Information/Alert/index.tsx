import { cva, type VariantProps } from "class-variance-authority"
import * as React from "react"

import { Component } from "@/lib/component"
import { cn } from "@/lib/utils"
import {
  BookOpen,
  CircleCheck,
  LucideProps,
  OctagonX,
  TriangleAlert,
} from "lucide-react"

const variants = ["destructive", "positive", "warning", "info"] as const
type Variants = (typeof variants)[number]

const alertVariants = cva(
  "relative w-full rounded-2xl bg-secondary p-6 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-6 [&>svg]:top-6 [&>svg]:text-neutral-100 [&>svg~*]:pl-8",
  {
    variants: {
      variant: {
        destructive:
          "text-critical-70 bg-critical-50/75 [&>svg]:text-critical-70 dark:border-destructive-intermediate",
        positive:
          "bg-positive text-positive-foreground dark:border-positive-intermediate [&>svg]:text-positive-intermediate",
        warning:
          "bg-warning text-warning-foreground dark:border-warning-intermediate [&>svg]:text-warning-intermediate",
        info: "bg-info text-info-foreground dark:border-info-intermediate [&>svg]:text-info-intermediate",
      } satisfies Record<Variants, string>,
    },
    defaultVariants: {
      variant: "info",
    },
  }
)

const variantIcons: Record<Variants, React.FC<LucideProps>> = {
  destructive: OctagonX,
  positive: CircleCheck,
  warning: TriangleAlert,
  info: BookOpen,
}

const Alert = Component(
  {
    name: "Alert",
    type: "info",
  },
  React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>
  >(({ className, variant = "info", children, ...props }, ref) => {
    const IconComponent = variant ? variantIcons[variant] : null

    return (
      <div
        ref={ref}
        role="alert"
        className={cn(alertVariants({ variant }), className)}
        {...props}
      >
        <div className="flex flex-row">
          {IconComponent && (
            <div className="mr-2 flex h-6 items-center">
              <IconComponent size={20} />
            </div>
          )}
          <div>{children}</div>
        </div>
      </div>
    )
  })
)

const AlertTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h5
    ref={ref}
    className={cn("mb-1 text-base font-medium tracking-tight", className)}
    {...props}
  />
))
AlertTitle.displayName = "AlertTitle"

const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("[&_p]:leading-relaxed", className)}
    {...props}
  />
))
AlertDescription.displayName = "AlertDescription"

export { Alert, AlertDescription, AlertTitle }
