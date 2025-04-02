import { forwardRef } from "react"
import { useTextFormatEnforcer } from "../../../../lib/text"
import { cn } from "../../../../lib/utils"
import { BaseTag } from "../BaseTag"

type Props = {
  imageUrl: string
  text: string
  rounded?: boolean
  onClick?: () => void
}

export const ImageTag = forwardRef<HTMLDivElement, Props>(
  ({ imageUrl, text, rounded = false, onClick }, ref) => {
    useTextFormatEnforcer(text, { disallowEmpty: true })

    return (
      <BaseTag
        ref={ref}
        className={cn(
          "gap-1 border-[1px] border-solid border-f1-border-secondary py-[1px] pl-[1px]",
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
        onClick={onClick}
      />
    )
  }
)

ImageTag.displayName = "ImageTag"
