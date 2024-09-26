import { Avatar } from "@/components/Information/Avatar"
import { cn } from "@/lib/utils"
import { Badge as BadgeComponent } from "@/ui/badge"
import { ComponentProps, forwardRef } from "react"

export interface BadgeProps {
  text: string
  avatar?: Pick<ComponentProps<typeof Avatar>, "src" | "alt">
  hasDot?: boolean
  variant?: ComponentProps<typeof BadgeComponent>["variant"]
}

export const Badge = forwardRef<HTMLDivElement, BadgeProps>(
  ({ text, avatar, hasDot = false, variant = "name" }) => {
    const hasAvatar = avatar?.src || avatar?.alt

    const dotColor = {
      name: "bg-f1-background-secondary",
      default: "bg-f1-icon",
      neutral: "bg-f1-icon",
      critical: "bg-f1-icon-critical",
      positive: "bg-f1-icon-positive",
      warning: "bg-f1-icon-warning",
      info: "bg-f1-icon-info",
    }

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
        {hasDot && (
          <span
            className={cn(
              "mr-1 h-2 w-2 rounded-full",
              variant && dotColor[variant]
            )}
          />
        )}
        {text}
      </BadgeComponent>
    )
  }
)

Badge.displayName = "Badge"
