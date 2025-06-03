import { Avatar } from "@/experimental/Information/Avatars/Avatar"
import { WithAvatarBadge } from "./types"

interface TeamValue {
  name: string
  src?: string
}
export type TeamCellValue = WithAvatarBadge<TeamValue>

export const TeamCell = (args: TeamCellValue) => (
  <div className="flex items-center gap-2">
    <Avatar
      avatar={{
        type: "team",
        name: args.name,
        src: args.src,
      }}
      size="xsmall"
    />
    <span className="text-f1-foreground">{args.name}</span>
  </div>
)
