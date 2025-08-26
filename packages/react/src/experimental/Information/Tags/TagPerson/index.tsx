import { forwardRef } from "react"
import { TagAvatar } from "../TagAvatar"

type Props = {
  name: string
  avatarUrl: string
  onClick?: () => void
}

export const TagPerson = forwardRef<HTMLDivElement, Props>(
  ({ name, avatarUrl, onClick }, ref) => {
    return (
      <TagAvatar
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

TagPerson.displayName = "TagPerson"
