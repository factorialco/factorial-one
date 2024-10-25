import { IconType } from "@/components/Utilities/Icon"
import { Icon } from "@/factorial-one"
import { AlertCircle, InfoCircle, Warning } from "@/icons"
import { cn } from "@/lib/utils"
import { forwardRef } from "react"

type Level = "info" | "warning" | "critical"

interface Props {
  text: string
  level: Level
}

const iconMap: Record<Level, IconType> = {
  info: InfoCircle,
  warning: Warning,
  critical: AlertCircle,
}

export const AlertTag = forwardRef<HTMLDivElement, Props>(
  ({ text, level }, ref) => {
    if (!text) {
      throw Error("You need to provide some text that is not empty")
    }

    return (
      <div
        ref={ref}
        className={cn(
          "flex flex-row items-center justify-start gap-0.5 rounded-md py-0.5 pl-0.5 pr-2 text-base font-medium",
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
          className={cn(
            {
              info: "text-f1-icon-info",
              warning: "text-f1-icon-warning",
              critical: "text-f1-icon-critical",
            }[level]
          )}
        />
        <span>{text}</span>
      </div>
    )
  }
)

AlertTag.displayName = "AlertTag"
