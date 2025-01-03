import { IconType } from "@/components/Utilities/Icon"
import { Icon } from "@/factorial-one"
import { useTextFormatEnforcer } from "@/lib/text"
import { cn } from "@/lib/utils"
import { forwardRef } from "react"
import { BaseTag } from "../BaseTag"

type Props = {
  text?: string
  additionalAccesibleText?: string
  icon?: IconType
}

export const RawTag = forwardRef<HTMLDivElement, Props>(
  ({ text, additionalAccesibleText, icon }, ref) => {
    useTextFormatEnforcer(text, { disallowEmpty: true })

    return (
      <BaseTag
        ref={ref}
        className={cn("border-[1px] border-solid border-f1-border-secondary")}
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
