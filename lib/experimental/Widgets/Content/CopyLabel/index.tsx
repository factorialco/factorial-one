import { Icon } from "@/components/Utilities/Icon"
import { Check, LayersFront } from "@/icons"
import { cn } from "@/lib/utils"
import { forwardRef, useEffect, useState } from "react"
interface CopyLabelType {
  text: string
}

const COPIED_SHOWN_MS = 1250

export const CopyLabel = forwardRef<HTMLDivElement, CopyLabelType>(
  ({ text }, ref) => {
    const [copied, setCopied] = useState(false)

    useEffect(() => {
      if (copied) {
        const timer = setTimeout(() => setCopied(false), COPIED_SHOWN_MS)

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
          "group relative flex h-8 items-center justify-between rounded-md p-1.5 font-medium text-f1-foreground-secondary transition-colors duration-300 hover:cursor-pointer",
          copied
            ? "hover:bg-f1-background-positive"
            : "hover:bg-f1-background-secondary"
        )}
        onClick={copyHandler}
        role="button"
        aria-label={`Copy ${text} to clipboard`}
      >
        <p className="flex-1 truncate pr-8 text-f1-foreground" title={text}>
          {text}
        </p>
        <Icon
          icon={LayersFront}
          size="md"
          className={cn(
            "absolute right-1.5 opacity-0 transition-all duration-300",
            !copied && "group-hover:opacity-100"
          )}
        />
        <Icon
          icon={Check}
          size="md"
          className={cn(
            "absolute right-1.5 opacity-0 transition-all duration-300",
            copied && "group-hover:opacity-100"
          )}
        />
      </div>
    )
  }
)

CopyLabel.displayName = "CopyLabel"
