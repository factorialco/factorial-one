import { BaseTag } from "@/components/tags/internal/BaseTag"
import { useTextFormatEnforcer } from "@/lib/text"
import { cn } from "@/lib/utils"
import { forwardRef } from "react"
import type { F0TagStatusProps } from "./types"

export const F0TagStatus = forwardRef<HTMLDivElement, F0TagStatusProps>(
  ({ text, additionalAccesibleText, variant }, ref) => {
    useTextFormatEnforcer(text, { disallowEmpty: true })

    return (
      <BaseTag
        ref={ref}
        className={cn(
          {
            neutral: "bg-f1-background-secondary text-f1-foreground-secondary",
            info: "bg-f1-background-info text-f1-foreground-info",
            positive: "bg-f1-background-positive text-f1-foreground-positive",
            warning: "bg-f1-background-warning text-f1-foreground-warning",
            critical: "bg-f1-background-critical text-f1-foreground-critical",
          }[variant]
        )}
        left={
          <div
            className={cn(
              "m-1 aspect-square w-2 rounded-full",
              {
                neutral: "bg-f1-icon",
                info: "bg-f1-icon-info",
                positive: "bg-f1-icon-positive",
                warning: "bg-f1-icon-warning",
                critical: "bg-f1-icon-critical",
              }[variant]
            )}
            aria-hidden
          />
        }
        additionalAccesibleText={additionalAccesibleText}
        text={text}
      />
    )
  }
)

F0TagStatus.displayName = "F0TagStatus"
