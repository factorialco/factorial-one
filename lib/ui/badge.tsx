import { cva, type VariantProps } from "class-variance-authority"
import * as React from "react"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "focus:ring-ring inline-flex items-center rounded-full border border-solid px-2.5 py-0.5 text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-f1-border-neutral bg-transparent text-f1-foreground-neutral",
        neutral:
          "border-transparent bg-f1-background-neutral-secondary text-f1-foreground-neutral",
        critical:
          "border-transparent bg-f1-background-critical text-f1-foreground-critical",
        positive:
          "border-transparent bg-f1-background-positive text-f1-foreground-positive",
        warning:
          "border-transparent bg-f1-background-warning text-f1-foreground-warning",
        info: "border-transparent bg-f1-background-info text-f1-foreground-info",
        name: "border-f1-border-neutral bg-f1-background-neutral-secondary text-sm font-medium text-f1-foreground-neutral",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
