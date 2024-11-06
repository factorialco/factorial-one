import { sizes } from "@/ui/avatar"
import { CompanyAvatar } from "./CompanyAvatar"
import { PersonAvatar } from "./PersonAvatar"
import { TeamAvatar } from "./TeamAvatar"
import { AvatarVariant } from "./types"

type AvatarSize = (typeof sizes)[number]

export function renderAvatar(
  avatar: AvatarVariant,
  size: AvatarSize = "xsmall"
) {
  switch (avatar.type) {
    case "person":
      return (
        <PersonAvatar
          firstName={avatar.firstName}
          lastName={avatar.lastName}
          src={avatar.src}
          size={size}
        />
      )
    case "team":
      return <TeamAvatar name={avatar.name} src={avatar.src} size={size} />
    case "company":
      return <CompanyAvatar name={avatar.name} src={avatar.src} size={size} />
  }
}
