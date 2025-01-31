import { IconType } from "@/components/Utilities/Icon"
import { Icon } from "@/factorial-one"
import { useTextFormatEnforcer } from "@/lib/text"
import { cn } from "@/lib/utils"
import { forwardRef } from "react"
import { BaseTag } from "../BaseTag"

export type RawTagProps = {
  text?: string
  additionalAccesibleText?: string
  icon?: IconType
  noBorder?: boolean
  className?: string
}

export const RawTag = forwardRef<HTMLDivElement, RawTagProps>(
  ({ text, additionalAccesibleText, icon, noBorder, className }, ref) => {
    useTextFormatEnforcer(text, { disallowEmpty: true })

    return (
      <BaseTag
        ref={ref}
        className={cn(
          !noBorder && "border-[1px] border-solid border-f1-border-secondary",
          className
        )}
        left={
          icon ? (
            <Icon icon={icon} size="sm" className="text-f1-icon" aria-hidden />
          ) : null
        }
        text={text}
        additionalAccesibleText={additionalAccesibleText}
      />
    )
  }
)

RawTag.displayName = "RawTag"
