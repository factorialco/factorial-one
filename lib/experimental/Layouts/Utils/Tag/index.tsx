import { Icon } from "@/components/Utilities/Icon"
import { Avatar } from "@/experimental/Information/Avatar"
import { ChevronRight } from "@/icons"
import { cn } from "@/lib/utils"
import { ComponentProps, forwardRef } from "react"
import { getColorFromText } from "../helper"

interface TagProps {
  text: string
  avatar?: ComponentProps<typeof Avatar>
  onClick?: () => void
}

export const Tag = forwardRef<HTMLDivElement, TagProps>(
  ({ text, avatar, onClick }, ref) => {
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
        role={onClick ? "button" : undefined}
        className={cn(
          "group flex w-full flex-row items-center justify-between gap-1.5 rounded-sm py-1.5 pl-1.5 pr-2 font-medium text-f1-foreground",
          !!onClick && "cursor-pointer hover:bg-f1-background-secondary"
        )}
        onClick={onClick}
      >
        <div className="flex flex-row items-center gap-1.5">
          <Avatar
            alt={short}
            src={avatar?.src}
            size="xsmall"
            color={getColorFromText(text)}
          />
          <p>{text}</p>
        </div>
        {!!onClick && (
          <span className="hidden items-center text-f1-foreground-secondary group-hover:flex">
            <Icon icon={ChevronRight} size="md" />
          </span>
        )}
      </div>
    )
  }
)

Tag.displayName = "Tag"
