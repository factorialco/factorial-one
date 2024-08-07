import { Avatar } from "@/components/Information/Avatar"
import { cn } from "@/lib/utils"
import { Badge as BadgeComponent } from "@/ui/badge"
import { ComponentProps, forwardRef } from "react"

interface BadgeProps {
  text: string
  avatar?: Pick<ComponentProps<typeof Avatar>, "src" | "alt">
  variant?: ComponentProps<typeof BadgeComponent>["variant"]
}

export const Badge = forwardRef<HTMLDivElement, BadgeProps>(
  ({ text, avatar, variant = "name" }) => {
    const hasAvatar = avatar?.src || avatar?.alt
    return (
      <BadgeComponent
        variant={variant}
        className={cn(hasAvatar ? "pl-[0.15rem] pr-2" : "px-2")}
      >
        {hasAvatar && (
          <span className="mr-1">
            <Avatar
              alt={avatar.alt || text[0]}
              src={avatar.src}
              size="xsmall"
            />
          </span>
        )}
        {text}
      </BadgeComponent>
    )
  }
)
