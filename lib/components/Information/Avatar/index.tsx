import {
  Avatar as AvatarComponent,
  AvatarFallback,
  AvatarImage,
} from "@/ui/avatar"
import { forwardRef } from "react"

interface AvatarType {
  alt: string
  src?: string
  size?: "medium" | "small" | "xsmall" | "large" | "xlarge" | "xxlarge"
}

export const Avatar = forwardRef<HTMLDivElement, AvatarType>(
  ({ src, alt, size }, ref) => {
    return (
      <AvatarComponent size={size} ref={ref}>
        <AvatarImage src={src} alt={alt} />
        <AvatarFallback>{alt}</AvatarFallback>
      </AvatarComponent>
    )
  }
)
