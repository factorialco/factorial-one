import { Avatar } from "@/components/Information/Avatar"
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
        className={cn(
          "flex flex-row items-center justify-start gap-1.5 rounded-md border border-solid border-f1-border py-1 pl-1 pr-2 font-medium text-f1-foreground",
          onClick && "cursor-pointer"
        )}
        onClick={onClick}
      >
        <span>
          <Avatar
            alt={short}
            src={avatar?.src}
            size="xsmall"
            color={getColorFromText(text)}
          />
        </span>
        <p>{text}</p>
      </div>
    )
  }
)

Tag.displayName = "Tag"
