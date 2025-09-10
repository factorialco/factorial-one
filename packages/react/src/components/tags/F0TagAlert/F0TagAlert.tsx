import { F0Icon, IconType } from "@/components/F0Icon"
import { AlertCircle, InfoCircle, Warning } from "@/icons/app"
import { useTextFormatEnforcer } from "@/lib/text"
import { cn } from "@/lib/utils"
import { forwardRef } from "react"
import { BaseTag } from "../internal/BaseTag"
import type { Level, Props } from "./types"

const iconMap: Record<Level, IconType> = {
  info: InfoCircle,
  warning: Warning,
  critical: AlertCircle,
}

export const F0TagAlert = forwardRef<HTMLDivElement, Props>(
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
          <F0Icon
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

F0TagAlert.displayName = "F0TagAlert"
