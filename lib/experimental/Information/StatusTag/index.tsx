import { useTextFormatEnforcer } from "@/lib/text"
import { cn } from "@/lib/utils"
import { forwardRef } from "react"

type Variant = "neutral" | "info" | "positive" | "warning" | "critical"

export type StatusVariant = Variant

interface Props {
  text: string
  variant: Variant
}

export const StatusTag = forwardRef<HTMLDivElement, Props>(
  ({ text, variant }, ref) => {
    useTextFormatEnforcer(text, { disallowEmpty: true })

    return (
      <div
        ref={ref}
        className={cn(
          "flex flex-row items-center justify-start gap-1.5 rounded-full px-2 py-0.5 text-base font-medium",
          {
            neutral: "bg-f1-background-secondary text-f1-foreground-secondary",
            info: "bg-f1-background-info text-f1-foreground-info",
            positive: "bg-f1-background-positive text-f1-foreground-positive",
            warning: "bg-f1-background-warning text-f1-foreground-warning",
            critical: "bg-f1-background-critical text-f1-foreground-critical",
          }[variant]
        )}
      >
        <div
          className={cn(
            "aspect-square w-2 rounded-full",
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
        <span className="line-clamp-1">{text}</span>
      </div>
    )
  }
)

StatusTag.displayName = "StatusTag"
