/**
 * Avatar list cell type for displaying multiple user avatars in a collection.
 * Supports limiting the maximum number of visible avatars.
 */
import { F0AvatarList } from "@/components/avatars/F0AvatarList"
import {
  CompanyAvatar,
  F0AvatarListProps,
  PersonAvatar,
  TeamAvatar,
} from "@/components/avatars/F0AvatarList/types"

type AvatarListValue = {
  max?: number
} & (
  | {
      type?: "person"
      avatarList: PersonAvatar[]
    }
  | {
      type: "team"
      avatarList: TeamAvatar[]
    }
  | {
      type: "company"
      avatarList: CompanyAvatar[]
    }
)
export type AvatarListCellValue = AvatarListValue

export const AvatarListCell = (args: AvatarListCellValue) => {
  const type = args.type ?? ("person" as const)

  return (
    <F0AvatarList
      {...({
        type,
        avatars: args.avatarList,
        size: "xs" as const,
        max: args.max,
      } as F0AvatarListProps)}
    />
  )
}
