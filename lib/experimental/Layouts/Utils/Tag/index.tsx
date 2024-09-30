import { Avatar } from "@/components/Information/Avatar"
import { cn } from "@/lib/utils"
import { ComponentProps, forwardRef } from "react"

interface TagProps {
  text: string
  avatar: ComponentProps<typeof Avatar>
  onClick?: () => void
}

export const Tag = forwardRef<HTMLDivElement, TagProps>(
  ({ text, avatar, onClick }, ref) => {
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
          <Avatar alt={avatar.alt || text[0]} src={avatar.src} size="xsmall" />
        </span>
        <p>{text}</p>
      </div>
    )
  }
)

Tag.displayName = "Tag"
