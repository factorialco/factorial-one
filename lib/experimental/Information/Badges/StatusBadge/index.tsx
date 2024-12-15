import { Icon, IconType } from "@/components/Utilities/Icon"
import { cva, VariantProps } from "class-variance-authority"

const statusBadgeVariants = cva(
  "flex shrink-0 items-center justify-center rounded-full",
  {
    variants: {
      status: {
        neutral: "bg-transparent text-f1-icon",
        positive: "bg-f1-background-positive-bold text-f1-foreground-inverse",
        critical: "bg-f1-background-critical-bold text-f1-foreground-inverse",
        warning: "bg-f1-background-warning-bold text-f1-foreground-inverse",
      },
      size: {
        sm: "h-3 w-3",
        md: "h-5 w-5",
      },
    },
    defaultVariants: {
      status: "neutral",
      size: "md",
    },
  }
)

const iconSizes = {
  sm: "xs",
  md: "sm",
} as const

interface StatusBadgeProps extends VariantProps<typeof statusBadgeVariants> {
  icon: IconType
  size: keyof typeof iconSizes
}

export const StatusBadge = ({
  status,
  size = "md",
  icon,
}: StatusBadgeProps) => {
  return (
    <div className={statusBadgeVariants({ status, size })}>
      <Icon icon={icon} size={iconSizes[size]} />
    </div>
  )
}
