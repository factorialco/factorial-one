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
}

export const Avatar = forwardRef<HTMLDivElement, AvatarType>(function Avatar(
  { src, alt, size },
  ref
) {
  return (
    <AvatarComponent size={size} ref={ref}>
      <AvatarImage src={src} alt={alt} />
      <AvatarFallback>{alt}</AvatarFallback>
    </AvatarComponent>
  )
})
