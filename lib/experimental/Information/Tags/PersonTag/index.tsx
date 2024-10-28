import { forwardRef } from "react"
import { ImageTag } from "../ImageTag"

type Props = {
  name: string
  avatarUrl: string
}

export const PersonTag = forwardRef<HTMLDivElement, Props>(
  ({ name, avatarUrl }, ref) => {
    return <ImageTag ref={ref} imageUrl={avatarUrl} text={name} rounded />
  }
)

PersonTag.displayName = "PersonTag"
