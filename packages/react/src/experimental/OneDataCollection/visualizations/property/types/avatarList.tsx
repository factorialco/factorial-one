import { AvatarVariant } from "@/experimental/Information/Avatars/Avatar"
import { AvatarList } from "@/experimental/Information/Avatars/AvatarList"

interface AvatarListValue {
  avatarList: AvatarVariant[]
  max?: number
}
export type AvatarListCellValue = AvatarListValue

export const AvatarListCell = (args: AvatarListCellValue) => (
  <AvatarList avatars={args.avatarList} size="xsmall" max={args.max} />
)
