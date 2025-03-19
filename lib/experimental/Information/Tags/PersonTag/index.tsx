import { forwardRef } from "react"
import { ImageTag } from "../ImageTag"

type Props = {
  name: string
  avatarUrl: string
  onClick?: () => void
}

export const PersonTag = forwardRef<HTMLDivElement, Props>(
  ({ name, avatarUrl, onClick }, ref) => {
    return (
      <ImageTag
        ref={ref}
        imageUrl={avatarUrl}
        text={name}
        onClick={onClick}
        rounded
      />
    )
  }
)

PersonTag.displayName = "PersonTag"
