import { cva, type VariantProps } from "class-variance-authority"
import * as React from "react"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border border-solid px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-neutral-20 bg-transparent text-neutral-100",
        neutral: "border-transparent bg-neutral-10 text-neutral-100",
        critical: "border-transparent bg-critical-50/25 text-critical-70",
        positive: "border-transparent bg-positive-50/25 text-positive-70",
        warning: "border-transparent bg-warning-50/25 text-warning-70",
        info: "border-transparent bg-info-50/25 text-info-70",
        name: "bg-page-background border-neutral-20 text-sm font-medium text-neutral-100",
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
