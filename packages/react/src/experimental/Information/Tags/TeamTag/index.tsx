import { forwardRef } from "react"
import { AvatarTag } from "../AvatarTag"

type Props = {
  teamName: string
  teamImageUrl: string
  onClick?: () => void
}

export const TeamTag = forwardRef<HTMLDivElement, Props>(
  ({ teamName, teamImageUrl, onClick }, ref) => {
    return (
      <AvatarTag
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

TeamTag.displayName = "TeamTag"
