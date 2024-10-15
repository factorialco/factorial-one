import { Icon } from "@/components/Utilities/Icon"
import { Check, LayersFront } from "@/icons"
import { cn } from "@/lib/utils"
import { forwardRef, useEffect, useState } from "react"
interface CopyLabelType {
  text: string
}

export const CopyLabel = forwardRef<HTMLDivElement, CopyLabelType>(
  ({ text }, ref) => {
    const [copied, setCopied] = useState(false)

    useEffect(() => {
      if (copied) {
        const timer = setTimeout(() => setCopied(false), 1500)

        return () => clearTimeout(timer)
      }
    }, [copied])

    const copyHandler = async () => {
      try {
        await navigator.clipboard.writeText(text)
        setCopied(true)
      } catch (error) {
        void error
      }
    }

    return (
      <div
        ref={ref}
        className={cn(
          "relative flex list-none items-center justify-between rounded-md bg-f1-background-secondary p-1.5 font-medium text-f1-foreground-secondary transition-colors duration-300 hover:cursor-pointer",
          copied
            ? "hover:bg-f1-background-positive"
            : "hover:bg-f1-background-secondary"
        )}
        onClick={copyHandler}
        role="button"
        aria-label={`Copy ${text} to clipboard`}
      >
        <p className="truncate pr-6 text-f1-foreground">{text}</p>
        <Icon
          icon={LayersFront}
          size="md"
          className={cn(
            "absolute right-1.5 transition-all duration-300",
            copied ? "scale-75 opacity-0" : "scale-100 opacity-100"
          )}
        />
        <Icon
          icon={Check}
          size="md"
          className={cn(
            "absolute right-1.5 transition-all duration-300",
            copied ? "scale-100 opacity-100" : "scale-75 opacity-0"
          )}
        />
      </div>
    )
  }
)

CopyLabel.displayName = "CopyLabel"
