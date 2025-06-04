import { IconType } from "@/components/Utilities/Icon"
import { BadgeProps, ModuleId } from "@/experimental/exports"
/**
 * Person cell type for displaying person information with avatars.
 * Shows full name alongside a person avatar with optional badge.
 */
import { Avatar } from "@/experimental/Information/Avatars/Avatar"
import { WithAvatarBadge } from "./types"

interface PersonValue {
  firstName: string
  lastName: string
  src?: string
  badge?:
    | {
        type: "badge"
        variant: BadgeProps["type"]
      }
    | {
        type: "icon"
        icon: IconType
      }
    | {
        type: "module"
        module: ModuleId
      }
}

export type PersonCellValue = WithAvatarBadge<PersonValue>

export const PersonCell = (args: PersonCellValue) => (
  <div className="flex items-center gap-2">
    <Avatar
      avatar={{
        type: "person",
        firstName: args.firstName,
        lastName: args.lastName,
        src: args.src,
        badge: args.badge,
      }}
      size="xsmall"
    />
    <span className="text-f1-foreground">
      {args.firstName} {args.lastName}
    </span>
  </div>
)
