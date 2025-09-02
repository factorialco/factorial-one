import { AvatarVariant } from "../F0Avatar"

export const getAvatarDisplayName = (avatar: AvatarVariant) => {
  switch (avatar.type) {
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
