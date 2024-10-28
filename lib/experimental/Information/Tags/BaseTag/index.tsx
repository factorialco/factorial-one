import { cn } from "@/lib/utils"
import { forwardRef, ReactNode } from "react"

type Props = {
  left?: ReactNode
  text: string
  additionalAccesibleText?: string
  className?: string
}

export const BaseTag = forwardRef<HTMLDivElement, Props>(
  ({ left, text, additionalAccesibleText, className }, ref) => (
    <div
      ref={ref}
      className={cn(
        "line-clamp-1 flex flex-row items-center justify-start gap-0.5 rounded-full py-0.5 pl-0.5 pr-2 text-base font-medium",
        className
      )}
    >
      {left}
      {additionalAccesibleText && (
        <span className="sr-only">{additionalAccesibleText}</span>
      )}
      <span>{text}</span>
    </div>
  )
)

BaseTag.displayName = "BaseTag"
