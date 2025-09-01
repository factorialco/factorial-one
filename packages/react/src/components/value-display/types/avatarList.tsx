/**
 * Avatar list cell type for displaying multiple user avatars in a collection.
 * Supports limiting the maximum number of visible avatars.
 */
import { AvatarVariant } from "@/components/avatars/F0Avatar"
import { F0AvatarList } from "@/components/avatars/F0AvatarList"

interface AvatarListValue {
  avatarList: AvatarVariant[]
  max?: number
  type?: "person" | "team" | "company"
}
export type AvatarListCellValue = AvatarListValue

export const AvatarListCell = (args: AvatarListCellValue) => (
  <F0AvatarList
    avatars={args.avatarList}
    size="xsmall"
    max={args.max}
    type={args.type ?? "person"}
  />
)
