import { AvailableColors } from "@/experimental/PageLayouts/Utils/helper"
import { cn } from "@/lib/utils"
import {
  Avatar as AvatarComponent,
  AvatarFallback,
  AvatarImage,
} from "@/ui/avatar"
import { ComponentProps, forwardRef } from "react"

interface AvatarType {
  alt: string
  src?: string
  size?: ComponentProps<typeof AvatarComponent>["size"]
  color?: AvailableColors
}

export const Avatar = forwardRef<HTMLDivElement, AvatarType>(
  ({ src, alt, size, color }, ref) => {
    return (
      <AvatarComponent size={size} ref={ref}>
        <AvatarImage src={src} alt={alt} />
        <AvatarFallback
          className={cn(color, color && "text-f1-foreground-inverse")}
        >
          {alt}
        </AvatarFallback>
      </AvatarComponent>
    )
  }
)

Avatar.displayName = "Avatar"
