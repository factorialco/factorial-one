import { forwardRef } from "react"
import { ImageTag } from "../ImageTag"

type Props = {
  teamName: string
  teamImageUrl: string
  onClick?: () => void
}

export const TeamTag = forwardRef<HTMLDivElement, Props>(
  ({ teamName, teamImageUrl, onClick }, ref) => {
    return (
      <ImageTag
        ref={ref}
        imageUrl={teamImageUrl}
        text={teamName}
        onClick={onClick}
      />
    )
  }
)

TeamTag.displayName = "TeamTag"
