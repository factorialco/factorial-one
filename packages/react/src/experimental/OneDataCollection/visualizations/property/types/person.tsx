import { IconType } from "@/components/Utilities/Icon"
import { BadgeProps } from "@/experimental/exports"
import { Avatar } from "@/experimental/Information/Avatars/Avatar"

export interface PersonValue {
  firstName: string
  lastName: string
  src?: string
  badge?:
    | {
        type: "badge"
        variant: BadgeProps["variant"]
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

export type PersonCellValue = PersonValue

export const PersonCell = (args: PersonCellValue) => (
  <div className="flex items-center gap-2">
    <Avatar
      avatar={{
        type: "person",
        firstName: args.firstName,
        lastName: args.lastName,
        src: args.src,
      }}
      size="xsmall"
    />
    <span className="text-f1-foreground">
      {args.firstName} {args.lastName}
    </span>
  </div>
)
