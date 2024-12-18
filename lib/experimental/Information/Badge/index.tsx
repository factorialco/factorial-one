import { Icon, IconType } from "@/components/Utilities/Icon"
import { cva, VariantProps } from "class-variance-authority"

const badgeVariants = cva(
  "flex shrink-0 items-center justify-center rounded-full",
  {
    variants: {
      type: {
        neutral: "bg-transparent text-f1-icon",
        highlight: "text-f1-special-highlight",
        positive: "bg-f1-background-positive-bold text-f1-foreground-inverse",
        critical: "bg-f1-background-critical-bold text-f1-foreground-inverse",
        warning: "bg-f1-background-warning-bold text-f1-foreground-inverse",
      },
      size: {
        sm: "h-3 w-3",
        md: "h-5 w-5",
        lg: "h-6 w-6",
      },
    },
    defaultVariants: {
      type: "neutral",
      size: "md",
    },
  }
)

const iconSizes = {
  sm: "xs",
  md: "sm",
  lg: "md",
} as const

interface BadgeProps extends VariantProps<typeof badgeVariants> {
  icon: IconType
  size: keyof typeof iconSizes
}

export const Badge = ({ type, size = "md", icon }: BadgeProps) => {
  return (
    <div className={badgeVariants({ type, size })}>
      <Icon icon={icon} size={iconSizes[size]} />
    </div>
  )
}
