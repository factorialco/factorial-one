import { InternalCopyActionType } from "@/core/components/experimental/lists/DataList/ItemContainer.tsx"
import { Icon } from "@/core/components/utility/Icon"
import { CheckCircle, LayersFront } from "@/icons/app"
import { cn } from "@/lib/utils.ts"
import { ReactNode, useEffect, useState } from "react"

const COPIED_SHOWN_MS = 750

export type CopyActionProps = {
  children: ReactNode
} & InternalCopyActionType

export const CopyAction = ({ text, children }: CopyActionProps) => {
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
    <button
      type="button"
      aria-label={copied ? "Copied!" : `Copy ${text}`}
      className={cn(
        "group flex items-center gap-1.5 rounded p-1.5",
        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-f1-border-selected-bold",
        "transition-colors duration-300 hover:bg-f1-background-hover active:bg-f1-background-secondary-hover",
        copied
          ? "hover:bg-f1-background-positive focus-visible:bg-f1-background-positive"
          : undefined
      )}
      onClick={copyHandler}
    >
      {children}
      <div className="grid">
        <Icon
          icon={LayersFront}
          size="md"
          aria-hidden={true}
          className={cn(
            "col-start-1 col-end-2 row-start-1 row-end-2",
            "opacity-0 transition-opacity duration-300",
            !copied && "group-hover:opacity-100 group-focus-visible:opacity-100"
          )}
        />
        <Icon
          icon={CheckCircle}
          size="md"
          aria-hidden={true}
          className={cn(
            "col-start-1 col-end-2 row-start-1 row-end-2", // place to the same cell
            "text-f1-icon-positive opacity-0 transition-opacity duration-300",
            copied && "group-hover:opacity-100 group-focus-visible:opacity-100"
          )}
        />
      </div>
    </button>
  )
}
