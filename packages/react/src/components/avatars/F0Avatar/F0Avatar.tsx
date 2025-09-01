import { ComponentProps, ReactNode } from "react"
import { AvatarSize } from "../BaseAvatar"
import { F0AvatarCompany } from "../F0AvatarCompany"
import { F0AvatarPerson } from "../F0AvatarPerson"
import { F0AvatarTeam } from "../F0AvatarTeam"

type PersonAvatarProps = ComponentProps<typeof F0AvatarPerson>
type TeamAvatarProps = ComponentProps<typeof F0AvatarTeam>
type CompanyAvatarProps = ComponentProps<typeof F0AvatarCompany>

export type AvatarVariant =
  | ({ type: "person" } & Omit<PersonAvatarProps, "size">)
  | ({ type: "team" } & Omit<TeamAvatarProps, "size">)
  | ({ type: "company" } & Omit<CompanyAvatarProps, "size">)

export const F0Avatar = ({
  avatar,
  size = "xs",
}: {
  avatar: AvatarVariant
  size?: AvatarSize
}): ReactNode => {
  switch (avatar.type) {
    case "person":
      return (
        <F0AvatarPerson
          firstName={avatar.firstName}
          lastName={avatar.lastName}
          badge={avatar.badge}
          src={avatar.src}
          size={size}
          aria-label={avatar["aria-label"]}
          aria-labelledby={avatar["aria-labelledby"]}
        />
      )
    case "team":
      return (
        <F0AvatarTeam
          name={avatar.name}
          src={avatar.src}
          badge={avatar.badge}
          size={size}
          aria-label={avatar["aria-label"]}
          aria-labelledby={avatar["aria-labelledby"]}
        />
      )
    case "company":
      return (
        <F0AvatarCompany
          name={avatar.name}
          src={avatar.src}
          badge={avatar.badge}
          size={size}
          aria-label={avatar["aria-label"]}
          aria-labelledby={avatar["aria-labelledby"]}
        />
      )
  }
}
