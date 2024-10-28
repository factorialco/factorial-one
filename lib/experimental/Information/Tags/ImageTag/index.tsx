import { useTextFormatEnforcer } from "@/lib/text"
import { cn } from "@/lib/utils"
import { forwardRef } from "react"
import { BaseTag } from "../BaseTag"

type Props = {
  imageUrl: string
  text: string
  rounded?: boolean
}

export const ImageTag = forwardRef<HTMLDivElement, Props>(
  ({ imageUrl, text, rounded = false }, ref) => {
    useTextFormatEnforcer(text, { disallowEmpty: true })

    return (
      <BaseTag
        ref={ref}
        className={cn(
          "gap-1 border-[1px] border-solid border-f1-border-secondary pl-0.5",
          rounded ? "rounded-full" : "rounded-[8px]"
        )}
        left={
          <img
            src={imageUrl}
            aria-hidden
            className={cn(
              "h-[20px] w-[20x]",
              rounded ? "rounded-full" : "rounded-[6px]"
            )}
          />
        }
        text={text}
      />
    )
  }
)

ImageTag.displayName = "ImageTag"
