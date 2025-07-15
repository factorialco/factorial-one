/**
 * Team metadata renderer for displaying team avatar with team name.
 */
import { TeamAvatar } from "@/experimental/Information/Avatars/exports"
import { TeamMetadata as TeamMetadataType } from "../../types"

export const TeamMetadata = ({ metadata }: { metadata: TeamMetadataType }) => (
  <div className="flex flex-row items-center gap-1">
    <TeamAvatar name={metadata.name} src={metadata.src} size="xsmall" />
    <span className="text-f1-foreground">{metadata.name}</span>
  </div>
)
