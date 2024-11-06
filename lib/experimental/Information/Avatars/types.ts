import { ComponentProps } from "react"
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
