import { cva, type VariantProps } from "class-variance-authority"
import * as React from "react"

import { cn } from "@/lib/utils"

const alertVariants = cva(
  "relative w-full rounded-2xl bg-secondary p-6 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-6 [&>svg]:top-6 [&>svg]:text-foreground [&>svg~*]:pl-8",
  {
    variants: {
      variant: {
        destructive:
          "bg-destructive text-destructive-foreground dark:border-destructive-intermediate [&>svg]:text-destructive-intermediate",
        positive:
          "bg-positive text-positive-foreground dark:border-positive-intermediate [&>svg]:text-positive-intermediate",
        warning:
          "bg-warning text-warning-foreground dark:border-warning-intermediate [&>svg]:text-warning-intermediate",
        info: "bg-info text-info-foreground dark:border-info-intermediate [&>svg]:text-info-intermediate",
      },
    },
    defaultVariants: {
      variant: "info",
    },
  }
)

const Alert = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>
>(({ className, variant, ...props }, ref) => (
  <div
    ref={ref}
    role="alert"
    className={cn(alertVariants({ variant }), className)}
    {...props}
  />
))
Alert.displayName = "Alert"

const AlertTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h5
    ref={ref}
    className={cn("mb-1 font-medium tracking-tight", className)}
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
