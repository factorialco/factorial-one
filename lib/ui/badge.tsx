import { cva, type VariantProps } from "class-variance-authority"
import * as React from "react"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border border-solid px-2.5 py-0.5 text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-f1-border-neutral text-f1-foreground-neutral bg-transparent",
        neutral:
          "bg-f1-background-neutral-secondary text-f1-foreground-neutral border-transparent",
        critical:
          "bg-f1-background-critical text-f1-foreground-critical border-transparent",
        positive:
          "bg-f1-background-positive text-f1-foreground-positive border-transparent",
        warning:
          "bg-f1-background-warning text-f1-foreground-warning border-transparent",
        info: "bg-f1-background-info text-f1-foreground-info border-transparent",
        name: "border-f1-border-neutral text-f1-foreground-neutral bg-f1-background-neutral-secondary text-sm font-medium",
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
