import { Icon, IconType } from "@/core/components/utility/Icon"
import { AlertCircle, InfoCircle, Warning } from "@/icons/app"
import { useTextFormatEnforcer } from "@/lib/text.ts"
import { cn } from "@/lib/utils.ts"
import { forwardRef } from "react"
import { BaseTag } from "../BaseTag"

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
      <BaseTag
        ref={ref}
        className={cn(
          "pl-0.5",
          {
            info: "bg-f1-background-info text-f1-foreground-info",
            warning: "bg-f1-background-warning text-f1-foreground-warning",
            critical: "bg-f1-background-critical text-f1-foreground-critical",
          }[level]
        )}
        left={
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
        }
        text={text}
      />
    )
  }
)

AlertTag.displayName = "AlertTag"
