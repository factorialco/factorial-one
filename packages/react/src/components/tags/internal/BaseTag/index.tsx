import { F0Icon } from "@/components/F0Icon"
import { OneEllipsis } from "@/components/OneEllipsis"
import { Tooltip } from "@/experimental/Overlays/Tooltip"
import { InfoCircle } from "@/icons/app"
import { cn } from "@/lib/utils"
import { forwardRef, ReactNode } from "react"

type Props = {
  /**
   * Sometimes you need to clarify the status for screen reader users
   * E.g., when showing a tooltip for sighted user, provide the tootip text to this prop because tooltips aren't accessible
   */
  additionalAccesibleText?: string
  className?: string
  // Hint text
  hint?: string
  // Tooltip text
  info?: string
  // Hides the info icon
  shape?: "rounded" | "square"
} & (
  | {
      left: ReactNode
      text?: string
      right?: ReactNode
    }
  | {
      left?: ReactNode
      text: string
      right?: ReactNode
    }
)

export const BaseTag = forwardRef<HTMLDivElement, Props>(
  (
    {
      left,
      text,
      right,
      additionalAccesibleText,
      className,
      hint,
      info,
      shape = "rounded",
    },
    ref
  ) => {
    console.log(shape)
    const content = (
      <div className="flex w-fit max-w-full flex-row items-center justify-start gap-1">
        <div
          ref={ref}
          className={cn(
            "inline-flex w-fit max-w-full flex-row items-center justify-start gap-1 py-0.5 pr-2 text-base font-medium text-f1-foreground",
            !text && "aspect-square w-6 items-center justify-center p-1",
            !left ? "pl-2" : "pl-1",
            shape === "rounded" && "rounded-full",
            shape === "square" && "rounded-sm",
            className
          )}
        >
          {left}
          {!!text && (
            <OneEllipsis tag="span" lines={1}>
              {text}
            </OneEllipsis>
          )}
          {additionalAccesibleText && (
            <span className="sr-only">{additionalAccesibleText}</span>
          )}
          {right}
        </div>
        {hint && (
          <span className="text-base font-medium text-f1-foreground-secondary">
            {hint}
          </span>
        )}
        {info && <F0Icon icon={InfoCircle} size="md" />}
      </div>
    )

    return info ? <Tooltip description={info}>{content}</Tooltip> : content
  }
)

BaseTag.displayName = "BaseTag"
