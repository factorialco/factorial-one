import { AvatarVariant } from "../F0Avatar"

export function getAvatarDisplayName(
  avatarType: "person",
  avatar: Omit<Extract<AvatarVariant, { type: "person" }>, "type">
): string
export function getAvatarDisplayName(
  avatarType: "team",
  avatar: Omit<Extract<AvatarVariant, { type: "team" }>, "type">
): string
export function getAvatarDisplayName(
  avatarType: "company",
  avatar: Omit<Extract<AvatarVariant, { type: "company" }>, "type">
): string
export function getAvatarDisplayName(
  avatarType: "file",
  avatar: Omit<Extract<AvatarVariant, { type: "file" }>, "type">
): string
export function getAvatarDisplayName(
  avatarType: "person" | "team" | "company" | "file",
  avatar: any
): string
export function getAvatarDisplayName(avatarType: string, avatar: any): string {
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
