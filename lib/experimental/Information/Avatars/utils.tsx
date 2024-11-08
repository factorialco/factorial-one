import { sizes } from "@/ui/avatar"
import { ComponentProps, ReactNode } from "react"
import { CompanyAvatar } from "./CompanyAvatar"
import { PersonAvatar } from "./PersonAvatar"
import { TeamAvatar } from "./TeamAvatar"

type PersonAvatarProps = ComponentProps<typeof PersonAvatar>
type TeamAvatarProps = ComponentProps<typeof TeamAvatar>
type CompanyAvatarProps = ComponentProps<typeof CompanyAvatar>

export type AvatarVariant =
  | ({ type: "person" } & PersonAvatarProps)
  | ({ type: "team" } & TeamAvatarProps)
  | ({ type: "company" } & CompanyAvatarProps)

export function renderAvatar(
  avatar: AvatarVariant,
  size: (typeof sizes)[number] = "xsmall"
): ReactNode {
  switch (avatar.type) {
    case "person":
      return (
        <PersonAvatar
          firstName={avatar.firstName}
          lastName={avatar.lastName}
          src={avatar.src}
          size={size}
          aria-label={avatar["aria-label"]}
          aria-labelledby={avatar["aria-labelledby"]}
        />
      )
    case "team":
      return (
        <TeamAvatar
          name={avatar.name}
          src={avatar.src}
          size={size}
          aria-label={avatar["aria-label"]}
          aria-labelledby={avatar["aria-labelledby"]}
        />
      )
    case "company":
      return (
        <CompanyAvatar
          name={avatar.name}
          src={avatar.src}
          size={size}
          aria-label={avatar["aria-label"]}
          aria-labelledby={avatar["aria-labelledby"]}
        />
      )
  }
}