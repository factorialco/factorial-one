import { cva, type VariantProps } from "cva"
import { Icon } from "../../../../components/Utilities/Icon"
import { AlertCircle, InfoCircle, Warning } from "../../../../icons/app"

const alertAvatarVariants = cva({
  base: "flex items-center justify-center border border-solid",
  variants: {
    type: {
      critical:
        "border-f1-border-critical bg-f1-background-critical text-f1-icon-critical",
      warning:
        "border-f1-border-warning bg-f1-background-warning text-f1-icon-warning",
      info: "border-f1-border-info bg-f1-background-info text-f1-icon-info",
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
  type: "critical" | "warning" | "info"
  size?: "sm" | "md" | "lg"
}

export const AlertAvatar = ({ type, size }: AlertAvatarProps) => {
  const iconMap = {
    critical: AlertCircle,
    warning: Warning,
    info: InfoCircle,
  }

  return (
    <div className={alertAvatarVariants({ type, size })}>
      <Icon icon={iconMap[type]} size={size} />
    </div>
  )
}
