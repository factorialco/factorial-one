import { IconType } from "@/components/Utilities/Icon"
import { Icon } from "@/factorial-one"
import { ArrowDown, ArrowUp } from "@/icons/app"
import { useTextFormatEnforcer } from "@/lib/text"
import { cn } from "@/lib/utils"
import { forwardRef } from "react"
import { BaseTag } from "../BaseTag"

type Status = "positive" | "negative"

interface Props {
  text: string
  status: Status
}

const iconMap: Record<Status, IconType> = {
  positive: ArrowUp,
  negative: ArrowDown,
}

export const BalanceTag = forwardRef<HTMLDivElement, Props>(
  ({ text, status }, ref) => {
    useTextFormatEnforcer(text, { disallowEmpty: true })

    return (
      <BaseTag
        ref={ref}
        className={cn(
          "line-clamp-1 flex flex-row items-center justify-between gap-0.5 rounded-md py-0.5 pl-1 pr-2 text-base font-medium",
          {
            positive: "bg-f1-background-positive text-f1-foreground-positive",
            negative: "bg-f1-background-critical text-f1-foreground-critical",
          }[status]
        )}
        left={
          <Icon
            icon={iconMap[status]}
            size="sm"
            className={cn(
              {
                positive: "text-f1-icon-positive",
                negative: "text-f1-icon-critical",
              }[status]
            )}
          />
        }
        additionalAccesibleText={`${status} balance`}
        text={text}
      />
    )
  }
)

BalanceTag.displayName = "BalanceTag"
