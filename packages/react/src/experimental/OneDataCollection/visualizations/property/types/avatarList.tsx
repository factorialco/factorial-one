/**
 * Avatar list cell type for displaying multiple user avatars in a collection.
 * Supports limiting the maximum number of visible avatars.
 */
import { AvatarVariant } from "@/experimental/Information/Avatars/Avatar"
import { AvatarList } from "@/experimental/Information/Avatars/AvatarList"

interface AvatarListValue {
  avatarList: AvatarVariant[]
  max?: number
  type?: "person" | "team" | "company"
}
export type AvatarListCellValue = AvatarListValue

export const AvatarListCell = (args: AvatarListCellValue) => (
  <AvatarList
    avatars={args.avatarList}
    size="xsmall"
    max={args.max}
    type={args.type ?? "person"}
  />
)
