import { BadgeProps } from "@/experimental/Information/Badge"
import { ModuleId } from "@/experimental/Information/ModuleAvatar"
import { ComponentProps } from "react"
import { F0AvatarCompany } from "../F0AvatarCompany"
import { F0AvatarFile } from "../F0AvatarFile"
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
type FileAvatarProps = ComponentProps<typeof F0AvatarFile>

type DistributiveOmit<T, K extends PropertyKey> = T extends unknown
  ? Omit<T, K>
  : never

export type AvatarVariantWithSize =
  | ({ type: "person" } & PersonAvatarProps)
  | ({ type: "team" } & TeamAvatarProps)
  | ({ type: "company" } & CompanyAvatarProps)
  | ({ type: "file" } & FileAvatarProps)

export type AvatarVariant = DistributiveOmit<AvatarVariantWithSize, "size">
