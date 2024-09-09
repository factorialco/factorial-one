import { cva, type VariantProps } from "class-variance-authority"
import * as React from "react"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border border-solid px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-neutral-20 bg-transparent text-neutral-100",
        neutral: "bg-neutral-10 border-transparent text-neutral-100",
        critical: "text-critical-70 bg-critical-50/25 border-transparent",
        positive: "bg-positive-50/25 text-positive-70 border-transparent",
        warning: "bg-warning-50/25 text-warning-70 border-transparent",
        info: "bg-info-50/25 text-info-70 border-transparent",
        name: "border-neutral-20 bg-page-background text-sm font-medium text-neutral-100",
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
