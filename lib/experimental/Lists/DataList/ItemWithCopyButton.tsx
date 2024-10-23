import { useEffect, useState } from "react"

import { Icon } from "@/components/Utilities/Icon"
import { ItemProps } from "@/experimental/Lists/DataList"
import { ItemContainer } from "@/experimental/Lists/DataList/ItemContainer"
import { Check, LayersFront } from "@/icons"
import { cn } from "@/lib/utils"

const COPIED_SHOWN_MS = 750

type CopyButtonProps = ItemProps

export const ItemWithCopyButton = ({
  text,
  icon: IconComponent,
}: CopyButtonProps) => {
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
    <ItemContainer
      as="button"
      text={text}
      leftIcon={IconComponent}
      onClick={copyHandler}
      className={cn(
        "group flex items-center gap-1.5 rounded p-1.5",
        "focus-visible:outline-f1-border-selected-bold focus-visible:outline focus-visible:outline-2",
        copied
          ? "transition-colors duration-300 hover:bg-f1-background-positive focus-visible:bg-f1-background-positive"
          : "hover:bg-f1-background-secondary-hover active:bg-f1-background-secondary-hover"
      )}
      aria-label={copied ? "Copied!" : `Copy ${text}`}
      actionIcon={() => (
        <>
          <Icon
            icon={LayersFront}
            size="md"
            aria-hidden={true}
            className={cn(
              "col-start-1 col-end-2 row-start-1 row-end-2",
              "opacity-0 transition-opacity duration-300",
              !copied &&
                "group-hover:opacity-100 group-focus-visible:opacity-100"
            )}
          />
          <Icon
            icon={Check}
            size="md"
            aria-hidden={true}
            className={cn(
              "col-start-1 col-end-2 row-start-1 row-end-2", // place to the same cell
              "opacity-0 transition-opacity duration-300",
              copied &&
                "group-hover:opacity-100 group-focus-visible:opacity-100"
            )}
          />
        </>
      )}
    />
  )
}

ItemWithCopyButton.displayName = "ItemWithCopyButton"
