import { BadgeProps } from "../Badge"
import { ModuleId } from "../ModuleAvatar"

export type AvatarBadge =
  | {
      type: "module"
      module: ModuleId
    }
  | {
      type: Exclude<BadgeProps["type"], undefined>
      icon: BadgeProps["icon"]
    }
