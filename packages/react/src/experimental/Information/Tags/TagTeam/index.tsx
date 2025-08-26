import { forwardRef } from "react"
import { TagAvatar } from "../TagAvatar"

type Props = {
  teamName: string
  teamImageUrl: string
  onClick?: () => void
}

export const TagTeam = forwardRef<HTMLDivElement, Props>(
  ({ teamName, teamImageUrl, onClick }, ref) => {
    return (
      <TagAvatar
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

TagTeam.displayName = "TagTeam"
