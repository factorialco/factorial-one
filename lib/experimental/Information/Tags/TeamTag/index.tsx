import { forwardRef } from "react"
import { ImageTag } from "../ImageTag"

type Props = {
  teamName: string
  teamImageUrl: string
}

export const TeamTag = forwardRef<HTMLDivElement, Props>(
  ({ teamName, teamImageUrl }, ref) => {
    return <ImageTag ref={ref} imageUrl={teamImageUrl} text={teamName} />
  }
)

TeamTag.displayName = "TeamTag"
