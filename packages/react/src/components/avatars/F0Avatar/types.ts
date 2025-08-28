import { BadgeProps } from "@/experimental/Information/Badge"
import { ModuleId } from "@/experimental/Information/ModuleAvatar"
import { ComponentProps } from "react"
import { F0AvatarCompany } from "../F0AvatarCompany"
import { F0AvatarPerson } from "../F0AvatarPerson"
import { F0AvatarTeam } from "../F0AvatarTeam"

export type AvatarBadge = (
  | {
      type: "module"
      module: ModuleId
    }
  | {
      type: Exclude<BadgeProps["type"], undefined>
      icon: BadgeProps["icon"]
    }
) & {
  tooltip?: string
}

type PersonAvatarProps = ComponentProps<typeof F0AvatarPerson>
type TeamAvatarProps = ComponentProps<typeof F0AvatarTeam>
type CompanyAvatarProps = ComponentProps<typeof F0AvatarCompany>

export type AvatarVariant =
  | ({ type: "person" } & Omit<PersonAvatarProps, "size">)
  | ({ type: "team" } & Omit<TeamAvatarProps, "size">)
  | ({ type: "company" } & Omit<CompanyAvatarProps, "size">)
