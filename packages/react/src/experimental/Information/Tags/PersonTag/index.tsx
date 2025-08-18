import { forwardRef } from "react"
import { AvatarTag } from "../AvatarTag"

type Props = {
  name: string
  avatarUrl: string
  onClick?: () => void
}

export const PersonTag = forwardRef<HTMLDivElement, Props>(
  ({ name, avatarUrl, onClick }, ref) => {
    return (
      <AvatarTag
        ref={ref}
        avatar={{
          type: "person",
          firstName: name,
          lastName: "",
          src: avatarUrl,
        }}
        text={name}
        onClick={onClick}
      />
    )
  }
)

PersonTag.displayName = "PersonTag"
