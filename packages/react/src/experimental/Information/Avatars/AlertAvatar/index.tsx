import { cva, type VariantProps } from "cva"
import { Icon, IconType } from "../../../../components/Utilities/Icon"
import {
  AlertCircle,
  CheckCircle,
  InfoCircle,
  Warning,
} from "../../../../icons/app"

const alertAvatarVariants = cva({
  base: "flex items-center justify-center border border-solid",
  variants: {
    type: {
      critical:
        "border-f1-border-critical bg-f1-background-critical text-f1-icon-critical",
      warning:
        "border-f1-border-warning bg-f1-background-warning text-f1-icon-warning",
      info: "border-f1-border-info bg-f1-background-info text-f1-icon-info",
      positive:
        "border-f1-border-positive bg-f1-background-positive text-f1-icon-positive",
    },
    size: {
      sm: "h-6 w-6 rounded-sm",
      md: "h-8 w-8 rounded",
      lg: "h-10 w-10 rounded-md",
    },
  },
  defaultVariants: {
    type: "info",
    size: "md",
  },
})

export type AlertAvatarProps = VariantProps<typeof alertAvatarVariants> & {
  icon?: IconType
  type: "critical" | "warning" | "info" | "positive"
  size?: "sm" | "md" | "lg"
}

export const AlertAvatar = ({ icon, type, size }: AlertAvatarProps) => {
  const iconMap = {
    critical: AlertCircle,
    warning: Warning,
    info: InfoCircle,
    positive: CheckCircle,
  }

  return (
    <div className={alertAvatarVariants({ type, size })}>
      <Icon icon={icon ?? iconMap[type]} size={size} />
    </div>
  )
}
