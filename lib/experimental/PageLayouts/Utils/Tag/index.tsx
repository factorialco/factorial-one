import { UserAvatar } from "@/experimental/Information/Avatars/UserAvatar"
import { cn } from "@/lib/utils"
import { ComponentProps, forwardRef } from "react"

interface TagProps {
  text: string
  avatar?: {
    firstName?: string
    lastName?: string
    src?: string
    size?: ComponentProps<typeof UserAvatar>["size"]
  }
  onClick?: () => void
}

export const Tag = forwardRef<HTMLDivElement, TagProps>(
  ({ text, avatar, onClick }, ref) => {
    const [firstName, lastName] = text.split(/\s+/).slice(0, 2)

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
          <UserAvatar
            firstName={avatar?.firstName ?? firstName}
            lastName={avatar?.lastName ?? lastName}
            src={avatar?.src}
            size="xsmall"
          />
        </span>
        <p>{text}</p>
      </div>
    )
  }
)

Tag.displayName = "Tag"
