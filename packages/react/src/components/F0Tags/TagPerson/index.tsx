import { forwardRef } from "react"
import { F0TagAvatar } from "../TagAvatar"

type Props = {
  name: string
  avatarUrl: string
  onClick?: () => void
}

export const F0TagPerson = forwardRef<HTMLDivElement, Props>(
  ({ name, avatarUrl, onClick }, ref) => {
    return (
      <F0TagAvatar
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

F0TagPerson.displayName = "TagPerson"
