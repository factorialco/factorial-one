import { forwardRef } from "react"
import { F0TagAvatar } from "../TagAvatar"

type Props = {
  teamName: string
  teamImageUrl: string
  onClick?: () => void
}

export const F0TagTeam = forwardRef<HTMLDivElement, Props>(
  ({ teamName, teamImageUrl, onClick }, ref) => {
    return (
      <F0TagAvatar
        ref={ref}
        avatar={{
          type: "team",
          name: teamName,
          src: teamImageUrl,
        }}
        text={teamName}
        onClick={onClick}
      />
    )
  }
)

F0TagTeam.displayName = "TagTeam"
