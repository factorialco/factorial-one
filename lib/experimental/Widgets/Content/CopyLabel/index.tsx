import { Icon } from "@/components/Utilities/Icon"
import { LayersFront } from "@/icons"
import { forwardRef } from "react"
interface CopyLabelType {
  text: string
}

export const CopyLabel = forwardRef<HTMLDivElement, CopyLabelType>(
  ({ text }, ref) => {
    const copyHandler = async () => {
      try {
        await navigator.clipboard.writeText(text)
      } catch (error) {
        void error
      }
    }

    return (
      <div
        ref={ref}
        className="flex h-8 list-none items-center justify-between rounded-md p-1.5 font-medium text-f1-foreground-secondary hover:cursor-pointer hover:bg-f1-background-secondary"
        onClick={copyHandler}
        role="button"
        aria-label={`Copy ${text} to clipboard`}
      >
        <p className="text-f1-foreground">{text}</p>
        <Icon icon={LayersFront} size="md" />
      </div>
    )
  }
)

CopyLabel.displayName = "CopyLabel"
