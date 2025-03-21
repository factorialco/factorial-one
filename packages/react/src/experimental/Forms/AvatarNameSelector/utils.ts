import { AvatarNamedEntity, AvatarNamedSubEntity } from "./types"

export const mapAvatarNamedEntityToSubentity = (
  original: AvatarNamedEntity
) => {
  return {
    subId: original.id,
    subName: original.name,
    subAvatar: original.avatar,
  } as AvatarNamedSubEntity
}
