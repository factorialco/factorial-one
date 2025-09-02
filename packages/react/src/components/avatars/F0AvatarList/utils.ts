import { AvatarVariant, AvatarVariants } from "../F0Avatar"

export const getAvatarDisplayName = <T extends AvatarVariants>(
  avatarType: T,
  avatar: Omit<Extract<AvatarVariant, { type: T }>, "type"> &
    Record<string, unknown>
): string => {
  switch (avatarType) {
    case "person":
      return `${avatar.firstName} ${avatar.lastName}`
    case "team":
      return avatar.name
    case "company":
      return avatar.name
    case "file":
      return avatar.file.name
    default:
      return ""
  }
}
