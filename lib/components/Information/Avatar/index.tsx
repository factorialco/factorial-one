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
  className?: ComponentProps<typeof AvatarComponent>["className"]
}

export const Avatar = forwardRef<HTMLDivElement, AvatarType>(
  ({ src, alt, size, className }, ref) => {
    return (
      <AvatarComponent size={size} ref={ref} className={className}>
        <AvatarImage src={src} alt={alt} />
        <AvatarFallback>{alt}</AvatarFallback>
      </AvatarComponent>
    )
  }
)
