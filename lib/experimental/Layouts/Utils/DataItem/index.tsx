import { Icon } from "@/components/Utilities/Icon"
import { Avatar } from "@/experimental/Information/Avatar"
import { Check, ChevronRight, LayersFront } from "@/icons"
import { cn } from "@/lib/utils"
import { ComponentProps, forwardRef, useEffect, useState } from "react"
import { getColorFromText } from "../helper"

interface DataItemProps {
  text: string
  avatar?: Omit<ComponentProps<typeof Avatar>, "alt"> & {
    alt?: string
  }
  onClick?: () => void
}

const COPIED_SHOWN_MS = 1250

export const DataItem = forwardRef<HTMLDivElement, DataItemProps>(
  ({ text, avatar, onClick }, ref) => {
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

    const handleClick = onClick ?? copyHandler

    const short =
      avatar?.alt ??
      text
        .split(/\s+/)
        .slice(0, 2)
        .map((e) => e[0])
        .join("")
        .toLocaleUpperCase()

    return (
      <div
        ref={ref}
        role="button"
        className={cn(
          "group relative flex w-full cursor-pointer flex-row items-center justify-between gap-1.5 rounded-sm py-1.5 pl-1.5 pr-2 font-medium text-f1-foreground transition-colors duration-300 hover:bg-f1-background-secondary",
          copied
            ? "hover:bg-f1-background-positive"
            : "hover:bg-f1-background-secondary"
        )}
        onClick={handleClick}
        aria-label={onClick ? "Navigate" : `Copy ${text} to clipboard`}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault()
            handleClick()
          }
        }}
        tabIndex={0}
      >
        <div className="flex flex-row items-center gap-1.5">
          {!!avatar && (
            <Avatar
              alt={short}
              src={avatar?.src}
              size="xsmall"
              color={getColorFromText(text)}
            />
          )}
          <p>{text}</p>
        </div>
        {!onClick ? (
          <div className="flex items-center text-f1-foreground-secondary">
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
        ) : (
          <div className="flex items-center text-f1-foreground-secondary opacity-0 transition-all duration-300 group-hover:opacity-100">
            <Icon icon={ChevronRight} size="md" />
          </div>
        )}
      </div>
    )
  }
)

DataItem.displayName = "DataItem"
