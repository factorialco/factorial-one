import { IconType } from "@/components/Utilities/Icon"
import { Icon } from "@/factorial-one"
import { AlertCircle, InfoCircle, Warning } from "@/icons"
import { useTextFormatEnforcer } from "@/lib/text"
import { cn } from "@/lib/utils"
import { forwardRef } from "react"

type Level = "info" | "warning" | "critical"

type Props<Text extends string = string> = {
  text: Text extends "" ? never : Text
  level: Level
}

const iconMap: Record<Level, IconType> = {
  info: InfoCircle,
  warning: Warning,
  critical: AlertCircle,
}

export const AlertTag = forwardRef<HTMLDivElement, Props>(
  ({ text, level }, ref) => {
    useTextFormatEnforcer(text, { disallowEmpty: true })

    return (
      <div
        ref={ref}
        className={cn(
          "flex flex-row items-center justify-start gap-0.5 rounded-full py-0.5 pl-0.5 pr-2 text-base font-medium",
          {
            info: "bg-f1-background-info text-f1-foreground-info",
            warning: "bg-f1-background-warning text-f1-foreground-warning",
            critical: "bg-f1-background-critical text-f1-foreground-critical",
          }[level]
        )}
      >
        <Icon
          icon={iconMap[level]}
          size="md"
          aria-hidden
          className={cn(
            {
              info: "text-f1-icon-info",
              warning: "text-f1-icon-warning",
              critical: "text-f1-icon-critical",
            }[level]
          )}
        />
        <span className="sr-only">Information:</span>
        <span className="line-clamp-1">{text}</span>
      </div>
    )
  }
)

AlertTag.displayName = "AlertTag"
