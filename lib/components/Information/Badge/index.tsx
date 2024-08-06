import { Avatar } from "@/components/Information/Avatar"
import { cn } from "@/lib/utils"
import { Badge as BadgeComponent } from "@/ui/badge"
import { ComponentProps, forwardRef } from "react"

interface BadgeProps {
  text: string
  hasAvatar?: boolean
  variant?: ComponentProps<typeof BadgeComponent>["variant"]
  imageSrc?: ComponentProps<typeof Avatar>["src"]
  alt?: ComponentProps<typeof Avatar>["alt"]
}

export const Badge = forwardRef<HTMLDivElement, BadgeProps>(
  ({ text, hasAvatar = false, imageSrc, alt, variant = "name" }) => {
    return (
      <BadgeComponent
        variant={variant}
        className={cn(hasAvatar ? "pl-[0.15rem] pr-2" : "px-2")}
      >
        {hasAvatar && (
          <span className="mr-1">
            <Avatar alt={alt || text[0]} src={imageSrc} size="xsmall" />
          </span>
        )}
        {text}
      </BadgeComponent>
    )
  }
)
