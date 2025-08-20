/**
 * Company cell type for displaying company information with avatars.
 * Shows company name alongside a company avatar with optional badge.
 */
import { Avatar } from "@/experimental/Information/Avatars/Avatar"
import { WithAvatarBadge } from "./types"

interface CompanyValue {
  name: string
  src?: string
}
export type CompanyCellValue = WithAvatarBadge<CompanyValue>

export const CompanyCell = (args: CompanyCellValue) => (
  <div className="flex items-center gap-2">
    <Avatar
      avatar={{
        type: "company",
        name: args.name,
        src: args.src,
      }}
      size="xsmall"
    />
    <span className="text-f1-foreground">{args.name.toString()}</span>
  </div>
)
