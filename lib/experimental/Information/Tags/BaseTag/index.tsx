import { cn } from "@/lib/utils"
import { forwardRef, ReactNode } from "react"

type Props = {
  left?: ReactNode
  text?: string
  /**
   * Sometimes you need to clarify the status for screen reader users
   * E.g., when showing a tooltip for sighted user, provide the tootip text to this prop because tooltips aren't accessible
   */
  additionalAccesibleText?: string
  onClick?: () => void
  className?: string
}

export const BaseTag = forwardRef<HTMLDivElement, Props>(
  ({ left, text, additionalAccesibleText, onClick, className }, ref) => {
    if (!text && !left) {
      throw Error("You need to specify either `text` or `left` prop")
    }

    return (
      <div
        ref={ref}
        className={cn(
          "line-clamp-1 flex flex-row items-center justify-start gap-0.5 rounded-full py-0.5 pr-2 text-base font-medium",
          onClick && "cursor-pointer hover:bg-f1-background-hover",
          !text && "aspect-square w-6 items-center justify-center p-1",
          !left ? "pl-2" : "pl-1",
          className
        )}
        onClick={onClick}
      >
        {left}
        {!!text && <span>{text}</span>}
        {additionalAccesibleText && (
          <span className="sr-only">{additionalAccesibleText}</span>
        )}
      </div>
    )
  }
)

BaseTag.displayName = "BaseTag"
